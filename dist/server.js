import express from "express";
import cors from "cors";
import { login } from "./auth.js";
import { getCredits } from "./credit.js";
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://46.101.205.66:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
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
    }
    catch (e) {
        console.error(e);
        res.status(401).json({ error: e.message });
    }
});
app.get("/credits", async (req, res) => {
    try {
        const credits = await getCredits();
        res.json(credits);
    }
    catch (e) {
        console.error("CREDITS ERROR:", e);
        res.status(500).json({ error: e.message });
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=server.js.map