import * as React from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

export const createMediaRule = (pixels: string) =>
  `@media (min-width: ${pixels})`;

export const theme = {
  breakpoints: {
    sm: '768px',
    md: '1024px',
    lg: '1440px',
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

export const ThemeProvider: React.FC = props => {
  const [themeVariant, setTheme] = React.useState<Theme>('light');

  const setThemeVariation = (value: Theme) => {
    setTheme(value);
  };

  const toggleTheme = () => {
    setTheme(value => (value === 'light' ? 'dark' : 'light'));
  };

  React.useEffect(() => {
    document.body.className = themeVariant;
  }, [themeVariant]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const childrenMemoized = React.useMemo(() => props.children, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeVariant,
        setTheme: setThemeVariation,
        toggleTheme,
      }}
    >
      <ThemeProviderStyled theme={theme}>
        {childrenMemoized}
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
