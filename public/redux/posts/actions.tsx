import { GET_POSTS_FAIL,GET_POSTS_REQUEST,GET_POSTS_SUCCESS } from "./types";

export const GetPostsRequest=()=>{
return{
    type:GET_POSTS_REQUEST
}
}
export const GetPostsSuccess=(posts:Array<any>)=>{
    return{
        type:GET_POSTS_SUCCESS,
        payload:{posts:posts}
    }
}
export const GetPostsFail=(er:string)=>{
    return{
        type:GET_POSTS_FAIL,
        payload:{er:er}
    }
}