import React, {createContext, useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Appearance} from 'react-native';
import {lightTheme, darkTheme} from '../styles/theme';
import {storeValue, retriveValue} from '../utils/localStrorage';
import {Platform} from 'react-native';

const defaultMode =
  Appearance.getColorScheme() === 'no-preference'
    ? 'light'
    : Appearance.getColorScheme();

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode) => console.log(mode),
});

export const useTheme = () => React.useContext(ThemeContext);

export const ManageThemeProvider = ({children}) => {
  const [themeState, setThemeState] = useState(defaultMode);

  const setMode = (mode) => {
    setThemeState(mode);
    storeValue('themeMode', mode);
  };

  useEffect(() => {
    let themeMode;

    const themeAysnc = async () => {
      const majorVersionIOS = parseInt(Platform.Version, 10);

      themeMode = await retriveValue('themeMode');

      if ((majorVersionIOS < 13 || Platform.Version < 29) && themeMode) {
        setThemeState(themeMode);
      }
    };

    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setThemeState(colorScheme);
    });

    themeAysnc();

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{mode: themeState, setMode}}>
      <ThemeProvider
        theme={themeState === 'dark' ? darkTheme.theme : lightTheme.theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
