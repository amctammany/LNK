import * as Inputs from '@/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyRecipeMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.RecipeWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.recipe.deleteMany({ where: args.where }),
  }),
);

export const deleteManyRecipeMutation = defineMutation((t) => ({
  deleteManyRecipe: t.field(deleteManyRecipeMutationObject(t)),
}));
