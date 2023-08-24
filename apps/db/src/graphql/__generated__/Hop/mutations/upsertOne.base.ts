import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneHopMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hop',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.HopWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.HopCreateInput, required: true }),
      update: t.arg({ type: Inputs.HopUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hop.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneHopMutation = defineMutation((t) => ({
  upsertOneHop: t.prismaField(upsertOneHopMutationObject(t)),
}));
