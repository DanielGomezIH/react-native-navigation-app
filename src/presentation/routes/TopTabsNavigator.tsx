import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AboutScreen, ProfileScreen } from '../screens';
import { HamburguerMenu } from '../components';
import { globalColors } from '../theme';

export type TopTabsParams = {
  Profile: undefined;
  About: undefined;
};

const Tab = createMaterialTopTabNavigator<TopTabsParams>();

export const TopTabsnavigator = () => {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: globalColors.background,
        }}
      >
        <Tab.Screen name='Profile' component={ProfileScreen} />
        <Tab.Screen name='About' component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
