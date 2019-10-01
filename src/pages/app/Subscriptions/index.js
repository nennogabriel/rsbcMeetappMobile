import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

// import { Container } from './styles';

export default function Subscriptions() {
  return <View />;
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: option => (
    <Icon name="local-offer" size={20} color={option.tintColor} />
  ),
};
