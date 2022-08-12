import React, { Component } from "react"
import {Route,Routes,Navigate} from "react-router-dom"
import Home from "./home"
import Blogs from "./blogs"
import More from "./about"
import Products from "./products"
import Error from "./error"
import {Footer} from "../footer/footer";
import Header from "../header/nav"
import Product from "./product"
import Form from "./form"
import ContactUs from "./contactUs"
import Loader from "./loader"
import { connect } from "react-redux"
import { loader } from "../../redux/actionCreator"
import comments from "../../database/comments"
const propsFormRedux=(state)=>{
        return{
            data:state.data
        }
}


const setDispatch=(dispatch)=>({
    loader:()=>dispatch(loader()),
    
})
class Body extends Component {
    
    state = {
       
        comments:comments,
        clicked: null,
        productItemHover:false
    }
    
    clickedfunc=(e,i)=>{
        let item =this.props.data[i]
        this.setState({ clicked : item})

        

    }
    componentDidMount(){
        this.props.loader()
    }
    
    
    
    render() {

        
        console.log(this.props.data.data[0])
        return(
            <>
            <Header/>
            <div className="Body">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<More/>}/>
                
                <Route path="/products" element={
                    
                <>
                
                <div className="product">
                {this.props.data.loading==true? <Loader/>:this.props.data.data.map((a,i)=>{
                    
                        return a.map((a,i)=>{
                            return(
                        
                                <div  key={a.id} >
                                <Products a={a} func={(e)=>this.clickedfunc(e,i)} data={this.state.data}/>
                                
                                </div>
                                
                            )
                        })
                        
                    
                    
                })
                
                
                
                }
                
                </div>
                </>
            
                }/>
                <Route path="/products/:id" element={
                <Product clicked={this.state.clicked}/>
                }/>
                
                
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/signin-login" element={<Form/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="*"element={<Navigate to="/"/>}/>
                
            </Routes>
            </div>
            <Footer/>

            </>
        )
    }
}

export default connect(propsFormRedux,setDispatch)(Body) 