import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Pool } from "pg";
import { PrismaClient } from "./generated/prisma/client.js";

let prisma: InstanceType<typeof PrismaClient> | null = null;

function getPrismaClient() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!prisma) {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
  }

  return prisma;
}

export async function login(email: string, password: string) {
  const user = await getPrismaClient().user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Wrong password");
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || "SECRET_KEY",
    {
      expiresIn: "1d",
    },
  );

  return { token };
}
