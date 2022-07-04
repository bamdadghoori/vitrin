import { GET_POSTS_FAIL,GET_POSTS_REQUEST,GET_POSTS_SUCCESS } from "./types";
interface stateType{
    posts:any[],
    loading:boolean,
    error:string
}
export const initialState:stateType={
    posts:[],
    loading:false,
    error:""
}

export const postsReducer=(state:stateType=initialState,action:any):stateType=>{
    switch(action.type){
        case GET_POSTS_REQUEST:
            return {...state,loading:true}
            break;
            case GET_POSTS_SUCCESS:
               console.log(action.payload)
            return {...state,posts:action.payload.posts,loading:false}
            break;
               case GET_POSTS_FAIL:
                     return {...state,error:action.payload.er}
                  break;
                  default:
        return state;
        break;
    }
    
}