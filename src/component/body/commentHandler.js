import React, { Component } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import {connect} from "react-redux"
import { fetchData } from '../../redux/actionTypes';
import { commentReducer } from '../../redux/reducer';
import axios from "axios"
let propsFormRedux=(dispatch)=>{
    
}


class CommentHandler extends Component {
    
    
    render(){
        
        

    return (
        <div>
            
            {this.props.items.id==this.props.a.productId ? 
           
            <div className="comment">
            <div className="comment-content" >
            <div className="userInfo"><BsFillPersonFill className="userIcon"/>
            <div className="authorName" style={{fontWeight:"bold"}}>{this.props.a.author}({this.props.a.rating})</div></div>
            <div className="commentContent">{this.props.a.comment}</div>
            <div className="productId">{this.props.a.productId}</div>
            </div>
            <div className="delete" onClick={(e)=>this.deleteComment(e)}>
            delete
            </div>
            </div>
            
            : null
        }
        

        </div>
    );
    }
};

export default connect(propsFormRedux)(CommentHandler);