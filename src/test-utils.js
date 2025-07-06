export const createMockShift = (overrides = {}) => ({
  id: "WEB-01",
  name: "Test Shift",
  isComplete: true,
  date: "2025-01-01T00:00:00Z",
  description: "Test shift description",
  logs: [
    {
      id: "oee",
      label: "OEE",
      value: 0.68,
      type: "percentage",
      description: "Overall Equipment Efficiency",
      category: "efficiency",
    },
    {
      id: "shift_duration",
      label: "Shift Duration",
      value: 8,
      type: "hours",
      description: "Duration of the shift",
      category: "shift",
    },
  ],
  ...overrides,
});

export const createMockAISummary = (overrides = {}) => ({
  id: "ai-summary-1",
  shiftId: "WEB-01",
  summary: "Test AI summary",
  wordCount: 10,
  timestamp: "2025-01-01T08:00:00Z",
  ...overrides,
});

export const mockFn = (returnValue) => jest.fn().mockReturnValue(returnValue);
export const mockAsyncFn = (returnValue) =>
  jest.fn().mockResolvedValue(returnValue);
export const mockErrorFn = (error) => jest.fn().mockRejectedValue(error);
