import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneRecipeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Recipe',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RecipeWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.RecipeCreateInput, required: true }),
      update: t.arg({ type: Inputs.RecipeUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.recipe.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneRecipeMutation = defineMutation((t) => ({
  upsertOneRecipe: t.prismaField(upsertOneRecipeMutationObject(t)),
}));
