import { generateAllCrud } from "./__generated__/autocrud";
import { builder } from "./builder";

generateAllCrud();
//generateAllObjects({ exclude: ["User"] });
//generateAllQueries({ exclude: ["User"] });
//generateAllMutations({ exclude: ["User"] });
builder.queryType({});
builder.mutationType({});
const schema = builder.toSchema();

export default schema;
