import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { CastDbResponse } from "../../../infrastructure/interfaces/cast-db.response";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {

    try {

        const { cast } = await fetcher.get<CastDbResponse>(`/${movieId}/credits`);

        return cast.map((cast) => CastMapper.fromMovieDbCastToEntity(cast));
        
    } catch (error) {
        throw new Error(`Cannot get movie cast by id ${movieId}`);
    }

}