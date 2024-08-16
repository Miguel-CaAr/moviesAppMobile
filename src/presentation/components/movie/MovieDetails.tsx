import { Text, View, StyleSheet } from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity'
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        {/* Rating and genres */}
        <View style={{ flexDirection: 'row' }}>
          <Text>⭐{movie.raiting}</Text>
          <Text style={{ marginLeft: 5 }}>- {movie.genres.join(", ")}</Text>
        </View>

        {/* Description */}
        <Text style={styles.title}>Historia</Text>
        <Text style={{ fontSize: 16 }}>{movie.description}</Text>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={{ fontSize: 16 }}>{Formatter.currency(movie.budget)}</Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <Text style={styles.castingContainer}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          horizontal
          // showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastActor actor={item} />}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold'
  },
  castingContainer: {
    fontSize: 23,
    marginHorizontal: 20,
    marginVertical: 10,
    fontWeight: 'bold'
  }
});