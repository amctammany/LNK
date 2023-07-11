import * as Inputs from '@/graphql/__generated__/inputs';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countRecipeQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RecipeWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.RecipeOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.RecipeWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.RecipeScalarFieldEnum], required: false }),
    },
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.recipe.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countRecipeQuery = defineQuery((t) => ({
  countRecipe: t.field(countRecipeQueryObject(t)),
}));
