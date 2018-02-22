import React from 'react';
import {Provider} from 'react-redux';

import ConnectedRecipesPage from './ConnectedRecipesPage';

export default class ChooseRecipes extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRecipesPage />
            </Provider>
        )
    }
}
