import React from 'react';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Divider from '../../components/Divider';
import Footer from '../../components/Footer';

import './layout.css';

import config from '../../../config';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    } 
 
    render() {
        const { title, active } =  this.props;
        return (
            <div>
                <Header title={config.title} 
                    strapline={config.strapline} 
                    leftLink={config.linkedinLink} 
                    leftLinkText={config.headerLinkText} />

                <Divider />
                <Navigation active={active} menuItems={config.menuItems}/>
                <Divider />

                <section className="section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12">
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