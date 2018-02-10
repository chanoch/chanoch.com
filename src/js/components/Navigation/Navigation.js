import React, { PureComponent } from 'react'

class Navigation extends PureComponent {
    render () {
        const {active, menuItems} = this.props;
        return (
            <nav className="nav nav_links">
                {menuItems.map((item) => {
                    var classes = "nav-link";
                    classes += (item.text === active?" active":"")
                    return <a key={item.key} className={classes} href={item.link}>{item.linkText}</a>
                })}
            </nav>
        )
    }
}

export default Navigation