import React from 'react';

import Layout from '../Layout';

import Divider from '../../components/Divider';
import Signature from '../../components/Signature'
import Recipe from '../../components/Recipe';

import config from '../../../config';

export default (props) => {
    const {selected, recipes} = props;
    return (
        <Layout title="Wiggers family recipes." config={config} active={"Recipes"}>
            <div className="col-12">
                <h1 className="section__heading">Selected</h1>
                {selected.map((recipe) => {
                    return <Recipe key={recipe.key} name={recipe.name} />
                })}
                <Divider />
                <h1 className="section__heading">Recipes</h1>
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.key} name={recipe.name} />
                })}
            </div>
        </Layout>
    )
}