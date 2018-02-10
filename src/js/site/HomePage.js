import React, { Component } from 'react'

import Divider from '../components/Divider';
import Signature from '../components/Signature'
import Layout from './Layout';

import config from '../../config';

import home from '../../data/home.json';

export default class HomePage extends Component {
    render () {
        return (
            <Layout title="Chanoch's personal site." config={config} active={"Home"}>
                <div className="col-12">
                    <h1 className="section__heading">{home.greeting}</h1>
                    <Divider />
                    <Signature text={home.signature} />
                </div>
            </Layout>
        )
    }
}