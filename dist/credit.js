import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "./generated/prisma/client.js";
let prisma = null;
function getPrismaClient() {
    if (!prisma) {
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
        const adapter = new PrismaPg(pool);
        prisma = new PrismaClient({ adapter });
    }
    return prisma;
}
export const getCredits = async () => {
    return await getPrismaClient().credit.findMany();
};
//# sourceMappingURL=credit.js.map