import * as actionTypes from "./actionTypes"
import  data from "../database/data"


export const addComments=(productId,author,comment,rating)=>({
    
    type:actionTypes.commentHandler,
    payload:{
        productId:productId,
        author:author,
        comment:comment,
        rating:rating

    }
    

})






// export const pageLoading=()=>({
//     type:actionTypes.pageLoading,
    
// })
// export const pageLoaded=(data)=>({
//     type:actionTypes.pageLoaded,
//     payload:data
// })


// export const loader=()=>{
//     return dispatch=>{
//         dispatch(pageLoading())

//         setTimeout(()=>{
//             dispatch(pageLoaded(data))
//         },2000)
//     }
// }



export const pageloading=()=>({
    type:actionTypes.pageLoading
})


export const pageLoaded=(data)=>({
    type:actionTypes.pageLoaded,
    payload:data,
})




export const loader=()=>{
    return dispatch=>{
        dispatch(pageloading())


        setTimeout(() => {
            dispatch(pageLoaded(data))
        }, 2000);
    }
}