import React, { Component, useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import {useNavigate} from "react-router-dom"
let {useState}=React


const func=(state)=>{
    return {
        a:state.data,
        comments:state.comments,
        
    
    }
}
class  Home extends Component{
    
    
    render(){
        console.log(this.props.a)
        document.title="MangaBD | Home"
        
        return(
            <div className="movies">
                
            </div>
        )
    }
    
}

export default connect(func)(Home)