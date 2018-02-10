import React, { Component } from 'react'

class Navigation extends Component {
    render () {
        return (
            <nav className="nav nav_links">
                {/* <a className="nav-link animsition-link" href="about.html">About</a> */}
                <a className="nav-link animsition-link" href="menu.html">Menu</a>
                {/* <a className="nav-link animsition-link" href="blog.html">Blog</a>
                <a className="nav-link animsition-link" href="gallery.html">Gallery</a>
                <a className="nav-link animsition-link" href="contact.html">Contact</a> */}
            </nav>
        )
    }
}

export default Navigation