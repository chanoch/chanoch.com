import React, { Component } from 'react'

class Header extends Component {
    render () {
        const {title, strapline, leftLink, leftLinkText} = this.props;
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <span className="navbar-text order-2 order-md-first">{strapline}</span>
                    <a  href="index.html" 
                        className="navbar-brand animsition-link mr-0 order-first order-md-2">
                            {title}
                    </a>
                    <a className="nav-link order-12" href={leftLink}>{leftLinkText}</a>
                </div>
            </nav>
        )
    }
}

export default Header