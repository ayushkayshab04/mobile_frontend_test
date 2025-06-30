/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import RootNavigator from './src/navigations/RootNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
