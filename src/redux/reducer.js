import comments from "../database/comments"
import { combineReducers } from "redux"
import * as actionTypes from "./actionTypes"
import { formData } from "./formData"
import {createForms} from "react-redux-form"







export const productRreducer=(state={loading:false,data:[]},action)=>{
        switch(action.type){
                case actionTypes.pageLoading:
                return{
                        ...state,
                        loading:true,
                        data:[]
                }
                case actionTypes.pageLoaded:
                return{
                        ...state,
                        loading:false,
                        data:action.payload
                }
                default:
                return state
        }
        
}

export const commentReducer=(state=comments,action)=>{
        switch(action.type){
                case actionTypes.commentHandler:
                let newComment=action.payload;
                newComment.id=state.length +1;
                return state.concat(newComment)
                default:
                return state
        }
}
        


export const reducer=combineReducers({
       
        data:productRreducer,
        comments:commentReducer,
        ...createForms({
                formData:formData
                
        })

        
})


