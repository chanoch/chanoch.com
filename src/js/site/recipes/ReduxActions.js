import {SELECT_RECIPE, selectRecipeReducer} from './redux/SelectRecipe';
import {DESELECT_RECIPE, deselectRecipeReducer} from './redux/DeselectRecipe';

export function rootReducer(state, action) {
    switch(action.type) {
        case '@@redux/INIT': return state;
        case 'SELECT_RECIPE': return selectRecipeReducer(state, action);
        case 'DESELECT_RECIPE': return deselectRecipeReducer(state, action);
        default: return state;
    }
}

