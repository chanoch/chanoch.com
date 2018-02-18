import React, { Component } from 'react'

class Recipe extends Component {
    render () {
        const {name} = this.props;
        return (
            <section className="section section_blog-item">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section_blog-item_body">
                            {/* <div className="section_blog-item_body__img">
                                <img src="assets/img/blog_item_img.jpg" className="img-fluid" alt="..." />
                            </div> */}
                            <h3 className="section_blog-item_body__title text-center mb-0">{name}</h3>
                            {/* <ul className="section_blog-item_body__info">
                                <li><a href="#">24 Dec 2017</a></li>
                                <li>/</li>
                                <li><a href="#">Food</a></li>
                                <li>/</li>
                                <li><a href="#">by John Doe</a></li>
                            </ul>						 */}
    
                            {/* <p className="section_blog-item_body__desc">Lorem ipsum dolor sit amet</p>     */}
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default Recipe