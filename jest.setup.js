import "@testing-library/jest-dom";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn(), language: "en" },
  }),
}));

jest.mock("moment", () => {
  const moment = jest.fn(() => ({
    format: jest.fn(() => "2025-01-01"),
    valueOf: jest.fn(() => 1704067200000),
  }));
  
  moment.duration = jest.fn((value, unit) => {
    // Simple conversion logic for testing
    let minutes = value;
    if (unit === "seconds") {
      minutes = value / 60;
    } else if (unit === "hours") {
      minutes = value * 60;
    }
    
    return {
      asMinutes: jest.fn(() => Math.round(minutes)),
      asSeconds: jest.fn(() => Math.round(minutes * 60)),
    };
  });
  
  return moment;
});

jest.mock("@tanstack/react-query", () => ({
  useQuery: () => ({
    data: null,
    isLoading: false,
    error: null,
    refetch: jest.fn(),
  }),
  useMutation: () => ({
    mutate: jest.fn(),
    isLoading: false,
    error: null,
    reset: jest.fn(),
  }),
  useQueryClient: () => ({
    setQueryData: jest.fn(),
    invalidateQueries: jest.fn(),
  }),
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.IntersectionObserver = class IntersectionObserver {
  root = null;
  rootMargin = "";
  thresholds = [];

  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
};

global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
