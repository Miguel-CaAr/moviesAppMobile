import { ActivityIndicator, Text, View } from 'react-native'

export const FullScreenLoader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color={'indigo'} />
    </View>
  )
}