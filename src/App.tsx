import React from 'react';
import {ColorScheme, ColorSchemeProvider, Global, MantineProvider, MantineThemeOverride} from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { useLocalStorage } from '@mantine/hooks';

// @ts-ignore
import fontRegular from './assets/fonts/GreycliffCF-Regular.woff2';
// @ts-ignore
import fontMedium from './assets/fonts/GreycliffCF-Medium.woff2';
// @ts-ignore
import fontDemiBold from './assets/fonts/GreycliffCF-DemiBold.woff2';
// @ts-ignore
import fontBold from './assets/fonts/GreycliffCF-Bold.woff2';
// @ts-ignore
import fontHeavy from './assets/fonts/GreycliffCF-Heavy.woff2';

export const App: React.FC = () => {
  const MANTINE_THEME: MantineThemeOverride = {
    fontFamily: 'Greycliff CF',
    primaryColor: 'indigo',
    breakpoints: {
      xs: 350,
      sm: 768,
      md: 1024,
      lg: 1368,
      xl: 1600,
    },
  };

  const GlobalStyles = () => {
    return (
      <Global
        styles={[
          {
            '@font-face': {
              fontFamily: 'Greycliff CF',
              src: `url('${fontRegular}') format("woff2")`,
              fontWeight: 400,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Greycliff CF',
              src: `url('${fontMedium}') format("woff2")`,
              fontWeight: 500,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Greycliff CF',
              src: `url('${fontDemiBold}') format("woff2")`,
              fontWeight: 600,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              // fontFamily: 'Greycliff CF',
              src: `url('${fontBold}') format("woff2")`,
              fontWeight: 700,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Greycliff CF',
              src: `url('${fontHeavy}') format("woff2")`,
              fontWeight: 900,
              fontStyle: 'normal',
            },
          },
        ]}
      />
    );
  };

  //Темная тема
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  //Render
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ ...MANTINE_THEME, colorScheme }} withGlobalStyles withNormalizeCSS>
        <GlobalStyles />
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
