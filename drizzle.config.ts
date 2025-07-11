import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	dialect: 'postgresql',
	casing: 'snake_case',
	schema: './src/db/schema/**.ts',
	out: './src/db/migrations',
	dbCredentials: {
		url: String(process.env.DATABASE_URL),
	},
})
