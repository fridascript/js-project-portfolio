import React from "react";
import styled from "styled-components";
import { blogData } from "./BlogData";
import { FrameWork } from "./frameworkbtn";
import { DemoIcon } from "../img/icons";

//for media queries//
const breakpoints = {
  tabletMin: "768px",
  tabletMax: "1024px",
  desktop: "1025px",
};

//styling for component//

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;
  margin: 0;
`;

const BlogCard = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 1rem;
  border: 1px solid red;
  align-items: center;
  padding: 1rem;

 

  @media (min-width: 768px) { 
    grid-template-columns: 1fr 1fr; 
    align-items: center;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 12px;

  @media (min-width: ${breakpoints.desktop}) {
    width: 80%;
    max-width: 80%;
  }
`;

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogPostTitle = styled.h2``;
const BlogText = styled.p``;
const BlogLink = styled.a`
background: black;
color: white;
display: flex;
align-items: center;
width: 60%;
max-width: 303px;
margin-bottom: 10px;
border-radius: 12px;
justify-content: flex - start;
padding: 6px;
text-decoration: none;
gap: 16px;
`;


//component//

export const Blog = () => {
  return (
    <BlogWrapper>
      <h1>My Words</h1>

      <BlogGrid>
        {blogData.map((blog, index) => (
          <BlogCard key={index}>
            <BlogImage
              src={blog.image}
              alt={blog.name}
            />

            <BlogPost>
              <FrameWork frameworks={blog.framework} />

              <BlogPostTitle>{blog.name}</BlogPostTitle>
              <BlogText>{blog.description}</BlogText>

              <div>
                <BlogLink href={blog.demoLink}>
                  <DemoIcon /> Read Article
                </BlogLink>
              </div>
            </BlogPost>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogWrapper>
  );
};