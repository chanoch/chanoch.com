import toRegex from 'path-to-regexp';

function matchURI(path, uri) {
    const keys = [];
    const pattern = toRegex(path, keys); // TODO: Use caching
    const match = pattern.exec(uri);
    if (!match) return null;
    const params = Object.create(null);
    for (let i = 1; i < match.length; i++) {
        params[keys[i-1].name] =
        match[i] !== undefined ? match[i] : undefined;
    }
    return params;
}

async function resolve(routes, context, store) {
    for (const route of routes) {
        const uri = context.error ? '/error' : context.pathname;
        const params = matchURI(route.path, uri);
        if (!params) continue;
        const result = await route.action(store);
        if (result) return result;
    }
    const error = new Error('Route not found');
    error.status = 404;
    throw error;
}

export default { resolve };