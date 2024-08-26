import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../../routes/AppStackNavigator';
import { globalStyles } from '../../theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>

      <Text style={styles.product}>
        id: {params.id} - name: {params.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
