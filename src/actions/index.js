export const setRoutes = (routes) =>{
   return {
        type: 'SET_ROUTES',
        payload: routes
   } 
}  
export const setContent = (content) =>{
   return {
        type: 'SET_CONTENT',
        payload: content
   } 
}  
export const setSidebarMenu = (content) =>{
   return {
        type: 'SET_SIDEBAR_MENU',
        payload: content
   } 
}  
export const mainLoadState = (loadingState) =>{
   return {
        type: 'MAIN_LOAD_STATE',
        payload: loadingState
   } 
} 
export const contentLoadState = (contentState) =>{
   return {
        type: 'CONTENT_LOAD_STATE',
        payload: contentState
   } 
}
export const sidebarMenuLoadState = (sidebarState) =>{
   return {
        type: 'SIDEBAR_MENU_LOAD_STATE',
        payload: sidebarState
   } 
}  
