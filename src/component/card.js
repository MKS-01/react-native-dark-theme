import React from 'react';
import {View, Text} from 'react-native';
import {Card, ImageView} from '../styles/card';

const CardComponent = () => {
  return (
    <Card>
      <ImageView
        // type={type}
        source={require('../assets/img/setup.png')}
        resizeMode="cover"
      />
    </Card>
  );
};

export default CardComponent;
