import React from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
import contactImg from "../../img/contactimg.png";

// for styling component 
const Section = styled.section`
  background: ${({ theme }) => theme.surface.dark.background};
  color: ${({ theme }) => theme.surface.dark.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
`;
const ContactLink = styled.a`
  color: ${({ theme }) => theme.surface.dark.text};
  text-decoration: none;
  margin: 4px 0;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 16px 0;
`;

export const Contacts = () => {
  return (
    <Section>
      <SectionTitle dark>Let's Talk</SectionTitle>
      <Image src={contactImg} alt="Portrait of Frida Engman" />
      <SubTitle dark>Frida Engman</SubTitle>
      <Text dark>
        <ContactLink href="tel:+46 72 290 89 75">+46 (0) 72 290 89 75</ContactLink>
      </Text>
      <Text dark>
        <ContactLink href="mailto:frida.r.engman@gmail.com">
          frida.r.engman@gmail.com
        </ContactLink>
      </Text>
    </Section>
  );
};


