import { GET_POSTS_FAIL,GET_POSTS_REQUEST,GET_POSTS_SUCCESS } from "./types";
interface stateType{
    posts:Array<any>,
    loading:boolean
}
export const initialState:stateType={
    posts:[],
    loading:false
}

export const postsReducer=(state:stateType=initialState,action:any)=>{
    switch(action.type){
        case GET_POSTS_REQUEST:
            return {...state,loading:true}
            break;
            case GET_POSTS_SUCCESS:
            return {...state,posts:action.payload.posts}
            break;
               case GET_POSTS_FAIL:
                     return {...state,posts:action.payload.er}
                  break;
                  default:
        return state;
        break;
    }
    
}