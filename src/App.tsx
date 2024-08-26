import '../gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AppDrawerNavigator } from './presentation/routes/AppDrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <AppStackNavigator /> */}
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
