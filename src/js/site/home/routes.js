import HomePage from './HomePage';
import React from 'react';

const routes = [
    { path: '/', action: () => <HomePage /> },
    { path: '/index.html', action: () => <HomePage /> },
];

export default routes;
