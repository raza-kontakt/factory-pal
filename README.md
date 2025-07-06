
3. Interactive Components
   components/common/LanguageSwitch.tsx
   Why test: Interactive component with state management
   Test cases:
   Renders current language correctly
   Toggles dropdown menu on button click
   Changes language when option selected
   Closes dropdown after language selection
   Displays correct flags and language names
   components/common/AISummaryCard.tsx
   Why test: Component with complex conditional rendering
   Test cases:
   Renders when all required props are provided
   Returns null when summaryData is undefined
   Returns null when not successful or not showing
   Calls close handler when close button clicked
   Formats timestamp correctly with moment.js

4. Custom Hooks
   hooks/useShiftData.ts
   Why test: Custom hook with data transformation logic
   Test cases:
   Returns all logs when selectedCategory is "All"
   Filters logs by category when specific category selected
   Transforms logs for display correctly
   Returns correct total count
   hooks/useAISummary.ts
   Why test: Custom hook with React Query mutation
   Test cases:
   Calls generateAISummary with correct parameters
   Handles success callback
   Handles error callback and retry logic
   Updates query cache on success
   Resets mutation state

5. Business Logic Components
   components/common/MetricList.tsx
   Why test: Component that renders business metrics
   Test cases:
   Renders all metric cards with correct data
   Applies correct colors for different metrics
   Handles zero/undefined values gracefully
   Uses correct translations
   Testing Strategy Tips
   Start with utilities - They're pure functions and easiest to test
   Use React Testing Library for components - focus on user interactions
   Mock external dependencies - i18next, React Query, moment.js
   Test user behavior - clicks, toggles, form submissions
   Test edge cases - empty data, error states, loading states
   Use data-testid attributes - many components already have them
   Test accessibility - screen reader support, keyboard navigation
   Mock Strategy
   Mock react-i18next for translation testing
   Mock @tanstack/react-query for hook testing
   Mock moment.js for consistent date formatting
   Mock styled-components if needed for styling tests
   This selection gives you a good mix of utility functions (easiest), UI components (moderate), and business logic (more complex) while demonstrating various testing patterns that interviewers look for.
