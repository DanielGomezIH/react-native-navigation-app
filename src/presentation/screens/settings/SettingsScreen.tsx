import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../theme';
import { PrimaryButton } from '../../components';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>SettingsScreen</Text>

      <PrimaryButton label='Regresar' onPress={() => navigation.goBack()} />

      <PrimaryButton
        label='Regresar al Home'
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
