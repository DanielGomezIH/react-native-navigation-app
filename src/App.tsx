import '../gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './presentation/routes';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
