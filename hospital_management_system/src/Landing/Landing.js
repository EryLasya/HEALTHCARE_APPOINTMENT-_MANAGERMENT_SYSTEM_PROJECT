import { Link } from "react-router-dom";
import "./Landing.css";
import Navbar from "../Navbar/Navbar";
export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="text">
          <h1>LifeLine Hospitals</h1>
          <h3>Your Health, Our Priority</h3>
          <p>
            LifeLine Hospitals is a trusted healthcare destination committed to delivering high-quality medical services with compassion and care.We combine advanced medical technology with experienced doctors to ensure every patient receives the best possible treatment.
          </p>
          <div className="buttons">
            <Link to="/Login">
              <button className="login">Login</button>
            </Link>
            <Link to="/Register">
              <button className="register">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}