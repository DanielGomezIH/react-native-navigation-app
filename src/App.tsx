import '../gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AppNavigator } from './presentation/routes/AppNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
