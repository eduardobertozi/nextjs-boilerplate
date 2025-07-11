import { reset } from 'drizzle-seed'
import { db, pool } from './database'
import { schema } from './schema'

await reset(db, schema)

// await seed(db, schema).refine((faker) => {
//   return {

//   }
// })

await pool.end()

// biome-ignore lint/suspicious/noConsole: only used in dev.
console.log('🌱 Database seeded!')
