import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackNavigator } from './AppStackNavigator';
import { ProfileScreen } from '../screens';

export type DrawerParams = {
  StackNavigator: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParams>();

export const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='StackNavigator' component={AppStackNavigator} />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
