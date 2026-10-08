import React, { useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { profile } from "../../data/profile";
import "./contact.css";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_1fmb1xh",
        "template_vow0wkr",
        form.current,
        "hFHEG3PD05rBxvGeK"
      );
      form.current.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section-signal">
      <div className="site-shell contact__grid">
        <div className="contact__statement">
          <p className="eyebrow">05 / Start a conversation</p>
          <h2>
            Building something
            <br />
            that has to work?
          </h2>
          <p>
            I&apos;m open to senior software and applied AI opportunities where architecture,
            product judgment, and production quality all matter.
          </p>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email} <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="contact-form__row">
            <label>
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            <span>What are you building?</span>
            <textarea name="message" rows="5" required />
          </label>
          <div className="contact-form__footer">
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
              <FiArrowUpRight aria-hidden="true" />
            </button>
            <p className="contact-form__status" aria-live="polite">
              {status === "sent" && "Message sent. I’ll get back to you soon."}
              {status === "error" && "Something went wrong. Please use the email link instead."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
