import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { FrameWork } from "./frameworkbtn";
import { DemoIcon } from "../../img/icons";

// for styling component items
const WrapperBlog = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  border: 1px solid red;
  padding: 1rem;
  text-align: left;

  @media(min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
     padding: 5rem;

  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;
const Post = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2``;
const Text = styled.p``;
const LinkBtn = styled.a`
  background: black;
  color: white;
  width: 60%;
  max-width: 303px;
  padding: 6px;
  border-radius: 12px;
  display: flex;
  gap: 16px;
  text-decoration: none;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;

  svg {
    width: 20px; 
    height: 20px;
  }
`;


export const BlogPost = ({ blog }) => (
  <WrapperBlog>
    <Image src={blog.image} alt={blog.name} />
    <Post>
      <FrameWork frameworks={blog.framework} />
      <Title>{blog.name}</Title>
      <Text>{blog.description}</Text>
      <LinkBtn href={blog.demoLink}>
        <Icon><DemoIcon /></Icon> Read Article
      </LinkBtn>
    </Post>
  </WrapperBlog>
);
