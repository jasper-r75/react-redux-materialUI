const setMainLoadState = (state=false, action) =>{    
    switch (action.type){
        case 'MAIN_LOAD_STATE':            
            return action.payload
        default:
            return state
    }    
}
export default setMainLoadState