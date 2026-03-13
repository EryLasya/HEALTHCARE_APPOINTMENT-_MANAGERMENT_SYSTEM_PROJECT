// ADDING OF 2 NUMBERS
//  import react ,{ useState} from 'react'

//  export default function Login(){

//      function add(){
//          let a=document.getElementById("num1").value;
//          let b=document.getElementById("num2").value;
//          let sum=Number(a)+Number(b);
//          document.getElementById("result").innerText=sum;
//      }
//      return( 
//          <>
//              <h1>Hello Example for using jsx expressions</h1>
//              <input type="number" id="num1"/><br></br>
//              <input type="number" id="num2"/><br></br>
//              <button onClick={add}>Submit</button>
//              <h2 id="result">sum</h2>
//          </>
//     );
// };
import react,{useState} from "react";
import"./Login.css";
function Login(){
    let [login,setlogin]=useState("");
    return(
        <>
        {login ?(
        <nav>
            <a>Home</a>{"|"}
            <a>About</a>{"|"}
            <a>Contact</a>{"|"}
            <button onClick={()=>setlogin(false)}>logout</button>
        </nav>)
        :
        (<nav>
            <button onClick={()=>setlogin(true)}>login</button>
            </nav>)}
        </>
    );
}
export default Login;