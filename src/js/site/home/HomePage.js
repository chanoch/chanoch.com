import React, { Component } from 'react'

import Divider from '../../components/Divider';
import Signature from '../../components/Signature'
import Layout from '../Layout';

import home from '../../../data/home.json';

export default class HomePage extends Component {
    render () {
        return (
            <Layout title="Chanoch's personal site." active={"Home"}>
                <div className="col-12">
                    <h1 className="section__heading">{home.greeting}</h1>
                    <Divider />
                    <p>Thanks for visiting my site. I run this to amuse myself.</p>
                    <p>Menu Planner is a React playground which I use for mucking about with react and redux.</p>
                    <Signature text={home.signature} />
                </div>
            </Layout>
        )
    }
}