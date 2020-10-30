import React from 'react'
import Typography from '@material-ui/core/Typography'
import MarkDown from 'markdown-to-jsx'

function SidebarItem(props) {
    return (
        <div>
            <Typography variant="h6">{props.title}</Typography>
            <MarkDown>{props.content}</MarkDown>
        </div>
    )
}

export default SidebarItem