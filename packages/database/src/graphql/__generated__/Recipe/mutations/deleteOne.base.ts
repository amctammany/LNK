import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneRecipeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Recipe',
    nullable: true,
    args: { where: t.arg({ type: Inputs.RecipeWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.recipe.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneRecipeMutation = defineMutation((t) => ({
  deleteOneRecipe: t.prismaField(deleteOneRecipeMutationObject(t)),
}));
