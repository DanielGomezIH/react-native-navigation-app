import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { PrimaryButton } from '../../components';
import { globalStyles } from '../../theme';
import { RootStackParams } from '../../routes/AppStackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
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
