import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { HamburguerMenu, PrimaryButton } from '../../components';
import { StackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburguerMenu />

      <PrimaryButton
        label='Products'
        onPress={() => navigation.navigate('Products')}
      />

      <PrimaryButton
        label='Settings'
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
