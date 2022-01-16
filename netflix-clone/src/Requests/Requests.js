import axios from 'axios'

const API_KEY = 'b8807f6ace5bfa14e09d480fba1f11e8'
const API_BaseURL = 'https://api.themoviedb.org/3'

/*
- Originais Netflix
- Recomendados
- Em Alta
- Series
- Ação
- Comédia
- Terror
- Romance
- Documentários
- Ficção Científica
- Animação
- Aventura

*/

const getRequest = async (endpoint) => {
    const req = await axios.get(`${API_BaseURL}${endpoint}`).then(res => {return res.data.results})

    return req
}

export const data = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await getRequest(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await getRequest(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await getRequest(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await getRequest(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await getRequest(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await getRequest(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await getRequest(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await getRequest(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'sciencefiction',
                title: 'Ficcção Científica',
                items: await getRequest(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'animation',
                title: 'Animação',
                items: await getRequest(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'adventure',
                title: 'Aventura',
                items: await getRequest(`/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }

} 