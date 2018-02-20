import React from 'react';

import Layout from '../Layout';
import Divider from '../../components/Divider';

import Recipe from './Recipe';

export default (props) => {
    const {selected, recipes, select, deselect} = props;
    return (
        <Layout title="Wiggers family recipes." active={"Recipes"}>
            <div className="col-12">
                <h1 className="section__heading">Selected</h1>
                {selected.map((recipe) => {
                    return <Recipe recipeId={recipe.key} key={recipe.key} name={recipe.name} onClick={deselect} />
                })}
                <Divider />
                <h1 className="section__heading">Recipes</h1>
                {recipes.map((recipe) => {
                    return <Recipe recipeId={recipe.key} key={recipe.key} name={recipe.name} onClick={select} />
                })}
            </div>
        </Layout>
    )
}