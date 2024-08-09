import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigation } from './presentation/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
