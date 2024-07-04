import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity';
import * as UsesCases from '../../core/use-cases';
import { MovieDBFetcher } from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    const [popular, setPopular] = useState<Movie[]>([]);

    const [topRated, setTopRated] = useState<Movie[]>([]);

    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetchMovies();

    }, [])

    const fetchMovies = async () => {

        const [nowPlaying, upcoming, topRated, popular] = await Promise.all([
            UsesCases.moviesNowPlayingUseCase(MovieDBFetcher),
            UsesCases.upcomingUseCase(MovieDBFetcher),
            UsesCases.topRatedUseCase(MovieDBFetcher),
            UsesCases.popularUseCase(MovieDBFetcher)
        ]);

        console.log(nowPlaying, upcoming, topRated, popular);

        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setTopRated(topRated);
        setPopular(popular);
        setIsLoading(false);

    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,
        popularNextPage: async () => {
            popularPageNumber++;

            const popuplarMovies = await UsesCases.moviesNowPlayingUseCase( MovieDBFetcher, {
                page: popularPageNumber
            } )

            setPopular( current => [...current, ...popuplarMovies] );

        }
    }
}
