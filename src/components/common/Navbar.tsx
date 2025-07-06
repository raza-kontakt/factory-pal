import React from "react";
import styled from "styled-components";
import LanguageSwitch from "./LanguageSwitch";
import Container from "./Container";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo to="/">
        <LogoImage
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
          alt="Lego Logo"
        />
      </Logo>

      <LanguageSwitch />
    </NavbarContainer>
  );
};

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled(Link)`
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
