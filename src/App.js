import React from 'react'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme( {
     palette:{
       type: 'light',
       primary:{
         light: "#aaffaa",
         main: "#ddffdd",
         dark: "#448844",
         contrastText: "#222222"
       },
       secondary:{
         light: "#aaffaa",
         main: "#ccffcc",
         dark: "#448844"
       },
       background:{
         light: "#bbffbb",
         main: "#bbffbb"
       }
     },
     typography:{
        fontFamily: [
          'Poppins',
          'sans-serif',
        ].join(','),
        fontWeightBold: 500,
        fontWeightRegular: 400,
        fontWeightLight:300,        
     }     
   });

const App = () => {
      return (
     <div>
          <ThemeProvider theme={theme}>
               <ResponsiveDrawer /> 
          </ThemeProvider>    
     </div>
     
     )    
}
export default App