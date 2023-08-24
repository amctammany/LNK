import { PrismaClient, Prisma } from "@prisma/client";

type ModelTypes = keyof Prisma.TypeMap["model"];
//type M = Models[""]
function addUrlString<
  T extends ModelTypes,
  S extends Prisma.TypeMap["model"][T] = Prisma.TypeMap["model"][T],
  U extends S["payload"]["scalars"] = S["payload"]["scalars"],
  V extends keyof U = keyof U
>(prefix: string, key?: V) {
  const needs: any = {};
  needs[key ?? "slug"] = true;
  return {
    urlString: {
      needs,
      compute(data: U) {
        return `/${prefix}/${data[key || "slug"]}`;
      },
    },
  };
}
export function extendPrisma(prisma: PrismaClient) {
  prisma.$extends({
    model: {
      $allModels: {},
    },

    result: {
      hop: addUrlString<"Hop">("hops"),
      recipe: addUrlString<"Recipe">("recipes"),
      user: addUrlString<"User">("users", "username"),
    },
  });
}
export default extendPrisma;
