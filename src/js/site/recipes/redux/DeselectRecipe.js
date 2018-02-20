import {moveElement} from './Utils';

export const DESELECT_RECIPE = 'DESELECT_RECIPE';

export function deselectRecipe(key) {
    return {
        type: DESELECT_RECIPE,
        key
    }
}

/**
 * Deselect a recipe and move it from the .recipes array to the .selected array of 
 * recipes
 * 
 * @param {Object} state - containing two arrays, recipes and selected
 * @param {Object} action - containing a .key property to identify the object
 */
export function deselectRecipeReducer(state, action) {
    const updated = moveElement(action.key, state.selected, state.recipes);
    return {
        selected: updated.source,
        recipes: updated.target,
    }
}
