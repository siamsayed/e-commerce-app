import React,{Component}from "react"
import {NavLink,Link} from "react-router-dom"
import {VscSignIn} from "react-icons/vsc"
import {MdExpandMore}from "react-icons/md"
import {BiConversation} from "react-icons/bi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {GoHome} from "react-icons/go"


import NavItems from "./navItems"
import {NavItem,Navbar,NavbarToggler,DropdownMenu,NavbarBrand,UncontrolledDropdown,NavbarText,DropdownToggle,Nav,Collapse,DropdownItem} from "reactstrap"
class Header extends Component{
  state={
    clickedNav:false
  }
  onclickChange=()=>{
    this.setState({clickedNav : ! this.state.clickedNav})
  }
  
   render(){

    return(
        
        <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    
    <NavbarBrand href="/">
      MangaBD
    </NavbarBrand>
    <NavbarToggler onClick={this.onclickChange} />
    <Collapse navbar isOpen={this.state.clickedNav}>
      <Link to="/"> <div className="item"onClick={this.onclickChange}><GoHome  className="icon"/>Home</div></Link>
      <Link to="/products"><div className="item"onClick={this.onclickChange}><AiOutlineShoppingCart  className="icon"/>Products</div></Link>
      <Link to="/blogs"><div className="item"onClick={this.onclickChange}><BiConversation className="icon"/> Blogs</div></Link>
      <Link to="/about"><div className="item"onClick={this.onclickChange}><MdExpandMore  className="icon"/> About</div></Link>
      <Link to="signin-login"><div className="item"onClick={this.onclickChange}><VscSignIn className="icon"/>SignIn/LogIn</div></Link>
      <Link to="/contact-us"><div className="item"onClick={this.onclickChange}><VscSignIn className="icon"/>Contact Us</div></Link>
    </Collapse>
    
  </Navbar>
</div>
        
    )
   }
}
export default Header