import React from 'react';
import {View} from 'react-native';
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
import SwitchComponent from './component/switch';

const App = () => {
  return (
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
          <SwitchComponent />
        </RootView>
      </RootSafeAreaView>
    </ManageThemeProvider>
  );
};

export default App;
