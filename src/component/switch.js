import React from 'react';
import {View, Switch} from 'react-native';
import {useTheme} from '../store-context/theme-context';

const SwitchComponent = () => {
  const theme = useTheme();

  return (
    <View>
      <Switch
        ios_backgroundColor="#3e3e3e"
        value={theme.mode === 'dark'}
        onValueChange={(value) => theme.setMode(value ? 'dark' : 'light')}
      />
    </View>
  );
};

export default SwitchComponent;
