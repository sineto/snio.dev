import type { UserConfig } from "vitest/config";

export const sharedConfig: UserConfig = {
  test: {
    globals: true,
    include: ["src/**/__tests__/**/*.test.ts"],
    exclude: ["node_modules", "dist", ".astro", ".turbo"],
  },
};
