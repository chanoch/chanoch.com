exports.selectRecipe = (id) => {
    type: 'SELECT_RECIPE',
    id
}

exports.deselectRecipe = (id) => {
    type: 'DESELECT_RECIPE',
    id
}

exports.useRecipe = (id) => {
    type: 'USE_RECIPE',
    id
}