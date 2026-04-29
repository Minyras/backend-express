import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { PrismaClient } from "./generated/prisma/client.js";
import { login } from "./auth.js";
import { getCredits } from "./credit.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({
  adapter,
});

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://46.101.205.66:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {}; // 👈 fix

    if (!email || !password) {
      return res.status(400).json({
        error: "email və password lazımdır",
      });
    }

    const result = await login(email, password);
    res.json(result);
  } catch (e: any) {
    console.error(e);
    res.status(401).json({ error: e.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        error: "email və password lazımdır",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        error: "Bu email artıq mövcuddur",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
      },
    });

    res.status(201).json({
      message: "User yaradıldı",
      user,
    });
  } catch (e: any) {
    console.error("CREATE USER ERROR:", e);
    res.status(500).json({ error: e.message });
  }
});

app.get("/credits", async (req, res) => {
  try {
    const credits = await getCredits();
    res.json(credits);
  } catch (e: any) {
    console.error("CREDITS ERROR:", e);
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
