import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema/users.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url:process.env.DRIZZLE_DATABASE_URL!,
  },
});