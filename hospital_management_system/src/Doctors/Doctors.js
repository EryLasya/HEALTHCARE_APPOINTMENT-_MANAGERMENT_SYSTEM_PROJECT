import Navbar from "../Navbar/Navbar";
import "./Doctors.css";
export default function Doctors() {
  return (
    <>
      <Navbar />
      <div className="doctors">
        <h2>Our Doctors</h2>
        <div className="doctor">
          <h3>Dr.O.Harshitha</h3>
          <p>Specialization: Cardiologist</p>
          <p>Experience: 15 Years</p>
          <p>Qualification: MBBS, MD</p>
        </div>
        <div className="doctor">
          <h3>Dr.A.Manvitha</h3>
          <p>Specialization: Neurologist</p>
          <p>Experience: 10 Years</p>
          <p>Qualification: MBBS, DM</p>
        </div>
        <div className="doctor">
          <h3>Dr.E.Lasya</h3>
          <p>Specialization: Orthopedic Surgeon</p>
          <p>Experience: 12 Years</p>
          <p>Qualification: MBBS, MS</p>
        </div>
        <div className="doctor">
          <h3>Dr.E.Raj Kumar</h3>
          <p>Specialization: Pediatrician</p>
          <p>Experience: 8 Years</p>
          <p>Qualification: MBBS, MD</p>
        </div>
      </div>
    </>
  );
}