// /lib/prisma.ts
import { PrismaClient } from "@prisma/client/edge";
import extendPrisma from "src/app/graphql/extendPrisma";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
export default extendPrisma(prisma);
export const db = new PrismaClient({
  // log: ['error', 'info', 'query', 'warn'],
});
