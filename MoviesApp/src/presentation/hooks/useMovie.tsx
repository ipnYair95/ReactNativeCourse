import React, { useEffect, useState } from 'react'
import { FullMovie } from '../../core/entities/movie.entity';
import * as UsesCases from '../../core/use-cases';
import { MovieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);

    const [fullMovie, setFullMovie] = useState<FullMovie | null>(null);

    const [cast, setCast] = useState<Cast[]>([]);

    useEffect(() => {

        loadMovie();

    }, [movieId])

    const loadMovie = async () => {

        setIsLoading(true);

        const [fullmovie, cast] = await Promise.all([
            UsesCases.getMovieByIdUseCase(MovieDBFetcher, movieId),
            UsesCases.getMovieCastUseCase(MovieDBFetcher, movieId)
        ]);

        setFullMovie(fullmovie);

        setCast(cast);

        setIsLoading(false);
    }


    return {
        isLoading,
        fullMovie,
        cast
    }
}
