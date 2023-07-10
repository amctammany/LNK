import { PrismaClient } from "@prisma/client";
declare let prisma: PrismaClient;
declare global {
    var prisma: PrismaClient;
}
export default prisma;
export declare const db: PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client").Prisma.RejectOnNotFound | import("@prisma/client").Prisma.RejectPerOperation | undefined, import("@prisma/client/runtime").DefaultArgs>;
//# sourceMappingURL=prisma.d.ts.map