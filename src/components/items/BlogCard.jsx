import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { FrameWork } from "./frameworkbtn";
import { DemoIcon } from "../../img/icons";
import { ActionButton } from "../items/Buttons";

import ReactMarkdown from "react-markdown";

// for styling component items
const WrapperBlog = styled.div`
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
const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  @media(min-width: ${theme.breakpoints.tablet}){
    width: 80%;
  }


`;
const Post = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2``;
const Text = styled.p``;

const Icon = styled.div`
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
      <Image src={blog.image} alt={blog.name} />
      <Post>
        <FrameWork frameworks={blog.framework} />
        <Title>{blog.name}</Title>


        {isOpen && ( //get blog post from public/blogposts path
          <Text>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Text>
        )}

        <ActionButton onClick={toggleOpen}>
          <Icon><DemoIcon /></Icon> {isOpen ? "Hide Article" : "Read Article"}
        </ActionButton>

      </Post>
    </WrapperBlog>
  );
};


