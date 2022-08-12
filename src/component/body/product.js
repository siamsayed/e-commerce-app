import React ,{useState}from 'react'
import {useParams} from "react-router-dom"
import { buySuccess } from '../../redux/actionTypes'
import Error from "./error"


let setStateToProps=(state)=>{
 return{
    data:state.data
 }
}

let  Product=(props)=> {
    document.title="MangaBD | product"
    let {id}=useParams()
    let find=this.props.data.map(a=>a.product_name.includes(id))
    let findData=find.find(n=>n)
    let findIndex=find.findIndex(n=> n)
    let [indicatorValBuy,indicatorFuncBuy]=useState(false)
    let [indicatorValCart,indicatorFuncCart]=useState(false)
    
    setTimeout(() => {
        indicatorFuncBuy(false)
    }, 4000);
    
    return(
        <div className='content'>
        {findData  ? 
        <>
        {indicatorValCart===true && indicatorValBuy===true ? <div className="indicartor btn-success activityBtns">Already purchased</div> :null}
        {indicatorValCart===true && indicatorValBuy==!true ? <div className="indicartor btn-success activityBtns">added to cart</div>:null}
        {indicatorValBuy===true? <div className="indicartor btn-success activityBtns">successfully purchased</div>: null}
        <h1 className="title" style={{fontSize:"3rem"}}>{[this.props.data[findIndex].product_name].map(a=>a)}</h1>
        <p className="description">{this.props.data[findIndex].description}</p>
        <div className="product_btns">
        <div className="btn btn-primary buy_now " onClick={()=>indicatorFuncBuy(true)}>Buy now </div>
        <div className="btn btn-success add_cart " onClick={()=>indicatorFuncCart(true)}>Add cart</div>
        </div>
        </> : <Error/>
        }
        </div>
        
    )
}
export default Product
