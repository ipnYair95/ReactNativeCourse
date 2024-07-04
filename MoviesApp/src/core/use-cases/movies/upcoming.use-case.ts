import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse, NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const upcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');        

        return upcoming.results.map((result) => MovieMapper.fromMovieDBResultToEntity(result));

    } catch (error) {
        console.error(error);
        throw new Error("Error fetching now upcoming movies");
    }

}