import React, { Component } from 'react';
import {Form, Input,Button} from "reactstrap"
class CommentForm extends Component {

    state={
        author:"",
        comment:"",
        rating:"",
    }

    render() {
        console.log(this.state)

        return (
            <Form className='mainFrom'>
                <label htmlFor="author">Enter name</label>
                <Input
                type='text'
                name='author'
                id='author'
                placeholder='Enter name'
                value={this.state.author}
                required

                />
                <label htmlFor="rate">rate</label>
                <Input
                id="rate"
                value={this.state.rating}
                type='select'
                required
                
                >
                    <option value="rate">ratings</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>

                </Input>
                <label htmlFor="comment">*comment</label>
                <Input 
                type='textarea'
                id="comment"
                placeholder='Enter your comment'
                value={this.state.comment}
                required
                />
                <Input type='submit' />

            </Form>
        );
    }
}

export default CommentForm;