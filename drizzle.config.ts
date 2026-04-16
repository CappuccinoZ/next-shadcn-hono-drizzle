import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './store/drizzle',
  schema: './store/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
