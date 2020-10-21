import React from 'react'
import List from '@material-ui/core/List'
import ListItemLink from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LinkIcon from '@material-ui/icons/Link'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setSidebarMenu } from '../actions'
import { useTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

let isLoading = false

const DrawerMenu = (props) =>{
    const theme = useTheme();
    let content
    const menuData = useSelector(state => state.sidebarMenuData) 
    const dispatch = useDispatch()
    if (!isLoading && !menuData.Pages) {
        isLoading = true
        axios.get(`http://10.0.15.7:1337/menus/5f8c78c531e4772de0fdb3d9`).then(
        response => {
            dispatch(setSidebarMenu(response.data))            
            return response.data
        }).catch(err => console.log('no menu with that id'))
    }       
    if(menuData.Pages){
        isLoading = false;
        const contrastText = theme.palette.primary.contrastText
        content = (
                <List component="nav">
                    {menuData.Pages.map(article => (                        
                        <ListItemLink key={article.id} component={Link} to={`/page/${article.slug}`}  >
                            <ListItemIcon><LinkIcon /></ListItemIcon>
                            <ListItemText disableTypography primary={(<Typography style={{color: `${contrastText}`}}>{article.title}</Typography>)} />
                        </ListItemLink>            
                    ))}
                    <Divider />
                </List> 
        )
    }
    else{
        content = (<div id="menu"><p>Loading Menu...</p></div>)
    }   
    return content 
}

export default DrawerMenu