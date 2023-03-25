import{TUTORIAL_REQUEST,TUTORIAL_SUCCESS,TUTORIAL_FAIL,UPDATE_REQUEST,UPDATE_SUCCESS,UPDATE_FAIL,LIST_REQUEST,LIST_SUCCESS,LIST_FAIL,DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAIL} from './constans'
export const dataReducer=(state={products:[]},action)=>{
    switch (action.type) {
        case TUTORIAL_REQUEST:
            case UPDATE_REQUEST:
                case DELETE_REQUEST :
                
            return{
                ...state,
                loading:true,
            }
            case TUTORIAL_SUCCESS:
                case UPDATE_SUCCESS:
                    case DELETE_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    products:action.payload,
                    success:true
                }
                case TUTORIAL_FAIL:
                    case UPDATE_FAIL:
                        case DELETE_FAIL:
            return{
                ...state,
                loading:false,
               error:action.payload,
               success:false
            }
    
        default:
            return{
                ...state
            }
    }
}
export const listReducer=(state={products:[]},action)=>{
    switch (action.type) {
        case LIST_REQUEST:
            return{
                ...state,
                loading:true,
            }
            case LIST_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    products:action.payload
                }
                case LIST_FAIL:
            return{
                ...state,
                loading:false,
               error:action.payload
            }
    
        default:
            return{
                ...state
            }
    }
}