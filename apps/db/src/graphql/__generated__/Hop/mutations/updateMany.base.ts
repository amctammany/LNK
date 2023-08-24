import * as Inputs from '@/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyHopMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.HopWhereInput, required: false }),
      data: t.arg({ type: Inputs.HopUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.hop.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyHopMutation = defineMutation((t) => ({
  updateManyHop: t.field(updateManyHopMutationObject(t)),
}));
