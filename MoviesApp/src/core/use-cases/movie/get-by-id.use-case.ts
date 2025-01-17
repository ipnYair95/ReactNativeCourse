import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovieResponse } from "../../../infrastructure/interfaces/movie-db-id.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

    try {

        const resp = await fetcher.get<MovieDBMovieResponse>(`/${movieId}}`);

        return MovieMapper.fromMovieDBToEntity(resp);

    } catch (error) {
        throw new Error(`Cannot get movie by id ${movieId}`)
    }

}