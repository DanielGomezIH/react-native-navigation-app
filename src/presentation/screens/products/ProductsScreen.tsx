import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
];

export const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={styles.heading}>Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            label={item.name}
            onPress={() => navigation.navigate('Product' as never)}
          />
        )}
      />

      <Text style={styles.heading}>Settings</Text>
      <PrimaryButton
        label='Settings'
        onPress={() => navigation.navigate('Settings' as never)}
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
