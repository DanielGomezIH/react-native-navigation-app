import { View, Text, StyleSheet } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../theme';
import { PrimaryButton } from '../../components';

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
