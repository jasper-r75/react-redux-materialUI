import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MarkDown from 'markdown-to-jsx'
import CardMedia from '@material-ui/core/CardMedia'



function SidebarItem(props) {
    //console.log(props.item.Media)
    let mediaSection = ''
    if(props.item.Media){        
        if ( props.item.Media.mime.indexOf('image') !== -1){
            mediaSection = (            
                <CardMedia style={{height: "160px"}} image={props.item.Media.url} />                
            )
        }
        else if (props.item.Media.mime.indexOf('video') !== -1){
            mediaSection = (
                <video controls width="200" style={{width: "100%", height: "auto"}} >
                    <source src={props.item.Media.url} type={props.item.Media.mime} />
                    Sorry, your browser does not support embedded videos..
                </video>
            )
        }
        
    }        
    return (        
        <Card>            
            {mediaSection} 
            { props.item.Title !== '' ?(
               <CardHeader title={props.item.Title} /> ) : null
            } 
            { props.item.Content !== '' ?(         
             <CardContent>
                <Typography variant="body2" color="textSecondary">
                    <MarkDown>{props.item.Content}</MarkDown> 
                </Typography>                
             </CardContent>) : null 
            }
        </Card>
    )
}

export default SidebarItem