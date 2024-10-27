export interface FeatureFlags {
  [key: string]: boolean;
}

export const getFeatureFlags = (): FeatureFlags => {
  return {
    ENABLE_FEATURE_FLAG_1: process.env.ENABLE_FEATURE_FLAG_1 === "true",
  };
};
