const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdbService = {
    async getTrendingMovies() {
        const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}&language=fr-FR`, {
            next: { revalidate: 3600 } // Cache d'une heure
        });

        if (!res.ok) throw new Error('Impossible de charger les films');
        const data = await res.json();
        return data.results;
    }
};