import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <nav>
            <div class="Navbar">
           <center> <h1>LifeLine Hospitals</h1></center>
            <a href="Home">Home</a>{"    "}
            <a href="About">About</a>{"   "}
            <a href="Contact">Contact</a>{"   "}
            <a href="Doctors">Doctors</a>{"  "}
            <a href="Login">Login</a>{"   "}
            <a href="Logout">Logout</a>{"   "}
            </div>   
        </nav>
        </>
    )
}