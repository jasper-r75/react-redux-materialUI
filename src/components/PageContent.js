import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
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
        const authorStr = article.author ? `Author: ${article.author}` : null
        return(
        <div id="page-content">                         
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Card style={{marginBottom: '2rem'}}>
                            {
                            article.CoverImage ? (
                                <CardMedia style={{height: '320px'}} image={article.CoverImage.url} />
                                
                                ) : null }                           
                            <CardHeader title={article.title} subheader={authorStr}/>
                            <CardContent>
                                <MarkDown>{content}</MarkDown>
                            </CardContent>                      
                        </Card>                        
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