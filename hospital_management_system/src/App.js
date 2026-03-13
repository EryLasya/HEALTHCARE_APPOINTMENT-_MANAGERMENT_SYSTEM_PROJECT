// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import Landing from "./Landing/Landing";
// function App(){
//   return(
//     <>
//     <Landing/>
//     </>
//   );
// }
// export default  App;
// import {BrowserRouter, Routes,Route, Link} from "react-router-dom";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Link from "./Link/Link";
import'./App.css';
function App(){
    return(
        <>
        <Link/>
        {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
        </BrowserRouter> */}
        
        </>
    )
}
export default App;

