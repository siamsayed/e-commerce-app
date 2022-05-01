import React, { Component,createRef} from 'react'

class Form extends Component  {
    constructor(props){
        super(props)
        this.name=createRef()
        this.pass=createRef()
        this.male=createRef()
        this.female=createRef()
        
    }
    submit=(e)=>{
        console.log(this.name.current.value)
        console.log(this.pass.current.value)
        
        
        e.preventDefault()
        
    }
    
    render(){
        document.title="MangaBD | SignIn/Login"
        return (
            <div className="content">
            <form onSubmit={this.submit}>
            <input type="text" className="name" ref={this.name}/>
            <input type="password" className="password"ref={this.pass} />

            <div className="gender">
            <label htmlFor="gender_male">Male</label>
            <input type="checkbox" name="" id="gender_male" ref={this.male}/>
            <label htmlFor="gender_female">Female</label>
            <input type="checkbox" name="" id="gender_female" ref={this.female}/>
            </div>
            <input type="submit" value="submit" />
            
            </form>
            </div>
            
          )
    }
}
export default Form
