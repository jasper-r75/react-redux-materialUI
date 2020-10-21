const contentSetter = (state={}, action) =>{    
    switch (action.type){
        case 'SET_CONTENT':            
            return action.payload
        default:
            return state
    }    
}
export default contentSetter