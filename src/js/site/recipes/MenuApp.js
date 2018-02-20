import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {rootReducer} from './ReduxActions';

// async action to load from api endpoint
import recipes from '../../../data/recipes.json';

const store = createStore(rootReducer, {recipes, selected: []});

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
