import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>ContacT Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email </h4>
            <h5>silvakeci05@gmail.com</h5>
            <a href="mailto:silvakeci05@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <PiMessengerLogoBold className="contact__option-icon" />
            <h4>Email </h4>
            <h5>silvakeci05@gmail.com</h5>
            <a href="mailto:silvakeci05@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp </h4>
            <h5>+1264837983</h5>
            <a
              href="https://api.whatsapp.com/send?phone=0692122415"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
