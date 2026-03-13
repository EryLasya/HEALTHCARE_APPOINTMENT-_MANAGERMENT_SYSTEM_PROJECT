import Navbar from "../Navbar/Navbar";
import "./About.css";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="content">
          <h2>Who We Are</h2>
          <p>
            LifeLine Hospital Management System is a web-based application
            designed to manage hospital activities efficiently. It helps in
            maintaining patient details, doctor information, appointments,
            billing records, and reports in a systematic way.
          </p>
          <p>
            This system reduces manual paperwork and improves the overall
            performance of hospital management by using digital technology.
          </p>
          <h2>Our Services</h2>
          <ul>
            <li>Patient Registration and Record Management</li>
            <li>Doctor Information Management</li>
            <li>Online Appointment Booking</li>
            <li>Billing and Payment Management</li>
            <li>Report Generation</li>
          </ul>
          <h2>Key Features</h2>
          <ul>
            <li>Easy to Use Interface</li>
            <li>Time Saving and Efficient</li>
            <li>Secure Data Storage</li>
            <li>Organized Hospital Workflow</li>
            <li>Quick Access to Information</li>
          </ul>
          <h2>Our Mission</h2>
          <p>
            Our mission is to improve healthcare management by providing a
            reliable and user-friendly hospital management system that ensures
            better service for patients and smooth operation for hospital staff.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is to create a fully digital hospital environment
            that enhances patient care and hospital efficiency.
          </p>
        </div>
      </div>
    </>
  );
}