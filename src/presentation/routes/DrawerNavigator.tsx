import { StyleSheet, useWindowDimensions, View } from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { globalColors } from '../theme';
import { ProfileScreen } from '../screens';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { Ionicon } from '../components';

export type DrawerParams = {
  BottomTabs: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParams>();

export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 750 ? 'permanent' : 'front',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 5,
          marginHorizontal: 20,
        },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicon name='arrow-forward-outline' color={color} size={size} />
          ),
        }}
        name='BottomTabs'
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicon name='accessibility-outline' color={color} size={size} />
          ),
        }}
        name='Profile'
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: globalColors.primary,
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 20,
  },
});
