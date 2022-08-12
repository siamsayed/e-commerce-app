import React, { Component } from "react"
import {useParams,Link} from "react-router-dom"
import {Modal,Button,ModalBody,ModalFooter} from "reactstrap"
import CommentForm from "./commentForm"
import {connect} from "react-redux"
import CommentHandler from "./commentHandler"
import {baseUrl} from "../../redux/baseUrl"
let propsFormRedux=(state)=>{
  return{
      comments:state.comments
  }
}




class Products extends Component{
    state={
        itemIsOpen:false,
        arr:this.props.comments.filter(comment=>comment.productId === this.props.a.id ?  comment : null),
        updatedState:this.props.comments
    }
    toggle=()=>{
        this.setState({
            itemIsOpen:!this.state.itemIsOpen
        })
    }
    
    render(){
    document.title="MangaBD | Products"
    
    
    
    
    

        
    
    return(
        <>
        
        
                <div className="product_content" onClick={this.toggle}>
                    
                    <h1 className="productName">{this.props.a.product_name}</h1>
                    <h4 className="productPrice">{this.props.a.price}</h4>
                    <a  onClick={this.props.func} className="buy_btn" href={"/products/"+this.props.a.product_name}>Buy</a>
                    
                    <Modal isOpen={this.state.itemIsOpen}>
                        
                        <ModalBody>
                            <h1>{this.props.a.product_name}</h1>
                            <p>{this.props.a.description}</p>
                            <img className="image"src={baseUrl+"/"+this.props.a.image}alt={this.props.a.image}/>

                            <p>Price : {this.props.a.price} USD</p>
                            <CommentForm productId={this.props.a}/>
                            <div className="comments" >
                            <div className="commentsLength"  >comments ({this.state.arr!=null?this.state.arr.length:null})</div>
                                {
                                
                                this.props.comments.map((a,i)=>{
                                    return(
                                        <CommentHandler commentDetail={this.props}arr={this.state.arr}a={a}items={this.props.a}key={i}/>
                                        
                                    )
                                })
                                }
                            </div>
                            
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggle}>
                                Exit
                            </Button>
                        </ModalFooter>
                    </Modal> 
                </div>
                
                
            
        
        

        
        </>
    )
                            }
}
export default connect(propsFormRedux)(Products) 
