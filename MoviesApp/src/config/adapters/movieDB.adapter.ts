import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const MovieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '82d8a780c0357f68110956a592614924',
        api_key: THE_MOVIE_DB_KEY ?? '',
        language: 'es'
    }
});