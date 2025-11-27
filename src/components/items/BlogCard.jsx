import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
import { theme } from "../../theme";
import { FrameWork } from "./frameworkbtn";
import { DemoIcon } from "../../img/icons";
import { ActionButton } from "../items/Buttons";
import ReactMarkdown from "react-markdown";

// for styling component items
const WrapperBlog = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  text-align: left;

  @media(min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
     padding: 3rem;

  }
`;
const BlogImage = styled.img`
  width: 100%;
  border-radius: 12px;
  @media(min-width: ${theme.breakpoints.tablet}){
    width: 80%;
  }


`;
const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 6px;

  svg {
    width: 20px; 
    height: 20px;
  }
`;

export const BlogPost = ({ blog }) => {
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (blog.description) {
      fetch(blog.description)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [blog.description]);

  // to open and close blog posts 
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <WrapperBlog>
      <BlogImage src={blog.image} alt={`picture of blog post ${name}`} />
      <BlogInfo>
        <FrameWork frameworks={blog.framework} />
        <SubTitle>{blog.name}</SubTitle>


        {isOpen && ( //get blog post from public/blogposts path
          <Text>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Text>
        )}

        <ActionButton onClick={toggleOpen}>
          <ButtonIcon><DemoIcon /></ButtonIcon> {isOpen ? "Hide Article" : "Read Article"}
        </ActionButton>
      </BlogInfo>
    </WrapperBlog>
  );
};


