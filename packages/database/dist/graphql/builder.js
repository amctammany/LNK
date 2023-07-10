import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { db } from "../lib/prisma";
// 2.
//Objects: {
//Address: { zip: String; street: String; city: String; state: String };
//};
//import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
export var builder = new SchemaBuilder({
    plugins: [PrismaPlugin],
    prisma: {
        client: db,
    },
});
