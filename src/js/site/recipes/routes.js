import ChooseRecipes from './ChooseRecipes';
import MenuPlanner from './MenuPlanner';
import React from 'react';

const routes = [
    { path: '/menuplanner/', action: (store) => <MenuPlanner store={store} /> },
    { path: '/menuplanner/selectmenu.html', action: (store) => <ChooseRecipes  store={store}/> },
];

export default routes;
