import data from "../database/data"
import comments from "../database/comments"


let initialState={
        data:data,
        comments:comments,
        
}

let reducer=(state=initialState,action)=>{
 if(action.type==="ADD_COMMENT"){
        console.log("payload",action.payload)
        let comment=action.payload;
        comment.id=state.comments.length+1
        return{

        ...state,
        comments:state.comments.concat(action.payload)
        }
 }
 
else{
        return state
}
} 


export default reducer