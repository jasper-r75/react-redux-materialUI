const setContentLoadState = (state=true, action) =>{    
    switch (action.type){
        case 'CONTENT_LOAD_STATE':            
            return action.payload
        default:
            return state
    }    
}
export default setContentLoadState