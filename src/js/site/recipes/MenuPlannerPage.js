import React from 'react';
import {Provider, connect } from 'react-redux';

import Layout from '../Layout';
import Divider from '../../components/Divider';
import Recipe from './Recipe';

import history from '../../components/History';

export class MenuPlannerPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.createNewMenu = this.createNewMenu.bind(this);
        this.selectMenu = this.selectMenu.bind(this);
    }

    createNewMenu(e) {
        e.preventDefault();
        this.props.createMenu();
    }

    selectMenu(e) {
        e.preventDefault();
        history.push('/menuplanner/selectmenu.html');
    }

    render() {
        const {menu, createNewMenu} = this.props;
        return (
            <Provider store={this.props.store}>
                <Layout title="Wiggers family menu planner." active={"Menu Planner"}>
                    <div className="col-12">
                        <h1 className="section__heading">Menu Planner</h1>
                        <button onClick={this.createMenu}>Create new menu</button>
                    </div>
                    {menu &&
                    <p><a onClick={this.selectMenu}>Select recipes for menu</a></p>
                    }
                    {menu && menu.selected && 
                        menu.selected.map((recipe) => {
                            return <Recipe recipeId={recipe.key} key={recipe.key} name={recipe.name}/>
                        })
                    }
                </Layout>
            </Provider>
        )
    }
}

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