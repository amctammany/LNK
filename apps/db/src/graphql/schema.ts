import {
  generateAllCrud,
  generateAllMutations,
  generateAllObjects,
  generateAllQueries,
} from "./__generated__/autocrud";
import { HopObject, RecipeObject } from "./__generated__/objects";
import { builder } from "./builder";
import { GraphQLSchema } from "graphql";
import { PrismaModelTypes } from "@pothos/plugin-prisma";
import { Prisma } from "@prisma/client";

const addUrlStringToRefs = (
  refs: Partial<{ [Key in Prisma.ModelName]: any }>
) => {
  Object.entries(refs).forEach(([name, ref]) => {
    builder.prismaObject(name as Prisma.ModelName, {
      ...ref,
      fields: (t) => {
        const fields = HopObject.fields(t);

        return {
          ...fields,
          urlString: t.field({
            type: "String",
            resolve: (parent) => `/hops/${parent.slug}`,
          }),
        };
      },
    });
  });
};

addUrlStringToRefs({ Hop: HopObject, Recipe: RecipeObject });
//builder.prismaObject("Hop", {
//...HopObject,
//fields: (t) => {
//const fields = HopObject.fields(t);

//return {
//...fields,
//urlString: t.field({
//type: "String",
//resolve: (parent) => `/hops/${parent.slug}`,
//}),
//};
//},
//});
//generateAllCrud();
generateAllObjects({ exclude: ["Hop", "Recipe"] });
generateAllQueries({ exclude: [] });
generateAllMutations({ exclude: [] });

//builder.objectFields(builder.objectRef("Hop"), (t) => ({
//urlString: t.string({
//resolve: (parent: any) => `/hops/${parent.slug}`,
//}),
//}));
//builder.objectFields(builder.objectRef("Hop"), (t) => ({
////slug: t.exposeString("slug", {}),
//urlString: t.string({
//resolve: (parent: any) => `/hops/${parent.slug}`,
//}),
//}));
builder.queryType({});
builder.mutationType({});
const schema: GraphQLSchema = builder.toSchema();

//import * as objs from "./__generated__/objects";
export default schema;
