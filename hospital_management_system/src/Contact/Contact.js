import Navbar from "../Navbar/Navbar";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need medical assistance, 
          please feel free to contact us.
        </p>
        <h2>Hospital Address</h2>
        <p>
          LifeLine Hospitals <br />
          Main Road, City Center <br />
          Andhra Pradesh, India
        </p>
        <h2>Phone</h2>
        <p>+91 9876543210</p>
        <h2>Email</h2>
        <p>lifelinehospital@gmail.com</p>
        <h2>Working Hours</h2>
        <p>
          Monday - Saturday : 9:00 AM to 8:00 PM <br />
          Sunday : Emergency Services Only
        </p>
        <h2>Send Us a Message</h2>
        <form className="form">
          <label>Name:</label><br />
          <input type="text" /><br /><br />
          <label>Email:</label><br />
          <input type="email" /><br /><br />
          <label>Message:</label><br />
          <textarea rows="4"></textarea><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}