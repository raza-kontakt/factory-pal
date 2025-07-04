// Import actual translations
import enTranslations from "../../app/locates/en/translation.json";
import deTranslations from "../../app/locates/de/translation.json";

// Extract error translations
export const errorTranslations = {
  en: enTranslations.error,
  de: deTranslations.error,
};

// Translation map for tests (using English as default)
export const testTranslations: Record<string, string> = {
  "error.title": errorTranslations.en.title,
  "error.description": errorTranslations.en.description,
  "error.tryAgain": errorTranslations.en.tryAgain,
  "error.reloadPage": errorTranslations.en.reloadPage,
  "error.supportMessage": errorTranslations.en.supportMessage,
};

// Test error objects
export const testErrors = {
  basic: new Error("Test error"),
  withoutMessage: (() => {
    const error = new Error();
    error.message = "";
    return error;
  })(),
  longMessage: new Error("A".repeat(1000)),
  specialChars: new Error(
    '<script>alert("xss")</script> & special chars: αβγ 中文'
  ),
  malformed: (() => {
    const error = Object.create(Error.prototype);
    error.name = null;
    error.message = undefined;
    error.stack = null;
    return error;
  })(),
  customError: (() => {
    class CustomError extends Error {
      public code: string;
      public details: Record<string, unknown>;

      constructor(
        message: string,
        code: string,
        details: Record<string, unknown>
      ) {
        super(message);
        this.name = "CustomError";
        this.code = code;
        this.details = details;
      }
    }

    return new CustomError("Custom error occurred", "CUSTOM_001", {
      userId: "123",
      action: "getData",
    } as Record<string, unknown>);
  })(),
  errorTypes: [
    new TypeError("Type error occurred"),
    new ReferenceError("Reference error occurred"),
    new SyntaxError("Syntax error occurred"),
    new RangeError("Range error occurred"),
  ],
  multipleErrors: [new Error("First error"), new Error("Second error")],
};

// Expected UI elements
export const expectedElements = {
  title: errorTranslations.en.title,
  description: errorTranslations.en.description,
  tryAgainButton: errorTranslations.en.tryAgain,
  reloadPageButton: errorTranslations.en.reloadPage,
  supportMessage: errorTranslations.en.supportMessage,
};
