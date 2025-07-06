describe("Shifts List Page Tests", () => {
  const SELECTORS = {
    pageTitle: "[data-testid='heading']",
    table: "table",
    tableHeader: "th",
    tableRow: "tbody tr",
    tableCell: "td",
    loadingIndicator: "[data-testid='loading']",
    errorMessage: "[data-testid='error-message']",
    emptyState: "[data-testid='empty-state']",
    body: "body",
  };

  const TABLE_COLUMNS = {
    english: ["ID", "Name", "Date", "Description", "Completed"],
    german: ["ID", "Name", "Datum", "Beschreibung", "Abgeschlossen"],
  } as const;

  const waitForPageLoad = () => {
    cy.get(SELECTORS.pageTitle, { timeout: 10000 }).should("be.visible");
  };

  const verifyTableColumns = (
    language: keyof typeof TABLE_COLUMNS = "english"
  ) => {
    const columns = TABLE_COLUMNS[language];
    columns.forEach((column: string) => {
      cy.get(SELECTORS.tableHeader).should("contain", column);
    });
  };

  const verifyTableHasData = () => {
    cy.get(SELECTORS.table).should("be.visible");
    cy.get(SELECTORS.tableRow).should("have.length.greaterThan", 0);
  };

  const getShiftIdsFromTable = () => {
    return cy.get(SELECTORS.tableRow).then(($rows) => {
      const shiftIds: string[] = [];
      $rows.each((index, row) => {
        const firstCell = Cypress.$(row).find(SELECTORS.tableCell).first();
        const shiftId = firstCell.text().trim();
        if (shiftId) {
          shiftIds.push(shiftId);
        }
      });
      return shiftIds;
    });
  };

  const verifyShiftNavigation = (shiftId: string) => {
    cy.get(SELECTORS.tableRow).contains(shiftId).click();
    cy.url().should("include", `/shift/${shiftId}`);
  };

  beforeEach(() => {
    cy.visit("/");
    waitForPageLoad();
  });

  describe("Navigation", () => {
    it("should navigate to correct shift detail page on row click", () => {
      verifyTableHasData();

      getShiftIdsFromTable().then((shiftIds) => {
        shiftIds.forEach((shiftId) => {
          cy.visit("/");
          verifyShiftNavigation(shiftId);
          cy.go("back");
        });
      });
    });
  });

  describe("Table Rendering", () => {
    it("should display all required columns in English", () => {
      verifyTableColumns("english");
    });

    it("should display all required columns in German", () => {
      cy.get('[data-testid="language-switch"]').click();
      cy.get('[data-testid="language-option-de"]').click();
      verifyTableColumns("german");
    });

    it("should display table with data", () => {
      verifyTableHasData();

      cy.get(SELECTORS.tableRow).each(($row) => {
        cy.wrap($row)
          .find(SELECTORS.tableCell)
          .should("have.length.greaterThan", 0);
      });
    });
  });

  describe("Loading States", () => {
    it("should show loading indicator during initial page load", () => {
      cy.get(SELECTORS.loadingIndicator).should("be.visible");

      waitForPageLoad();
      cy.get(SELECTORS.loadingIndicator).should("not.exist");
    });

    it("should display data after loading completes", () => {
      waitForPageLoad();

      verifyTableHasData();
    });
  });
});
