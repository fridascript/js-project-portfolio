import styled from "styled-components";

// Section title h1
export const SectionTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme, dark }) =>
    dark ? theme.surface.dark.text : theme.surface.light.text};
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  color: ${({ theme, dark }) =>
    dark ? theme.surface.dark.text : theme.surface.light.text};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.p.fontSize};
  font-weight: ${({ theme }) => theme.typography.p.fontWeight};
  color: ${({ theme, dark }) =>
    dark ? theme.surface.dark.text : theme.surface.light.text};
`;