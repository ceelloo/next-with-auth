import db from "@/server/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: process.env.DATABASE_PROVIDER as "sqlite" | "cockroachdb" | "mysql" | "postgresql" | "sqlserver" | "mongodb"
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 3,
  },
})