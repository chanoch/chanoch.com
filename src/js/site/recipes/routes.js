import MenuApp from './index';
import React from 'react';

const routes = [
    { path: '/recipes/', action: () => <MenuApp /> },
    { path: '/recipes/index.html', action: () => <MenuApp /> },
];

export default routes;
