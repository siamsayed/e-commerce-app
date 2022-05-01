import React from 'react'
import {useParams} from "react-router-dom"
import data from "../../database/data"
import Error from "./error"
let  Product=(props)=> {
    document.title="MangaBD | product"
    let {id}=useParams()
    let find=data.map(a=>a.product_name.includes(id))
    let findData=find.find(n=>n)
    let findIndex=find.findIndex(n=> n)
    console.log(findIndex)
    return(
        <div className='content'>
        {findData  ? 
        <>
        <h1 className="title" style={{fontSize:"3rem"}}>{[data[findIndex].product_name].map(a=>a)}</h1>
        <p className="description">{data[findIndex].description}</p>
        </> : <Error/>
        }
        </div>
        
    )
}
export default Product
