import React, { Component } from 'react';
import {Form, Input,Button} from "reactstrap"
import {connect} from "react-redux"
import data from "../../database/data"





let setDispatch=dispatch=>{
    return{
        addComments:(productId,author,comment,rating)=>dispatch({
            type:"ADD_COMMENT",
            payload:{
                productId:productId,
                author:author,
                comment:comment,
                rating:rating

            }

        })
    }
}
class CommentForm extends Component {

    state={
        author:"",
        comment:"",
        rating:"",
    }

    submitFunc=(event)=>{
        event.preventDefault()

        this.props.addComments(this.props.productId.id,this.state.author[0],this.state.comment[0],this.state.rating[0])
        
        
        

    }
    inputValueFunc=(event)=>{
        this.setState({
            [event.target.name]:[event.target.value]
        })
    }
    render() {
       
        return (
            <Form className='mainFrom' onSubmit={(event)=>this.submitFunc(event)}>
                <label >Enter name</label>
                <Input
                type='text'
                name='author'
                onChange={(event)=>this.inputValueFunc(event)}
                id='author'
                placeholder='Enter name'
                value={this.state.author}
                required

                />
                <label >rate</label>
                <Input
                id="rate"
                name="rating"
                value={this.state.rating}
                type='select'
                onChange={(event)=>this.inputValueFunc(event)}
                required
                
                >
                    <option value="rate">ratings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </Input>
                <label>*comment</label>
                <Input 
                type='textarea'
                id="comment"
                name='comment'
                onChange={(event)=>this.inputValueFunc(event)}

                placeholder='Enter your comment'
                value={this.state.comment}
                required
                />
                <Input type='submit' />

            </Form>
        );
    }
}

export default connect(null,setDispatch)(CommentForm);