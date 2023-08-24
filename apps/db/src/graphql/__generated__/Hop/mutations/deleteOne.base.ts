import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneHopMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hop',
    nullable: true,
    args: { where: t.arg({ type: Inputs.HopWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hop.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneHopMutation = defineMutation((t) => ({
  deleteOneHop: t.prismaField(deleteOneHopMutationObject(t)),
}));
