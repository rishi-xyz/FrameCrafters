import {neon} from "@neondatabase/serverless"
import { drizzle } from 'drizzle-orm/neon-http';

const dburl = process.env.DRIZZLE_DATABASE_URL;
const sql  = neon(dburl);
export const db = drizzle({client:sql});