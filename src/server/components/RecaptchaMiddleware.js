const https = require('https')

const use_recaptcha = true;

module.exports = class RecaptchaMiddleware{
    constructor(site_key, secret_key, options){
        this._api = {
            host:'www.google.com',
            script:'/recaptcha/api.js',
            verify:'/recaptcha/api/siteverify'
        }
        this._site_key = site_key
        this._secret_key = secret_key
        this._options = options || {checkremoteip:false}
        if (!this._site_key) {
            console.warn("No site key - won't use recaptcha");
            this.use_recaptcha = false;
        }
        if (!this._secret_key) {
            console.warn("No secret key - won't use recaptcha");
            this.use_recaptcha = false;
        }
    }
    get middleware() {
        if(this.use_recaptcha) {
            return {
                verify: (req, res, next) => {
                    this.verify(req, (error, data) => {
                        req.recaptcha = {error, data}
                        next()
                    })
                }
            }
        } else {
            return {
                verify: (req,res,next) => {
                    var bypassed = {message: "bypassed"};
                    var data = null;
                    req.recaptcha = {bypassed, data}
                    next();        
                }
            }
        }
    }
    verify(req, cb){
        let response = null;
        let post_options = null;
    
        if (!req) throw new Error('req is required');
        if(req.body && req.body['g-recaptcha-response']) response = req.body['g-recaptcha-response'];
    
        let query_string = 'secret='+this._secret_key+'&response='+response;
        if (this._options.checkremoteip){
        let remote_ip = req.headers && req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.connection.remoteAddress;
        if (remote_ip) query_string += '&remoteip=' + remote_ip
        }
        post_options = {
            host: this._api.host,
            port: '443',
            path: this._api.verify,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(query_string)
            }
        }
    
        let request = https.request(post_options, (res) => {
            let body = ''

            res.setEncoding('utf8')
            res.on('data', (chunk) => {
                body += chunk
            });
            res.on('end', () => {
                const result = JSON.parse(body)
                const error = result['error-codes'] && result['error-codes'].length > 0 ? result['error-codes'][0] : 'invalid-input-response'
                if (result.success) {
                    cb(null, {hostname: result.hostname})
                }
                else {
                    cb(error, null);
                }
            })
            res.on('error', (e) => { 
                cb(e, null) 
            });
        })
        request.write(query_string)
        request.end()
    }
}