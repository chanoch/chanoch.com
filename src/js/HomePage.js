import React, { Component } from 'react'

import Navigation from './components/navigation';
import Footer from './components/footer';
import Quote from './components/quote';
import Divider from './components/divider';
import config from '../config';

export default class HomePage extends Component {
    render () {
        return (
            <div>
	<section className="section section_home">

<div className="container">
    <div className="row justify-content-between">

        <div className="col-12 col-md-5 order-2 order-md-1">
            <div className="section_home__img">
                <img src="assets/img/home_img.jpg" className="img-fluid" alt="..."/>
            </div>
        </div>

        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-6 order-md-1">
            
            <Navigation navigation={config.navigation} />            
            <h1 className="section__heading">Welcome to chanoch's play ground</h1>

            <Divider />
            
            <div className="signature_img">
                <img src="assets/img/signature_img.png" className="img-fluid" alt="..."/>
            </div>


        </div>
    </div> 
</div> 

</section> 

<section className="section section_quote">
    <Quote quote="Some wise thing" author="the master"/>
</section>     
    <Footer 
        rights={config.rights} 
        twitterLink={config.twitterLink} 
        twitterLinkText={config.twitterLinkText}
        linkedinLink={config.linkedinLink}
        linkedinLinkText={config.linkedinLinkText}
        />
    </div>
        )
    }
}