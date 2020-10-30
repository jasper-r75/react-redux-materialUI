import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import {useSelector, useDispatch} from 'react-redux'
import {mobileOpenState} from '../actions'

const MyAppBar = (props) => {
    const dispatch = useDispatch()
    const mobileOpen = useSelector(state => state.mobileOpen)

    const handleDrawerToggle = () => {
        dispatch(mobileOpenState(!mobileOpen))
    }

    return (
        <AppBar position="fixed" className={props.classes.appBar} elevation={2}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={props.classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                       {props.title}
                    </Typography>
                    </Toolbar>
                </AppBar>   
    )
}

export default MyAppBar