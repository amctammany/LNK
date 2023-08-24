import * as Inputs from '@/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyHopMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.HopWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.hop.deleteMany({ where: args.where }),
  }),
);

export const deleteManyHopMutation = defineMutation((t) => ({
  deleteManyHop: t.field(deleteManyHopMutationObject(t)),
}));
