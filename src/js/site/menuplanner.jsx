/**
 * Separate spa for recipes
 */

import ReactDOM from 'react-dom';
import history from '../components/History';
import router from '../components/Router';
import routes from './recipes/routes';

import {createStore, applyMiddleware} from 'redux';

import {SelectRecipeMiddleware} from './recipes/redux/SelectRecipe';
import {DeselectRecipeMiddleware} from './recipes/redux/DeselectRecipe';
import {ListRecipesMiddleware, receiveRecipes} from './recipes/redux/ListRecipes';

import {fetchRecipes} from './recipes/service/recipes';

import {rootReducer} from './recipes/ReduxActions';
import { CreateMenuMiddleware } from './recipes/redux/CreateNewMenu';

const store = createStore(rootReducer, {recipes: [], selected: []}, applyMiddleware(
    SelectRecipeMiddleware(),
    DeselectRecipeMiddleware(),
    ListRecipesMiddleware(),
    CreateMenuMiddleware()
)); 

fetchRecipes(recipes => store.dispatch(receiveRecipes(recipes)));

function renderComponent(component) {
    ReactDOM.render(component, document.getElementById('root'));
}

function render(location) {
    router.resolve(routes, location, store)
    .then(renderComponent)
    .catch(error =>
        router.resolve(routes, {location, error})
              .then(renderComponent));
}

render(history.location);
history.listen(render);