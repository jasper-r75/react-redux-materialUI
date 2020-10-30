import React from 'react'
import SidebarItem from './SidebarItem'

export default function ContentSidebar(props) {
    const items = props.sidebarItems 
    return (
        <div id="sidebar-right">
            {items.map((item) =>{
                return (<SidebarItem key={item.id} title={item.Title} content={item.Content} />)
            })  }          
        </div>
    )
}
