import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import './Login.css';
function Login(){
    let [login,setlogin]=useState("");
    return(
        <>
        {login?(
        <nav>
            <Navbar/>
            <button onClick={()=>setlogin(false)}>logout</button>
        </nav>):(<><nav>
            <button onClick={()=>setlogin(true)}>login</button>
        </nav>
        </>)}
        <div class="login">
        <right>
            <h1>Login Details</h1>
        Username:<input type="text" id="username"></input><br></br>
        Password:<input type="password" id="password"></input><br></br>
        </right>
        </div>
        </>
    );
};
export default Login;