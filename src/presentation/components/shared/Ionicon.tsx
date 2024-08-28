import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number | undefined;
  color?: string | number | undefined;
}

export const Ionicon = ({ name, size = 25, color = 'black' }: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
