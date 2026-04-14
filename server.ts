import express from "express";
import { login } from "./auth.ts";

const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.json(result);
  } catch (e) {
    res.status(401).json({ error: "Login failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
