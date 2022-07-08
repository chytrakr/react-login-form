import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
   palette: {
      primary: {
         light: '#fff',
         // main: 'rgb(23, 105, 170)',
         main: "#436af5",
         dark: '#000'
      },
      secondary: {
        main: '#f44336',
      },
   }
   /*typography: {
      useNextVariants: true,
      fontSize: 10
   }*/
});

export default theme;
