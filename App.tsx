import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import HomeHeader from './src/components/HomeHeader/HomeHeader';
import Cats from './src/pages/Cats';
import Cadaster from './src/pages/Cadaster';

import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { Provider } from './src/contexts/context';

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Aguarde...
        </Text>
      </View>
    )
  } else {
    return (
      <NavigationContainer>
        <Provider >
          <StatusBar barStyle="light-content" />
          <AppRoutes />
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
