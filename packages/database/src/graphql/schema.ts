import "@pothos/core";
import "@pothos/plugin-prisma";
import { generateAllCrud } from "./__generated__/autocrud";
import { builder } from "./builder";
import { GraphQLSchema } from "graphql";

generateAllCrud();
//generateAllObjects({ exclude: ["User"] });
//generateAllQueries({ exclude: ["User"] });
//generateAllMutations({ exclude: ["User"] });
builder.queryType({});
builder.mutationType({});
const schema: GraphQLSchema = builder.toSchema();

export default schema;
