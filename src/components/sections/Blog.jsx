import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
import { blogData } from "../BlogData";
import { BlogPost } from "../items/BlogCard";
import { ArrowIcon } from "../../img/icons";
import { ToggleButton } from "../items/Buttons";

const BlogSection = styled.section`
  background: ${({ theme }) => theme.surface.light.background};
  color: ${({ theme }) => theme.surface.light.text};
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
  text-align: center;
`;

const TogglebtnIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCount = showAll ? blogData.length : 1;

  return (
    <BlogSection>
      <SectionTitle>My Words</SectionTitle>

      {blogData.slice(0, visibleCount).map((post, i) => (
        <BlogPost key={i} blog={post} />
      ))}

      <ToggleButton $active={showAll} onClick={() => setShowAll(!showAll)}>
        {!showAll && <TogglebtnIcon><ArrowIcon aria-hidden="true" /></TogglebtnIcon>}
        {showAll ? "Show fewer" : "See more articles"}
      </ToggleButton>
    </BlogSection>
  );
};
