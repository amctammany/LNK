import * as Inputs from '@/graphql/__generated__/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyRecipeQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Recipe'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RecipeWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.RecipeOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.RecipeWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.RecipeScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.recipe.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyRecipeQuery = defineQuery((t) => ({
  findManyRecipe: t.prismaField(findManyRecipeQueryObject(t)),
}));
