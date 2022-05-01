import React from "react"
import {useParams,Link} from "react-router-dom"
import {Modal,Button,ModalBody,ModalFooter} from "reactstrap"
import { BsFillPersonFill } from "react-icons/bs";

let Products=(props)=>{
    document.title="MangaBD | Products"
    let {id}=useParams()
    // console.log(id)
    let {useState}=React
    let [item,func]=useState(false)
    let [arr,commentHandler]=useState(props.comments.filter(comment=>comment.productId === props.a.id ?  comment : null))
    let [commentShow,commentShowFunc]=useState(false)
    
    
    
    
    const toggle=()=>{
        return (
            func(!item) 
            
        )
    }
    
    


    

    return(
        <>
        
        
                <div className="product_content" onClick={toggle}>
                    
                    <h1 className="productName">{props.a.product_name}</h1>
                    <h4 className="productPrice">{props.a.price}</h4>
                    <a  onClick={props.func} className="buy_btn" href={"/products/"+props.a.product_name}>Buy</a>
                    
                    <Modal isOpen={item}>
                        <ModalBody>
                            <h1>{props.a.product_name}</h1>
                            <p>{props.a.description}</p>
                            

                            <p>Price : {props.a.price} USD</p>
                            <div className="comments" >
                            <div className="commentsLength"  >comments ({arr!=null?arr.length:null})</div>
                                {arr!=null ? arr.map(a=>{
                                    return(
                                        <div className="comment"key={a.id}>
                                        <div className="userInfo"><BsFillPersonFill className="userIcon"/>
                                        <div className="authorName" style={{fontWeight:"bold"}}>{a.author}({a.ratings})</div></div>
                                        <div className="commentContent">{a.comment}</div>
                                        
                                        </div>
                                    )
                                }): null}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={toggle}>
                                Exit
                            </Button>
                        </ModalFooter>
                    </Modal> 
                </div>
                
                
            
        
        

        
        </>
    )
}
export default Products 
