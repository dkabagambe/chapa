import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="number">
        <h3>Tirupati Mazima Mall Ggaba Road, Kampala Uganda</h3>
        <p>OFFICE LINE: 0414-771020 </p>
        <p>+ 256 704-645-051</p>
        <p>
          <a href="mailto: chapa.enterprisesltd@gmail.com">info@chapaug.com</a>
        </p>
      </div>
      <div className="hour">
        <h2>Open Hours</h2>
        <p>sunday: Closed</p>
        <p>Monday to Friday</p>
        <p>8:00 AM - 5:00 PM</p>
        <p>Saturday</p>
        <p>8:00 AM - 12:00 PM</p>
      </div>
      <div className="form-item">
        <form>
          <input name="name" placeholder="Full name" type="text" />

          <input name="email" placeholder="Email address" type="email" />

          <input name="subject" placeholder="Subject" type="text" />
          <textarea name="message" placeholder="write your message here" />
          <button
            name="submit"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
