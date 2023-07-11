import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneRecipeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Recipe',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.RecipeWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.RecipeUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.recipe.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneRecipeMutation = defineMutation((t) => ({
  updateOneRecipe: t.prismaField(updateOneRecipeMutationObject(t)),
}));
