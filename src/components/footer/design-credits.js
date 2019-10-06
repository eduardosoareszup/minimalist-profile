import React from "react";
import styled from 'styled-components';
import { grayLight, themeColor } from 'styleguide/colors';

const StyledLink = styled.a`
  color: ${grayLight};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    color: ${themeColor}
  }
`

const StyledSpan = styled.span`
  margin-top: auto;
  display: block;
  align-items: center;
`

export const DesignCredits = ({ content, link, arialLabel }) => (
  <StyledSpan>
    Trabalhe comigo na
    <StyledLink rel="noreferrer" role="link" target="_blank" href={link} arial-label={arialLabel}> {content} </StyledLink>
  </StyledSpan>
);
