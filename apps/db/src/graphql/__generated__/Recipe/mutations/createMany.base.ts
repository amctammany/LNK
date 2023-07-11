import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyRecipeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Recipe'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.RecipeCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.recipe.create({ data }))),
  }),
);

export const createManyRecipeMutation = defineMutation((t) => ({
  createManyRecipe: t.prismaField(createManyRecipeMutationObject(t)),
}));
