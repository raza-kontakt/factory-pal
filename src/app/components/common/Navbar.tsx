import React from "react";
import styled from "styled-components";
import LanguageSwitch from "./LanguageSwitch";

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
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

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
  height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

export default Navbar;
