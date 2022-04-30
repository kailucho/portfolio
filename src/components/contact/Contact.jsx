import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1fmb1xh",
        "template_vow0wkr",
        form.current,
        "hFHEG3PD05rBxvGeK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>luijhy9234@gmail.com</h5>
            <a
              href="mailto:luijhy9234@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Kaido</h5>
            <a href="https://m.me/kailucho" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </div>
          <div className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+051933053739</h5>
            <a
              href="https://api.whatsapp.com/send?phone+051933053739"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="You FUll Name" required />
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
}

export default Contact;
