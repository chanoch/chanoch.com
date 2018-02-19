import React from 'react';

import {Provider,connect} from 'react-redux';

import {createStore} from 'redux';
import rootReducer from './rootReducer';
import RecipesPage from './RecipesPage';

import {selectRecipe, deselectRecipe} from './actions';

import recipes from '../../../data/recipes.json';

const store = createStore(rootReducer, {recipes, selected: []});

const mapStateToRecipePageProps = (state) => {
    const selected = state.selected;
    const recipes = state.recipes;
    return {
        selected,
        recipes
    }
};

const mapDispatchToRecipePageProps = (dispatch) => ({
    select: (id) => dispatch(selectRecipe(id)),
    deselect: (id) => dispatch(deselectRecipe(id))
});

const ConnectedRecipesPage = 
        connect(
            mapStateToRecipePageProps, 
            mapDispatchToRecipePageProps)(RecipesPage);

export default class MenuApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRecipesPage />
            </Provider>
        )
    }
}
