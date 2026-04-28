import "dotenv/config";
export declare const getCredits: () => Promise<{
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    amount: import("@prisma/client-runtime-utils").Decimal;
    interestRate: import("@prisma/client-runtime-utils").Decimal;
    status: string;
}[]>;
//# sourceMappingURL=credit.d.ts.map