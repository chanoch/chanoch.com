import {moveElement} from './Utils';

export const SELECT_RECIPE = 'SELECT_RECIPE'; 

export function selectRecipe(key) {
    return {
        type: SELECT_RECIPE,
        key
    }
}

/**
 * Select a recipe and move it from the .recipes array to the .selected array of 
 * recipes
 * 
 * @param {Object} state - containing two arrays, recipes and selected
 * @param {Object} action - containing a .key property to identify the object
 */
export function selectRecipeReducer(state, action) {
    const updated = moveElement(action.key, state.recipes, state.selected);
    return {
        recipes: updated.source,
        selected: updated.target,
    }
}

