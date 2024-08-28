import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicon } from '../components';
import { Tab1Screen } from '../screens';
import { globalColors } from '../theme';
import { StackNavigator } from './StackNavigator';
import { TopTabsnavigator } from './TopTabsNavigator';

export type BottomTabsParams = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParams>();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name='Tab1'
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color, size }) => (
            <Ionicon name='accessibility-outline' size={size} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name='Tab2'
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color, size }) => (
            <Ionicon name='person-outline' size={size} color={color} />
          ),
        }}
        component={TopTabsnavigator}
      />
      <Tab.Screen
        name='Tab3'
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color, size }) => (
            <Ionicon name='home-outline' size={size} color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
