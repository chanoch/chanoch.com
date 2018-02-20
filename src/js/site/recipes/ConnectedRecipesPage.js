import { connect } from 'react-redux';

import RecipesPage from './RecipesPage';

import {selectRecipe} from './redux/SelectRecipe';
import {deselectRecipe} from './redux/DeselectRecipe';

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
            mapDispatchToRecipePageProps
        )(RecipesPage);

export default ConnectedRecipesPage;