const setMobileOpen = (state=false, action) =>{    
    switch (action.type){
        case 'MOBILE_OPEN_STATE':            
            return action.payload
        default:
            return state
    }    
}
export default setMobileOpen