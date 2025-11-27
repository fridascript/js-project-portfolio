import React, { useState } from "react";
import styled from "styled-components";
import { blogData } from "../BlogData";
import { BlogPost } from "../items/BlogCard";
import { ArrowIcon } from "../../img/icons";

// for styling component 
const Section = styled.section`
  background: ${({ theme }) => theme.surface.light.background};
  color: ${({ theme }) => theme.surface.light.text};
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
  text-align: center;
`;

const MoreArticles = styled.button.attrs({ type: 'button' })`
background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 16px;
  max-width: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  margin: 30px auto 0;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;  

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(1);

  const showMore = () => {
    setVisibleCount(blogData.length);
  };

  return (
    <Section>
      <h1>My Words</h1>

      {blogData.slice(0, visibleCount).map((post, i) => (
        <BlogPost key={i} blog={post} />
      ))}
      {visibleCount < blogData.length && (
        <MoreArticles onClick={showMore}>
          <Icon><ArrowIcon /></Icon>See more articles
        </MoreArticles>
      )}
    </Section >


  );
};
