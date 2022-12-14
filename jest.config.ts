import type { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
    globals: {
        "ts-jest": {},
    },
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    coverageReporters: ["json-summary"]
};

export default config;
