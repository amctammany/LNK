import schema from "../../graphql/schema";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import prisma from "@/lib/prisma";
const server = new ApolloServer({
  schema,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => ({ prisma: prisma }),
});

export async function GET(request: Request) {
  try {
    return handler(request);
  } catch (e) {
    console.error(e);
  }
}
export async function POST(request: Request) {
  try {
    return handler(request);
  } catch (e) {
    console.error(e);
  }
}
