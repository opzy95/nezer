import React from 'react';
import { FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi';
import './Contact.css';

const phoneNumber = '+234 807 151 2437';
const whatsappUrl = 'https://wa.me/2348071512437';
const emailAddress = 'info@araire-ventures.com';

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="contact-kicker">Here when you need us</p>
          <h2 id="contact-title">Let’s talk about what your home needs.</h2>
          <p>Questions about a product or an order? Get in touch with Nezer Rot HomePro.</p>
          <a className="contact-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <FiMessageCircle aria-hidden="true" /> Chat on WhatsApp
          </a>
        </div>

        <div className="contact-details" aria-label="Contact details">
          <a href="tel:+2348071512437" className="contact-detail">
            <span className="contact-detail-icon"><FiPhone aria-hidden="true" /></span>
            <span>
              <small>Call us</small>
              <strong>{phoneNumber}</strong>
            </span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-detail">
            <span className="contact-detail-icon"><FiMessageCircle aria-hidden="true" /></span>
            <span>
              <small>WhatsApp</small>
              <strong>{phoneNumber}</strong>
            </span>
          </a>
          <a href={`mailto:${emailAddress}`} className="contact-detail">
            <span className="contact-detail-icon"><FiMail aria-hidden="true" /></span>
            <span>
              <small>Email us</small>
              <strong>{emailAddress}</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;