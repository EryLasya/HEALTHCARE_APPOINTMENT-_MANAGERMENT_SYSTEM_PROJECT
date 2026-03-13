import Navbar from "../Navbar/Navbar";
import "./Home.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h2 className="title">Welcome to Hospital Management System</h2>
        <p className="introduction">
          The Hospital Management System helps hospitals manage daily
          activities easily and efficiently. It reduces paperwork
          and improves hospital operations.
        </p>
        <h3 className="services">Our Services</h3>
        <ul>
          <li>Patient Registration</li>
          <li>Doctor Management</li>
          <li>Appointment Booking</li>
          <li>Billing and Payments</li>
          <li>Medical Records Management</li>
          <li>Staff Management</li>
          <li>Laboratory Management</li>
          <li>Pharmacy Management</li>
        </ul>
        <h3 className="features">Main Features</h3>
        <ul>
          <li>Easy to Use Interface</li>
          <li>Secure Data Storage</li>
          <li>Fast Appointment Scheduling</li>
          <li>Accurate Billing System</li>
          <li>Quick Report Generation</li>
        </ul>
        <h3 className="benefits">Benefits</h3>
        <p>
          It saves time, reduces errors, improves communication between
          departments, and enhances overall patient care services.
        </p>
        <h3 className="mission">Our Mission</h3>
        <p>
          Our goal is to improve healthcare services by providing
          fast, secure, and reliable hospital management solutions
          for hospitals and healthcare centers.
        </p>
        <h3 className="vision">Our Vision</h3>
        <p>
          To create a smart hospital environment where technology
          supports better healthcare delivery and patient satisfaction.
        </p>
      </div>
    </>
  );
}