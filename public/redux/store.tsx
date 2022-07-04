import { Store,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from "./posts/reducers";
export let store = createStore(postsReducer,applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch