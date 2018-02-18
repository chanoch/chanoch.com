import RecipesPage from './RecipesPage';
import React from 'react';

const routes = [
    { path: '/recipes/', action: () => <RecipesPage /> },
    { path: '/recipes/index.html', action: () => <RecipesPage /> },
];

export default routes;
