import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { BottomTabsParams } from '../../routes/BottomTabsNavigator';
import { globalColors } from '../../theme';
import { Ionicon } from './Ionicon';

export const HamburguerMenu = () => {
  const navigation = useNavigation<NavigationProp<BottomTabsParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Ionicon name='menu-outline' color={globalColors.primary} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
