import { defineConfig } from '@playwright/test'
import { resolve } from 'node:path'

const baseURL = 'http://127.0.0.1:3101'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL,
    browserName: 'chromium',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3101',
    url: baseURL,
    reuseExistingServer: false,
    timeout: 60000,
    env: {
      GOOGLE_TRANSLATE_API_KEY: 'ci-fixture-key',
      NODE_OPTIONS: `--require=${resolve('tests/fixtures/mock-google-translate.cjs')}`,
      NEXT_TELEMETRY_DISABLED: '1',
    },
  },
})
