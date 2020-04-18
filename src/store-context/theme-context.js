import React, {createContext, useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Appearance} from 'react-native';
import {lightTheme, darkTheme} from '../styles/theme';

const defaultMode = Appearance.getColorScheme();
console.log('theme', defaultMode);

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode) => console.log(mode),
});

export const useTheme = () => React.useContext(ThemeContext);

export const ManageThemeProvider = ({children}) => {
  const [themeState, setThemeState] = useState(defaultMode);

  const setMode = (mode) => {
    setThemeState(mode);
    console.log('..............', mode);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setThemeState(colorScheme);
    });
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
