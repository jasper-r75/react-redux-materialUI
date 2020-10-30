import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MarkDown from 'markdown-to-jsx'
import axios from 'axios'
import {contentLoadState, setContent} from '../actions'
import {useDispatch, useSelector} from 'react-redux'
import ContentSidebar from './ContentSidebar'

let isLoading = false
const PageContent = (props) => { 
    const dispatch = useDispatch()
    const article = useSelector(state => state.contentData)
    const routes = useSelector(state => state.routesData)    
    const slug = props.match.params.id
    const matchedRoutes = routes.filter((route) => route.slug === slug)
    const id = matchedRoutes.length > 0 ? matchedRoutes[0].id : '';    
    
    if(isLoading === false && article.id !== id){
        isLoading = true
        axios.get(`http://10.0.15.7:1337/pages/${id}`).then(        
        response => {
            dispatch(contentLoadState(false))
            dispatch(setContent(response.data))
            isLoading = false          
            return response.data
        }).catch(err =>console.log(err))
    }
    
    if (article.id === id){
        isLoading = false
        const content = article.ArticleContent
        console.log(article)
        return(
        <div id="page-content">                           
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h4">{article.title}</Typography>
                        {article.author ? (<Typography variant="subtitle2" component="p" className="author">Author: {article.author}</Typography>) : null}
                    <MarkDown>{content}</MarkDown>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <ContentSidebar sidebarItems={article.Sidebar} />                       
                    </Grid>                
            </Grid>    
        </div>
        ) 
    }
    else if (article.id === id){
        return (<p>Loading Article...</p>)    
    }
    else{
        return (<p>Article not found...</p>)    
    }
    
}

export default PageContent