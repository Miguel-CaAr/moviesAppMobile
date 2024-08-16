import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

const DetailScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast = [], video = [] } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading</Text>
  };

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
        video={video}
      />

      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} video={video} />
    </ScrollView>
  );
};

export default DetailScreen;
