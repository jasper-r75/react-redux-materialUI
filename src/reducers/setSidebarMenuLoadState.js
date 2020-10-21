const setSidebarMenuLoadState = (state=true, action) =>{    
    switch (action.type){
        case 'SIDEBAR_MENU_LOAD_STATE':            
            return action.payload
        default:
            return state
    }    
}
export default setSidebarMenuLoadState