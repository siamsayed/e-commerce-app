import data from "../database/data"
import comments from "../database/comments"


let initialState={
        data:data,
        comments:comments,
        name:"siam"
}

let reducer=(state=initialState,action)=>{
 if(action.type==="STR"){
        return{
                ...state,
                name:action.name
                
       
        }
 }
 else{
         return state
 }
} 


export default reducer