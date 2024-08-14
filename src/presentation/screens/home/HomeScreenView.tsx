import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRater, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return (<Text>Cargando...</Text>);
  };

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

        {/* principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* popular */}
        <HorizontalCarousel movies={popular} title='Populares' loadNextPage={popularNextPage} />

        {/* topRater */}
        <HorizontalCarousel movies={topRater} title='Más votadas' />

        {/* upcoming */}
        <HorizontalCarousel movies={upcoming} title='Proximamente' />

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
