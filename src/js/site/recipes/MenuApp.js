import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {SelectRecipeMiddleware} from './redux/SelectRecipe';
import {DeselectRecipeMiddleware} from './redux/DeselectRecipe';
import {ListRecipesMiddleware, receiveRecipes} from './redux/ListRecipes';

import {fetchRecipes} from './service/recipes';

import {rootReducer} from './ReduxActions';

const store = createStore(rootReducer, {recipes: [], selected: []}, applyMiddleware(
    SelectRecipeMiddleware(),
    DeselectRecipeMiddleware(),
    ListRecipesMiddleware(),
)); 

fetchRecipes(recipes => store.dispatch(receiveRecipes(recipes)));

import ConnectedRecipesPage from './ConnectedRecipesPage';

export default class MenuApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRecipesPage />
            </Provider>
        )
    }
}
