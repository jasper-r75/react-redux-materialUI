import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter as Router } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'
import AppTheme from '../AppTheme'
import DrawerMenu from './DrawerMenu'
import MainSection from './MainSection'

function ResponsiveDrawer(props) {
        
    const { window } = props
    const classes = AppTheme()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <div>
            <Toolbar className={classes.toolbar} />
            <Divider />
            <DrawerMenu/>                                   
        </div>
    )
        
    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <div className={classes.root}>
        <CssBaseline /> 
            <Router>             
                <AppBar position="fixed" className={classes.appBar} elevation={2}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                    </Toolbar>
                </AppBar>            
                <div className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}                
                    <Hidden mdUp implementation="css"> 
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                onClick={handleDrawerToggle}
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                </div> 
                <main className={classes.content}>
                    <MainSection {...props} className={classes.content}/>
                </main>
                
            </Router>
                
        </div>
    )

}
export default ResponsiveDrawer