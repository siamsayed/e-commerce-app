import React, { Component } from 'react'

class ContactUs extends Component {
    constructor(props){
        super(props)
        this.state={
            fullname:"",
            phone: "",
            email: "",
            agree:false,

        }


    }
    pushValues=(e)=>{
        let val= e.target.type==="checkbox" ? e.target.checked : e.target.value
        let name=e.target.name

        console.log(name)
        this.setState({
            [name]:val
        })
        
    }
    submit=(e)=>{
        e.preventDefault()
        
        console.log(this.state)

    }
    render() {
        document.title="MangaBD | ContactUs"
        return (
            <div className="content">
                <h1 className="hedline-contact">Contact us </h1>
                <form action="#" onSubmit={this.submit}>
                <div className="nameInput">
                    <label htmlFor="name">Fullname</label>
                    <input onChange={this.pushValues}type="text" name="fullname"id="name" />
                </div>
                <div className="numberInput">
                    <label htmlFor="phone">Phone</label>
                    <input onChange={this.pushValues}type="number" name="phone" id="phone" />
                </div>
                <div className="emailInput">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.pushValues}type="text" name="email" id="email" />
                </div>
                <div className="agreeItems">
                    <input onChange={this.pushValues}type="checkbox" name="agree" id="agree" />
                    <label htmlFor="agree">Agree to all of our term and conditions <a href="#">Read terms and conditions</a></label>

                </div>
                <div className="submitInput">
                    <input onChange={this.pushValues}type="submit" value="submit" />
                </div>
                </form>
            </div>
        )
    }
}
export default ContactUs
