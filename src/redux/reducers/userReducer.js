let initialState = { user : {} , isLoggedIn : false }


export let userReducer = ( state = initialState , action)=>{
    
    switch(action.type)
    {

        case 'LOGIN_REQUEST':

        return {
            ...state,
            loading : true 
        }


        case 'LOGIN_SUCCESS':
            return{
            ...state,
            user : action.payload,
            isLoggedIn : true
            }

        case 'SAVE_LOCATION':
            return{
                ...state ,
                location : action.payload
            }

        case 'LOGOUT':
            return{
                user : {} ,
                isLoggedIn : false
            }

        default:
            return state
    }

}