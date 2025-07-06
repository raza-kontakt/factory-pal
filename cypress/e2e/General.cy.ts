describe("Language Switch Tests", () => {
  const SELECTORS = {
    languageSwitch: '[data-testid="language-switch"]',
    languageDropdown: '[data-testid="language-dropdown"]',
    languageOptionEn: '[data-testid="language-option-en"]',
    languageOptionDe: '[data-testid="language-option-de"]',
    pageTitle: "h4",
    tableRow: "tbody tr",
    body: "body",
  };

  const LANGUAGES = {
    english: {
      code: "en",
      name: "English",
      pageTitle: "Shifts",
      notFoundText: "Page Not Found",
    },
    german: {
      code: "de",
      name: "Deutsch",
      pageTitle: "Schichten",
      notFoundText: "Seite nicht gefunden",
    },
  };

  const switchToLanguage = (language: typeof LANGUAGES.english) => {
    cy.get(SELECTORS.languageSwitch).click();
    cy.get(
      SELECTORS[`languageOption${language.code === "en" ? "En" : "De"}`]
    ).click();
  };

  const verifyLanguageState = (language: typeof LANGUAGES.english) => {
    cy.get(SELECTORS.languageSwitch).should("contain", language.name);
    cy.get(SELECTORS.pageTitle).should("contain", language.pageTitle);
  };

  const openLanguageDropdown = () => {
    cy.get(SELECTORS.languageSwitch).click();
    cy.get(SELECTORS.languageDropdown).should("be.visible");
  };

  const waitForLanguageSwitch = () => {
    cy.get(SELECTORS.languageSwitch, { timeout: 10000 }).should("be.visible");
  };

  beforeEach(() => {
    cy.visit("/");
    waitForLanguageSwitch();
  });

  it("should display dropdown with language options", () => {
    openLanguageDropdown();
    cy.get(SELECTORS.languageOptionEn)
      .should("be.visible")
      .and("contain", LANGUAGES.english.name);
    cy.get(SELECTORS.languageOptionDe).should("be.visible");
  });

  it("should switch language and update text", () => {
    switchToLanguage(LANGUAGES.german);
    verifyLanguageState(LANGUAGES.german);

    switchToLanguage(LANGUAGES.english);
    verifyLanguageState(LANGUAGES.english);
  });

  it("should persist language after page refresh", () => {
    switchToLanguage(LANGUAGES.german);
    verifyLanguageState(LANGUAGES.german);

    cy.reload();
    waitForLanguageSwitch();
    verifyLanguageState(LANGUAGES.german);
  });

  it("should persist language across navigation", () => {
    switchToLanguage(LANGUAGES.german);

    cy.visit("/shift/WEB-01");
    cy.get(SELECTORS.languageSwitch).should("contain", LANGUAGES.german.name);

    cy.go("back");
    cy.get(SELECTORS.languageSwitch).should("contain", LANGUAGES.german.name);
  });

  it("should maintain language on 404 page", () => {
    switchToLanguage(LANGUAGES.german);

    cy.visit("/mango");
    cy.get(SELECTORS.languageSwitch).should("contain", LANGUAGES.german.name);
    cy.get(SELECTORS.body).should("contain", LANGUAGES.german.notFoundText);
  });
});
