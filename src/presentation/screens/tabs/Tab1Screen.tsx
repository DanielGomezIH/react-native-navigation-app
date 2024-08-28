import { Text, View } from 'react-native';
import { HamburguerMenu } from '../../components';
import { globalStyles } from '../../theme';

export const Tab1Screen = () => {
  return (
    <View style={globalStyles.container}>
      <HamburguerMenu />
      <Text>Tab1Screen</Text>
    </View>
  );
};

