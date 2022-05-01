import React from "react"
import {useNavigate} from "react-router-dom"
let {useState}=React

let Home=()=>{
    document.title="MangaBD | Home"
    let navigate=useNavigate()
    const [counter,use]=useState(0)
    const increment=()=>{
        use(counter+1)
        if(counter==5){
           
        }
    }
    
    return(
        <div className="content">
               <div><h1>Home</h1></div>
               <p>this is home component</p>  
               <div className="btns">

               <button className="btn btn-success" onClick={()=> navigate("/products")}>{"Products->"}</button>

               <button className="btn btn-primary" onClick={()=> navigate("/more")}>More</button>
               </div>
                <div className="increment">
                    <div className="text">{counter}</div>
                    <div className="btn btn-secondary" onClick={increment}>click to inciment</div>
                </div>
        </div>
    )
}
export default Home 