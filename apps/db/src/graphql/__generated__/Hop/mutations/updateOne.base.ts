import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneHopMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hop',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.HopWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.HopUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hop.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneHopMutation = defineMutation((t) => ({
  updateOneHop: t.prismaField(updateOneHopMutationObject(t)),
}));
