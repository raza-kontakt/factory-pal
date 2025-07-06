export const createMockT = (translations: Record<string, string>) => {
  return jest.fn((key: string) => translations[key] || key);
};

export const setupMocks = () => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
};

export const cleanupMocks = () => {
  jest.restoreAllMocks();
}; 