import React from 'react';
import styled from 'styled-components';
import { grayLight } from 'styleguide/colors';
import { DesignCredits } from './design-credits';
import { MadeWith } from './made-with';

const StyledFooter = styled.footer`
  font-size: 12px;
  margin-top: auto;
  padding: .5rem 0.5rem;
  display: flex;
  color: ${grayLight};
  justify-content: space-between;
`

export const Footer = () => (
  <StyledFooter>
    <DesignCredits
      content="Zup"
      arialLabel="Uma das maiores empresas de tecnologia de Uberlândia"
      link="https://zup.workable.com/">
    </DesignCredits>
    <MadeWith description="Feito com React e"/>
  </StyledFooter>);
