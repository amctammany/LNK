import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import primsa, { db } from "../lib/prisma";
import { Scalars } from "prisma-generator-pothos-codegen";
import { Prisma } from "@prisma/client";
// 2.
//Objects: {
//Address: { zip: String; street: String; city: String; state: String };
//};
//import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
export type Context = {
  prisma: typeof prisma;
  client: typeof db;
};
export const builder = new SchemaBuilder<{
  Context: Context;
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<
    Prisma.Decimal,
    Prisma.InputJsonValue | null,
    Prisma.InputJsonValue
  >;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: db,
  },
});
