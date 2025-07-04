// Mock i18n setup
export const createMockT = (translations: Record<string, string>) => {
  return jest.fn((key: string) => translations[key] || key);
};

// Common mock setup
export const setupMocks = () => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
};

// Common mock cleanup
export const cleanupMocks = () => {
  jest.restoreAllMocks();
}; 