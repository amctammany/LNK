import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneRecipeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Recipe',
    nullable: false,
    args: { data: t.arg({ type: Inputs.RecipeCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.recipe.create({ data: args.data, ...query }),
  }),
);

export const createOneRecipeMutation = defineMutation((t) => ({
  createOneRecipe: t.prismaField(createOneRecipeMutationObject(t)),
}));
