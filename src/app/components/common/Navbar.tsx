import React from "react";
import styled from "styled-components";
import LanguageSwitch from "./LanguageSwitch";
import { colors } from "../../consts/colors";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoImage src="/logo.png" alt="Lego Logo" />
      </Logo>

      <LanguageSwitch />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${colors.background.paper};

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  height: 45px;
  width: auto;

  @media (max-width: 768px) {
    height: 38px;
  }
`;

export default Navbar;
