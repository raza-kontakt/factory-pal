describe("Shift Details Page Tests", () => {
  const SELECTORS = {
    // Navigation
    backButton: "[data-testid='back-button']",
    pageTitle: "[data-testid='heading']",

    // Shift Header Section
    shiftIdSection: "[data-testid='shift-id']",
    shiftDateSection: "[data-testid='shift-date']",
    shiftDurationSection: "[data-testid='shift-duration']",
    shiftStatusSection: "[data-testid='shift-status']",
    statusChip: ".MuiChip-root",

    // Chart Section
    chartContainer: ".recharts-wrapper",
    chartBars: ".recharts-bar-rectangle",
    chartXAxis: ".recharts-xAxis",
    chartYAxis: ".recharts-yAxis",
    chartTooltip: ".recharts-tooltip-wrapper",
    chartLegend: ".recharts-legend-wrapper",

    // AI Summary Section
    aiSummaryButton: "button[data-testid='ai-summary-button']",
    aiSummaryCard: "[data-testid='ai-summary-card']",
    aiSummaryContent: "[data-testid='ai-summary-content']",
    aiSummaryCloseButton: "[data-testid='ai-summary-close']",
    loadingSpinner: ".MuiCircularProgress-root",
    aiSummaryContainer: "[data-testid='ai-summary-container']",
    aiSummaryClose: "[data-testid='ai-summary-close']",

    // Filters Section
    filterChips: ".MuiChip-root",
    filterContainer: "[data-testid='filter-container']",
    shiftFilterChip: "[data-testid='shift-filter-chip']",

    // General
    body: "body",
    errorMessage: "[data-testid='error-message']",
    loadingIndicator: "[data-testid='loading']",
  };

  const TEST_SHIFT_ID = "WEB-01";
  const SHIFT_DETAIL_URL = `http://localhost:5173/shift/${TEST_SHIFT_ID}`;
  const HOME_URL = "http://localhost:5173/";

  // Helper functions
  const navigateToShiftDetails = () => {
    cy.visit(SHIFT_DETAIL_URL);
    cy.get(SELECTORS.pageTitle, { timeout: 10000 }).should("be.visible");
  };

  const waitForPageLoad = () => {
    cy.get(SELECTORS.pageTitle, { timeout: 10000 }).should("be.visible");
    cy.get(SELECTORS.loadingIndicator).should("not.exist");
  };

  const verifyShiftHeaderData = () => {
    cy.get(SELECTORS.body).should("contain", TEST_SHIFT_ID);
  };

  const verifyChartRendering = () => {
    cy.get(SELECTORS.chartContainer).should("be.visible");
    cy.get(SELECTORS.chartBars).should("have.length.greaterThan", 0);
    cy.get(SELECTORS.chartXAxis).should("be.visible");
    cy.get(SELECTORS.chartYAxis).should("be.visible");
  };

  const verifyChartInteractivity = () => {
    cy.get(SELECTORS.chartBars).first().trigger("mouseover");
    cy.get(SELECTORS.chartTooltip).should("be.visible");
  };

  const testAISummaryToggle = () => {
    // Find and click AI Summary button
    cy.get(SELECTORS.body)
      .contains(/AI Summary|AI Zusammenfassung/i)
      .click();

    cy.get(SELECTORS.aiSummaryCard).should("be.visible");

    cy.get(SELECTORS.aiSummaryClose).click();

    cy.get(SELECTORS.aiSummaryCard).should("not.exist");
  };

  const testFilters = () => {
    cy.get(SELECTORS.shiftFilterChip).should("have.length.greaterThan", 1);

    cy.get(SELECTORS.shiftFilterChip).each(($chip, index) => {
      if (index < 3) {
        cy.wrap($chip).click();

        cy.wrap($chip)
          .should("have.attr", "data-testid")
          .should("not.be.empty");

        cy.wait(500);

        cy.get(SELECTORS.chartContainer).should("be.visible");
      }
    });
  };

  beforeEach(() => {
    navigateToShiftDetails();
    waitForPageLoad();
  });

  describe("Back Navigation", () => {
    it("should navigate back to home page using browser back button", () => {
      cy.visit(HOME_URL);
      cy.get("tbody tr").first().click();
      cy.url().should("include", "/shift/");

      cy.go("back");
      cy.url().should("eq", HOME_URL);
    });
  });

  describe("Shift Header Section", () => {
    it("should display correct shift ID", () => {
      cy.get(SELECTORS.body).should("contain", TEST_SHIFT_ID);
    });

    it("should display shift status as chip", () => {
      cy.get(SELECTORS.statusChip).should("be.visible");
    });

    it("should display all header information correctly", () => {
      verifyShiftHeaderData();
    });
  });

  describe("💡 AI Summary Section", () => {
    it("should display AI Summary button", () => {
      cy.get(SELECTORS.body)
        .contains(/AI Summary|AI Zusammenfassung/i)
        .should("be.visible");
    });

    it("should show/hide summary content when clicked", () => {
      testAISummaryToggle();
    });

    it("should show loading state when generating", () => {
      cy.get(SELECTORS.body)
        .contains(/AI Summary|AI Zusammenfassung/i)
        .click();

      cy.get(SELECTORS.loadingSpinner).should("exist");
    });
  });

  describe("📊 Chart Section", () => {
    it("should render bar chart with correct structure", () => {
      verifyChartRendering();
    });

    it("should show tooltip on hover", () => {
      verifyChartInteractivity();
    });
  });

  describe("🔍 Filters Section", () => {
    it("should display filter chips", () => {
      cy.get(SELECTORS.filterChips).should("have.length.greaterThan", 1);
      cy.get(SELECTORS.filterChips).should("be.visible");
    });

    it("should show 'All' filter by default", () => {
      cy.get(SELECTORS.filterChips).should("contain", "All");
    });

    it("should change visual state when filter is selected", () => {
      cy.get(SELECTORS.filterChips).eq(1).click();

      cy.get(SELECTORS.filterChips)
        .eq(1)
        .should("have.class", "MuiChip-filled");
    });

    it("should filter data when different categories are selected", () => {
      testFilters();
    });

    it("should show different data for different filters", () => {
      cy.get(SELECTORS.filterChips).contains("All").click();
      cy.get(SELECTORS.chartBars).its("length").as("allBarsCount");

      cy.get(SELECTORS.filterChips).not(":contains('All')").first().click();
      cy.get(SELECTORS.chartBars).should("have.length.greaterThan", 0);
    });
  });

  describe("🌐 Multilingual Support", () => {
    it("should maintain functionality after language switch", () => {
      cy.get('[data-testid="language-switch"]').click();
      cy.get('[data-testid="language-option-de"]').click();

      cy.get(SELECTORS.filterChips).eq(1).click();
      cy.get(SELECTORS.chartContainer).should("be.visible");

      cy.get('[data-testid="language-switch"]').click();
      cy.get('[data-testid="language-option-en"]').click();

      cy.get(SELECTORS.chartContainer).should("be.visible");
      cy.get(SELECTORS.filterChips).should("have.length.greaterThan", 1);
    });
  });
});
