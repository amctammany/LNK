import * as Inputs from '@/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyRecipeMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RecipeWhereInput, required: false }),
      data: t.arg({ type: Inputs.RecipeUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.recipe.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyRecipeMutation = defineMutation((t) => ({
  updateManyRecipe: t.field(updateManyRecipeMutationObject(t)),
}));
