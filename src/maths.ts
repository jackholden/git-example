import { getFeatureFlags } from "./feature-flags";

const flags = getFeatureFlags();

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const string = (a: string, b: string) => {
  if (!flags.ENABLE_FEATURE_FLAG_1) {
    return undefined;
  }

  return `${a} and ${b}`;
};

export { add, subtract, multiply, divide, string };
