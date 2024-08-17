import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { Video } from '../../../core/entities/video.entity';
import { Linking } from 'react-native';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
  video: Video[];
}

export const MovieHeader = ({ poster, originalTitle, title, video = [] }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation();

  const openVideo = (video: Video[]) => {
    try {
      const videoEsp = video.find(video => video.name.includes('Doblado'));

      let key: string | null;

      if (videoEsp) {
        key = videoEsp.key;
      } else {
        key = video[ 0 ].key;
      };

      Linking.openURL(`https://www.youtube.com/watch?v=${key}`)
    } catch (error) {
      console.log('🤖 ~ file: MovieHeader.tsx:36 ~ openVideo ~ error:', error);
      throw new Error(`Cannot open the video for the movie "${title}"`);
    }
  };

  return (
    <>
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        {/* Image */}
        <View style={styles.imageBorder}>
          <Image
            style={styles.posterImage}
            source={{ uri: poster }} />
        </View>

        {/* Video */}
        {video.length > 0
          ? (
            <View style={styles.videoButton}>
              <Pressable onPress={() => openVideo(video)}>
                <Icon name='play-circle-outline' style={styles.Icon} />
              </Pressable>
            </View>
          )
          : (
            <View style={styles.videoButton}>
              <Icon name='close-circle-outline' style={styles.Icon} />
            </View>
          )
        }
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{originalTitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name='arrow-back-outline' style={styles.Icon} />
        </Pressable>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  backButton: {
    position: 'absolute',
    zIndex: 999,
    top: 35,
    left: 10,
  },
  Icon: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.80)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  videoButton: {
    position: 'absolute',
    zIndex: 999,
    bottom: 10,
    right: 20,
  },
});