import { Cast } from "../../core/entities/cast.entity";
import { CastDto } from "../interfaces/cast-db.response";

export class CastMapper{

    static fromMovieDbCastToEntity(cast: CastDto): Cast {
        return {
            id: cast.id,
            name: cast.name,
            character: cast?.character || '',
            avatar: cast?.profile_path 
                ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                : 'https://i.stack.imgur.com/GNhxO.png'
        }
    }

}