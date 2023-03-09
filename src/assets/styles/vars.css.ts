import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    colors: {
    green:{
        400: '#4ade80',
        300: '#86efac',
    }, teal:{
        200: '#99f6e4',
        300: '#5eead4'
    }
  },

  fonts: {
    Poppins: 'Poppins',
    Inter: 'Inter',
  }
});