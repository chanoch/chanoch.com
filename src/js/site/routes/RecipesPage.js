import React, { Component } from 'react'

import Divider from '../../components/Divider';
import Signature from '../../components/Signature'
import Layout from '../Layout';
import Recipe from '../../components/Recipe';

import config from '../../../config';

import recipes from '../../../data/recipes.json';

export default class RecipesPage extends Component {
    render () {
        return (
            <Layout title="Wiggers family recipes." config={config} active={"Recipes"}>
                <div className="col-12">
                    <h1 className="section__heading">Recipes</h1>
                    <Divider />
                    {recipes.map((recipe) => {
                        return <Recipe key={recipe.key} name={recipe.name} />
                    })}
                </div>
            </Layout>
        )
    }
}