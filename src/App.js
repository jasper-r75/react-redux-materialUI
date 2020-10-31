import React from 'react'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import MyAppBar from './components/MyAppBar'
import MainSection from './components/MainSection'
import AppTheme from './AppTheme'
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter as Router } from 'react-router-dom'
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
         dark: "#448844",
         contrastText: "#dddddd"
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
      const classes = AppTheme()

      return (
     <div>
          <ThemeProvider theme={theme}>
          <div className={classes.root}>
              <CssBaseline /> 
              <Router>             
                  <MyAppBar classes={classes} title="My Material-UI boilerplate"/>     
                  <ResponsiveDrawer classes={classes} />
                  <main className={classes.content}>
                      <MainSection className={classes.content}/>
                  </main>                  
              </Router>                  
          </div>
          </ThemeProvider>    
     </div>
     
     )    
}
export default App