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

import * as objs from "./__generated__/objects";
export default schema;
