import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es6',
  platform: 'browser',
  format: ['cjs'],
  entry: ['src/index.ts'],
  clean: false,
  loader: {
    '.png': 'base64',
  },
  env: {
    NODE_ENV: 'production'
  }
})
