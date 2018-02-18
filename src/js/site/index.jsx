/**
 * Loads a router into the "root" div of index.htm with the location given by the current
 * URL in the browser address bar. 
 * 
 * The router loads the component which is mapped to the current url. This means that we have
 * sticky links which will load the correct content. A transition to a difference page will update
 * the route and the address bar url.
 * 
 * HomePage.js is the default component for "/" address
 */

import ReactDOM from 'react-dom';
import history from '../components/History';
import router from '../components/Router';
import routes from './routes';

function renderComponent(component) {
    ReactDOM.render(component, document.getElementById('root'));
}

function render(location) {
    router.resolve(routes, location)
    .then(renderComponent)
    .catch(error =>
        router.resolve(routes, {location, error})
              .then(renderComponent));
}

render(history.location);
history.listen(render);