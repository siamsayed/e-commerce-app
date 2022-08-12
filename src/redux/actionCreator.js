import * as actionTypes from "./actionTypes"

import axios from "axios"



export const addComments=(productId,author,comment,rating)=>({
    
    type:actionTypes.commentHandler,
    payload:{
        productId:productId,
        author:author,
        comment:comment,
        rating:rating

    }
    

})


export const fetch=(data,comments)=>({
        type:actionTypes.fetchData,
        payload:{
            data:this.props.data,
            comments:this.props.comments
        },
        

})


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


        axios.get("http://localhost:4000/data")
        .then(res=>res.data)
        .then(data=>dispatch(pageLoaded(data)))
        .catch(err=>console.log(err.message))
    }
}

