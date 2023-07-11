import * as Inputs from '@/graphql/__generated__/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueRecipeQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Recipe',
    nullable: true,
    args: { where: t.arg({ type: Inputs.RecipeWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.recipe.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueRecipeQuery = defineQuery((t) => ({
  findUniqueRecipe: t.prismaField(findUniqueRecipeQueryObject(t)),
}));
