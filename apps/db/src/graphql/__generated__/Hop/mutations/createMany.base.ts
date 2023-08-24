import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyHopMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Hop'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.HopCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.hop.create({ data }))),
  }),
);

export const createManyHopMutation = defineMutation((t) => ({
  createManyHop: t.prismaField(createManyHopMutationObject(t)),
}));
