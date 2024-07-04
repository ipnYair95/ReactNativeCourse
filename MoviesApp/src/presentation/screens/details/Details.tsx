import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreen } from '../../loaders/FullScreen';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {

}

export const Details = ({ route }: Props) => {

    const { movieId } = route.params;

    const { isLoading, fullMovie, cast = [] } = useMovie(movieId);

    if (isLoading) {
        return (
            <FullScreen />
        );
    }

    return (
        <ScrollView>

            <MovieHeader originalTitle={fullMovie!.originalTitle} title={fullMovie!.title} poster={fullMovie!.poster} />

            <MovieDetails movie={fullMovie!} cast={cast} />

        </ScrollView>
    )
}
