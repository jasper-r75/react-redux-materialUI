const footerSetter = (state=[], action) =>{    
    switch (action.type){
        case 'FOOTER_LOAD_STATE':            
            return action.payload
        default:
            return state
    }    
}
export default footerSetter