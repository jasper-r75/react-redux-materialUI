import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import DrawerMenu from './DrawerMenu'
import { useTheme } from '@material-ui/core/styles'
import {useSelector, useDispatch} from 'react-redux'
import {mobileOpenState} from '../actions'

function ResponsiveDrawer(props) {
    const theme = useTheme()    
    const dispatch = useDispatch()
    const mobileOpen = useSelector(state => state.mobileOpen)
    
    const handleDrawerToggle = () => {
        return dispatch(mobileOpenState(!mobileOpen))
    }
    
    const drawer = (
        <div>
            <Toolbar className={props.classes.toolbar} />            
            <DrawerMenu/>                                   
        </div>
    )
    
    return (
        <div className={props.classes.drawer} aria-label="menu items">                                    
                    <Hidden mdUp implementation="js"> 
                            <Drawer
                                container={window.document.body}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                onClick={handleDrawerToggle}
                                classes={{
                                paper: props.classes.drawerPaper,
                                }}
                                ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="js">
                    <Drawer
                        classes={{
                        paper: props.classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                </div>
    ) 
}
export default ResponsiveDrawer