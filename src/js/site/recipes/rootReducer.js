import {selectRecipe, deselectRecipe} from './actions';

const selectRecipeReducer = (state, action) => {
    const selectedRecipe = state.recipes.find((recipe) => {
        return recipe.id === action.id;
    });
    return {
        selected: state.selected.slice(0).push(selectedRecipe),
        recipes: state.recipes.filter((recipe) => {
            return action.id !== recipe.id;
        })
    }
}

const deselectRecipeReducer = (state, action) => {
    const deselectedRecipe = state.selected.find((recipe) => {
        return recipe.id === action.id;
    });
    return {
        recipes: state.selected.slice(0).push(deselectedRecipe),
        selected: state.recipes.filter((recipe) => {
            return action.id !== recipe.id;
        })
    }
}

const rootReducer = function(state, action) {
    switch(action.type) {
        case selectRecipe.type: selectRecipeReducer
        case deselectRecipe.type: deselectRecipeReducer
        default: return state;
    }
}

export default rootReducer;