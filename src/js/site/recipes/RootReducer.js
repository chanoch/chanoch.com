import { SELECT_RECIPE, selectRecipeReducer } from './redux/SelectRecipe';
import { DESELECT_RECIPE, deselectRecipeReducer } from './redux/DeselectRecipe';
import { LIST_RECIPES, listRecipesReducer, RECEIVE_RECIPES, receiveRecipesReducer } from './redux/ListRecipes';
import { CREATE_MENU, createMenuReducer } from './redux/CreateNewMenu';

export function rootReducer(state, action) {
    switch(action.type) {
        case '@@redux/INIT': return listRecipesReducer(state, action);
        case SELECT_RECIPE: return selectRecipeReducer(state, action);
        case DESELECT_RECIPE: return deselectRecipeReducer(state, action);
        case RECEIVE_RECIPES: return receiveRecipesReducer(state, action);
        case CREATE_MENU: return createMenuReducer(state, action);
        default: return state;
    }
}

