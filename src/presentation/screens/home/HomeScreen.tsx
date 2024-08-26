import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { PrimaryButton } from '../../components';
import { globalStyles } from '../../theme';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label='Products'
        onPress={() => navigation.navigate('Products' as never)}
      />

      <PrimaryButton
        label='Settings'
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
