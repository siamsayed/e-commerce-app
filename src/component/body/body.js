import React, { Component } from "react"
import data from "../../database/data"
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
import Comments from "../../database/comments"

class Body extends Component {
    
    state = {
        data: data,
        comments:Comments,
        clicked: null,
        productItemHover:false
    }
    
    clickedfunc=(e,i)=>{
        let item =this.state.data[i]
        this.setState({ clicked : item})
        

    }
    
    
    
    render() {
            
        

        return(
            <>
            <Header/>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<More/>}/>
                
                <Route path="/products" element={
                    
                <>
                
                <div className="product">
                {this.state.data.map((a,i)=>{
                    return(
                        
                        <div  key={a.id} >
                        <Products comments={this.state.comments} a={a}func={(e)=>this.clickedfunc(e,i)} data={this.state.data}/>
                        
                        </div>
                        
                    )
                })}
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
            <Footer/>

            </>
        )
    }
}

export default Body 