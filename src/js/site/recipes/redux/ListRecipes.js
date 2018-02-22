import {fetchRecipes} from '../service/recipes';

export const LIST_RECIPES = 'LIST_RECIPES'; 
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const LIST_RECIPES_FAILED = 'LIST_RECIPES_FAILED';

// added this action creator just in case but the reducer is currently invoked by the @@redux/INIT action
export function listRecipes() {
    return {
        type: LIST_RECIPES,
    }
}

/** 
 * Async mutating middleware that loads the full list of recipes and then dispatches an action to render
 * them 
 */
export function ListRecipesMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.key==='LIST_RECIPES') {
            fetchRecipes(recipes => dispatch(receiveRecipes(recipes)));
        }
    }
}

export function listRecipeFailed() {
    return {
        type: LIST_RECIPES_FAILED
    }
}

export function receiveRecipes(recipes) {
    return {
        type: RECEIVE_RECIPES,
        recipes,
        selected: [],
        receivedAt: Date.now()
    }
}

export function receiveRecipesReducer(state, action) {
    return {
        recipes: action.recipes,
        selected: action.selected,
    }
}

/**
 * List all recipes (ASYNC)
 * 
 * @param {Object} state - to add the list of available recipes to
 * @param {Object} action - identifies this action
 */
export function listRecipesReducer(state, action) {
    return state;
}

