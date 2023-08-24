import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneHopMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hop',
    nullable: false,
    args: { data: t.arg({ type: Inputs.HopCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hop.create({ data: args.data, ...query }),
  }),
);

export const createOneHopMutation = defineMutation((t) => ({
  createOneHop: t.prismaField(createOneHopMutationObject(t)),
}));
