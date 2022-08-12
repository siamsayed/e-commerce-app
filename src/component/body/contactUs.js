import React, { Component } from 'react'
import {Form,LocalForm,Control, Errors,actions} from "react-redux-form"
import { FormGroup, Button , Input,Label} from "reactstrap"
import {connect} from "react-redux"


class ContactUs extends Component {
    
    pushValues=(e)=>{
        console.log(e)
        
        
    }
    render() {
        console.log(actions)

        document.title="MangaBD | ContactUs"
        const req =val=>val && val.length;
        const phone=val=>!isNaN(Number(val));
        const email=val=>/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(val)===true;
        const checkbox=val=>val===true;
        

        return (
            
                


                <Form model="formData" onSubmit={(e)=>this.pushValues(e)}>
                    <FormGroup>
                        <Label htmlFor='fullname'>Enter Name</Label>
                        <Control.text
                        model=".fullname"
                        id='fullname'
                        placeholder='Enter Name'
                        className='form-control'
                        validators={{
                            req
                        }}
                        
                        />
                        <Errors
                        model=".fullname"
                        show="touched"
                        messages={{
                            req:"Enter your name frist"
                        }}
                        className="text-danger"

                        />
                    </FormGroup>

                    <FormGroup>
                        <Label
                        htmlFor='phone'
                        >Enter Phone</Label>
                        <Control.text
                        model=".phone"
                        placeholder="phone number"
                        id="phone"
                        className='form-control'
                        validators={{
                            req,
                            phone
                        }}
                        
                        />
                        <Errors
                        model=".phone"
                        show="touched"

                        messages={{
                            phone:"Enter your phone number first"
                        }}
                        className="text-danger"

                        
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='email'>Enter E-mail</Label>
                        <Control.text
                        model=".email"
                        id="email"
                        className='form-control'
                        placeholder='Enter email'
                        validators={{
                            req,
                            email
                        }}
                        />
                        <Errors
                        model=".email"
                        show="touched"

                        messages={{
                            email:"Enter valid email"
                        }}
                        className='text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Control.checkbox
                        model=".checkbox"
                        validators={{
                            checkbox
                        }}

                        />
                        <Errors
                        model=".checkbox"
                        show="touched"

                        messages={{
                            checkbox:"Agree to our terms and conditions"
                        }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit' color='primary'>submit</Button>
                    </FormGroup>
                </Form>
            
        )
    }
}
export default connect(null,null)(ContactUs)
