import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    } 
 
    render() {
        const { title, active, config } =  this.props;
        return (
            <div>
                <Header title={config.title} 
                    strapline={config.strapline} 
                    leftLink={config.linkedinLink} 
                    leftLinkText={config.headerLinkText} />

                <section className="section">
                    <div className="container">
                        <div className="row justify-content-between pb-5">
                            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-6 order-first order-sm-2">                            
            
                                <Navigation active={active} menuItems={config.menuItems}/>
                                <h1 className="section__heading">{title}</h1>

                                {this.props.children}
                            </div>
                        </div>
                    </div>
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