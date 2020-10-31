import { Grid } from '@material-ui/core'
import React from 'react'
import SidebarItem from './SidebarItem'

export default function ContentSidebar(props) {
    const items = props.sidebarItems 
    return (
        <div id="sidebar-right">
            <Grid direction="column" justify="flex-start" container spacing={2} >
                 {items.map((item) =>{
                return (
                <Grid key={item.id} item >
                    <SidebarItem  item={item} />
                </Grid>
                )
            })  }   
            </Grid>
                  
        </div>
    )
}
