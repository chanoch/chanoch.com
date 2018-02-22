import { connect } from 'react-redux';

import MenuPlannerPage from './MenuPlannerPage';

import {createNewMenu} from './redux/CreateNewMenu';

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
};

const mapDispatchToProps = (dispatch) => ({
    createMenu: () => dispatch(createNewMenu()),
});

const ConnectedMenuPlannerPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(MenuPlannerPage);

export default ConnectedMenuPlannerPage;