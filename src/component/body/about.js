import React from "react"
import {useNavigate} from "react-router-dom"


let More=()=>{
    document.title="MangaBD | About"
    let navigate=useNavigate()

    return(
        <>
        <div className="content">
            <h1>About page</h1>
            <p>this page created by About.js</p>
            <div className="btns">
                
            <button onClick={()=>navigate("/")} className="btn btn-warning">go to home</button>
            <button className="btn btn-secondary" onClick={()=>navigate("/products")}>go to products</button>
            </div>
        </div>
        </>
    )
}


export default More