import React , {useState} from "react";
import contactLeft from "../assets/contact.jpg";
import "../styles/Contact.css";
import BannerImage from "../assets/Image.png";
import toast, { Toaster } from 'react-hot-toast';



function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [Message, setMessage] = useState("");


  const inputHandlername = (event) => {
    setName(event.target.value);
};

const inputHandleremail = (event) => {
  setEmail(event.target.value);
};

const inputHandlermessgae = (event) => {
  setMessage(event.target.value);
};

const buttonHandler = (event) => {
    event.preventDefault();
    setName('')
    setEmail('')

    setMessage('')

};

const notify = () => toast.success('Form Submitted Successfully');
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1 className="headertext">  Welcome to Hawaii</h1>
    </div>
    <div className="contact">
    
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form   onSubmit={buttonHandler}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={name}  onChange={inputHandlername} />
          <label htmlFor="email">Email</label>
          <input value={email}  onChange={inputHandleremail} name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
          value={Message}  onChange={inputHandlermessgae}
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <div>
          <button onClick={notify}>Submit</button>
          <Toaster />
        </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
