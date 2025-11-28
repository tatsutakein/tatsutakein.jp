import { defineConfig } from "drizzle-kit";

const uri = [
  "mysql://",
  process.env.DB_USERNAME,
  ":",
  process.env.DB_PASSWORD,
  "@",
  process.env.DB_HOST,
  ":3306/",
  process.env.DB_NAME,
  '?ssl={"rejectUnauthorized":true}',
].join("");

export default defineConfig({
  schema: "./src/schema",
  dialect: "mysql",
  dbCredentials: { url: uri },
  tablesFilter: ["t3turbo_*"],
});
