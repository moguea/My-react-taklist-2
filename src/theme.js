import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    light: {
      background: '#ffffff',
      text: '#000000',
    },
    dark: {
      background: '#282c34',
      text: '#ffffff',
    },
  },
});

export { theme };
