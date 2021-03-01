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

export const ThemeProvider: React.FC = props => {
  return (
    <ThemeProviderStyled theme={theme}>{props.children}</ThemeProviderStyled>
  );
};
