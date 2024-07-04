import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreen } from '../../loaders/FullScreen';

export const Home = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return (
      <FullScreen />
    );
  }

  return (
    <ScrollView>

      <View style={{
        marginTop: 20 + top,
        paddingBottom: 30
      }} >

        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel movies={popular} title='Populares' loadNextPage={popularNextPage} />

        <HorizontalCarousel movies={topRated} title='Mejor calificadas' />

        <HorizontalCarousel movies={upcoming} title='Próximamente' />

      </View>

    </ScrollView>
  )
}
