const sidebarMenuSetter = (state={}, action) =>{    
    switch (action.type){
        case 'SET_SIDEBAR_MENU':            
            return action.payload
        default:
            return state
    }    
}
export default sidebarMenuSetter