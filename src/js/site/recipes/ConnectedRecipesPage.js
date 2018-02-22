import { connect } from 'react-redux';

import RecipesPage from './RecipesPage';

import {selectRecipe} from './redux/SelectRecipe';
import {deselectRecipe} from './redux/DeselectRecipe';

const mapStateToProps = (state) => {
    const selected = state.menu.selected;
    const recipes = state.recipes;
    return {
        selected,
        recipes
    }
};

const mapDispatchToProps = (dispatch) => ({
    select: (id) => dispatch(selectRecipe(id)),
    deselect: (id) => dispatch(deselectRecipe(id))
});

const ConnectedRecipesPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(RecipesPage);

export default ConnectedRecipesPage;