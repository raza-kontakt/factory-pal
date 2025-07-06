import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { colors } from "../../utils/consts/colors";
import { KeyboardArrowDown } from "@mui/icons-material";

const LanguageSwitch: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: t("navbar.english"), flag: "🇺🇸" },
    { code: "de", name: t("navbar.german"), flag: "🇩🇪" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <LanguageSwitchContainer>
      <LanguageButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Flag>{currentLanguage?.flag}</Flag>
        <span>{currentLanguage?.name}</span>
        <KeyboardArrowDown />
      </LanguageButton>

      <DropdownMenu $isOpen={isMenuOpen}>
        {languages.map((language) => (
          <DropdownItem
            key={language.code}
            $isSelected={language.code === i18n.language}
            onClick={() => handleLanguageChange(language.code)}
          >
            <Flag>{language.flag}</Flag>
            <span>{language.name}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </LanguageSwitchContainer>
  );
};

const LanguageSwitchContainer = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  color: ${colors.text.primary};
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.background.default};
    border-color: ${colors.secondary.main};
    box-shadow: 0 2px 4px ${colors.shadow.secondary};
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const Flag = styled.span`
  font-size: 1.2rem;
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${colors.background.paper};
  border-radius: 8px;
  min-width: 120px;
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

const DropdownItem = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${(props) =>
    props.$isSelected ? colors.secondary.main : "transparent"};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? colors.secondary.main : colors.background.default};
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

export default LanguageSwitch;
