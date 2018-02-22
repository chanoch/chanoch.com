import React from 'react';
import {Provider} from 'react-redux';

import ConnectedMenuPlannerPage from './ConnectedMenuPlannerPage';

export default class MenuPlanner extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedMenuPlannerPage />
            </Provider>
        )
    }
}
