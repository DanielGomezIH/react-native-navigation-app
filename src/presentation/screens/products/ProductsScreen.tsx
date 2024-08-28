import { StyleSheet, Text, View } from 'react-native';

import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type StackParams } from '../../routes/StackNavigator';

import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components';
import { globalStyles } from '../../theme';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={styles.heading}>Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            label={item.name}
            onPress={() =>
              navigation.navigate('Product', { id: item.id, name: item.name })
            }
          />
        )}
      />

      <Text style={styles.heading}>Settings</Text>
      <PrimaryButton
        label='Settings'
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 10,
    fontSize: 30,
  },
});
