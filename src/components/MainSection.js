import React from 'react'
import { Switch, Route} from 'react-router-dom'
import PageContent from './PageContent'
import {useSelector, useDispatch} from 'react-redux'
import {setRoutes, mainLoadState} from '../actions'
import axios from 'axios'

let isLoading = false

const MainSection = (props) =>{ 
   const dispatch = useDispatch()
   const routesData = useSelector(state => state.routesData)
    if(isLoading === false && routesData.length === 0){
        dispatch(mainLoadState(true))
        isLoading = true;
        axios.get('http://10.0.15.7:1337/pages').then(
        response => {
            const data = response.data            
                isLoading = false            
                dispatch(setRoutes(data)) 
                dispatch(mainLoadState(false))
        }).catch(err => console.log('Failed loading routes'))
    }
    return routesData.length > 0 ?(         
            <Switch>                        
                {
                    routesData.map(article => (
                        <Route key={article.id} path="/page/:id" exact {...props} component={PageContent} />
                    )) 
                } 
                      
            </Switch> 
    ):
    (<p>Loading Main...</p>)           
}
export default MainSection