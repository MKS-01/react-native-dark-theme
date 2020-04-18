import React, {useState} from 'react';
// import {AppearanceProvider} from 'react-native';
import {View, Switch} from 'react-native';
import Card from './component/card';
import {ManageThemeProvider} from './store-context/theme-context';
import {
  RootSafeAreaView,
  RootView,
  TitleView,
  TitleText,
  TextContainer,
  TextView,
} from './styles/rootView';
import {useTheme} from './store-context/theme-context';

const App = () => {
  const theme = useTheme();

  console.log('...........', theme);

  return (
    // <AppearanceProvider>
    <ManageThemeProvider>
      <RootSafeAreaView>
        <RootView>
          <TitleView>
            <TitleText>THEME SAMPLE</TitleText>
          </TitleView>
          <View>
            <Card />
          </View>
          <TextContainer>
            <TextView>
              On week days nights I'm a developer. And on weekends, becomes
              security researcher, or if not, then you can find me playing GOD
              OF WAR 4 or DEVIL MAY CRY 5. Currently, I'm working with a startup
              Fanlytiks. Working on their mobile & web analytiks SDKs, mobile
              apps, web apps. On week days nights I'm a developer. And on
              weekends, becomes security researcher, or if not, then you can
              find me playing GOD OF WAR 4 or DEVIL MAY CRY 5. Currently, I'm
              working with a startup Fanlytiks. Working on their mobile & web
              analytiks SDKs, mobile apps, web apps.
            </TextView>
          </TextContainer>
          <Switch
            ios_backgroundColor="#3e3e3e"
            value={theme.mode === 'dark'}
            onValueChange={(value) => theme.setMode(value ? 'dark' : 'light')}
          />
        </RootView>
      </RootSafeAreaView>
    </ManageThemeProvider>
    // </AppearanceProvider>
  );
};

export default App;
