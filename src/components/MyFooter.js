import React from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { footerLoadState } from '../actions'
import { Grid, Button, makeStyles } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'

let isLoading = false

const useTheme = makeStyles((theme) => ({
    gridContainer: {
        flexShrink: 1,        
        zIndex: 1201, 
        backgroundColor: '#222222',
        color: '#bbbbbb',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '11px',
    },
    footerItem:{
        flexGrow: 0, 
        minWidth: '320px',
        padding: theme.spacing(1),
        margin: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            minWidth: '80%',
            flexShrink: 0,
        },      
    },
    callToAction:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h4,button': {
            flexShrink: 0
        }     
    }
}))

const buttonHandler = (e) => {
    console.log('clicked the button ', e.target)
}

const MyFooter = (props) =>{ 
    const classes = useTheme()
    let content
    const footerData = useSelector(state => state.footerData) 
    const dispatch = useDispatch()
    if (!isLoading && !footerData.FooterContent) {
        isLoading = true
        axios.get(`http://10.0.15.7:1337/footer?_sort=position`).then(
        response => {
            dispatch(footerLoadState(response.data))            
            return response.data
        }).catch(err => console.log('no menu with that id'))
    }       
    if(footerData.FooterContent){
        isLoading = false;        
        content = (
                <Grid className={classes.gridContainer} container spacing={3} justify="space-evenly" >
                    {footerData.FooterContent.map(footerArea => (                        
                        <Grid className={classes.footerItem} item key={footerArea.id}>
                            <div>
                                {footerArea.Title? (<h4>{footerArea.Title}</h4>) : null}
                                {footerArea.Content? (<Markdown>{footerArea.Content}</Markdown>) : null}
                                {footerArea.CallToAction.length > 0? (
                                    <div className={classes.callToAction}>
                                        <h4>{footerArea.CallToAction[0].actionPhrase}</h4>
                                        <Button variant="contained" color="primary" onClick={(e) => buttonHandler(e)}>{footerArea.CallToAction[0].buttonText}</Button>
                                    </div>
                                ) : null }
                            </div>
                        </Grid>            
                    ))}                   
                </Grid> 
        )
    }
    else{
        content = (<p>Loading Menu...</p>)
    }   
    return content 
}

export default MyFooter