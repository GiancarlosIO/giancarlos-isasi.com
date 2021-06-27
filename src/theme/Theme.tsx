import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

const GlobalCss = createGlobalStyle<{ dark: boolean }>`
  ${props => props.theme.breakpoints.mediaLg()} {
    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${props =>
        props.dark ? 'rgba(31, 41, 55, .9)' : 'rgba(31, 41, 55, .1)'};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props =>
        props.dark ? 'rgba(0,0,0,1)' : '#0000005e'};
      border-radius: 40px;
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
`;

export const createMediaRule = (pixels: string) =>
  `@media (min-width: ${pixels})`;

export const theme = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    mediaSm: () => createMediaRule(theme.breakpoints.sm),
    mediaMd: () => createMediaRule(theme.breakpoints.md),
    mediaLg: () => createMediaRule(theme.breakpoints.lg),
  },
};

type Theme = 'light' | 'dark';
type State = {
  theme: Theme;
  setTheme: (value: Theme) => void;
  toggleTheme: () => void;
};
const ThemeContext = React.createContext<State | undefined>(undefined);

const localStorageKey = '__MRN_THEME_PAGE';

const playSwitchSound = (value: Theme) => {
  const audioType = value === 'light' ? 'switch-off' : 'switch-on';
  const audio = new Audio(`/sounds/${audioType}.mp3`);
  audio.volume = 0.3;
  audio.play();
};

export const ThemeProvider: React.FC = props => {
  const [themeVariant, setTheme] = React.useState<Theme>('light');

  const setThemeVariation = (value: Theme) => {
    window.localStorage.setItem(localStorageKey, value);
    setTheme(value);
  };

  const toggleTheme = () => {
    setTheme(value => {
      const newValue = value === 'light' ? 'dark' : 'light';
      playSwitchSound(newValue);
      window.localStorage.setItem(localStorageKey, newValue);

      return newValue;
    });
  };

  React.useEffect(() => {
    const currentTheme = window.localStorage.getItem(localStorageKey) as Theme;
    // sync react state with localstorage
    if (currentTheme && themeVariant !== currentTheme) {
      setTheme(currentTheme);
    }

    document.body.className = currentTheme || themeVariant;
  }, [themeVariant]);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeVariant,
        setTheme: setThemeVariation,
        toggleTheme,
      }}
    >
      <ThemeProviderStyled theme={theme}>
        <GlobalCss dark={themeVariant == 'dark'} />
        {props.children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error('useTheme must be used within the ThemeProvider');
  }
  return theme;
};
