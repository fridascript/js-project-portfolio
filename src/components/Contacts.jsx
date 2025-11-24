import React from "react";
import styled from "styled-components";
import contactImg from "../img/contactimg.png"


const ContactsWrapper = styled.div`
  display: flex;
  background: black;
  color: white;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 64px 16px;
`;

const ContactLink = styled.a`
  color: white;         
  text-decoration: none; 
  `;


export const Contacts = () => {
  return (
    <ContactsWrapper>
      <h1> Let's Talk</h1>
      <img src={contactImg} alt="contact-image" style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover"
      }} />
      <h2>Frida Engman</h2>

      <p> <ContactLink href="tel:+46 72 290 89 75">+46 (0) 72 290 89 75</ContactLink> </p>

      <p><ContactLink href="mailto:frida.r.engman@gmail.com">frida.r.engman@gmail.com</ContactLink> </p>
    </ContactsWrapper>

  )
}

