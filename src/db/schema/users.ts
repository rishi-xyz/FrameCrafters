import { integer, pgTable, varchar, serial, boolean } from "drizzle-orm/pg-core";

export const UsersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name",{ length: 255 }).notNull(),
  email: varchar("email",{ length: 255 }).notNull().unique(),
  imageUrl:varchar("imageUrl"),
  subscription:boolean("subscription").default(false)
});