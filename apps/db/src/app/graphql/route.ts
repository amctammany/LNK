import schema from "../../graphql/schema";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import prisma from "@/lib/prisma";
const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => ({ prisma: prisma }),
});

export async function GET(request: Request) {
  return handler(request);
}
export async function POST(request: Request) {
  return handler(request);
}
