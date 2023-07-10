// /lib/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma;
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
}
else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}
export default prisma;
export var db = new PrismaClient({
// log: ['error', 'info', 'query', 'warn'],
});
