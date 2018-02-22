import axios from 'axios';

export function fetchRecipes(next) {
    axios.get('http://localhost:3002/api/v1/recipes')
        .then(response => next(response.data));
}