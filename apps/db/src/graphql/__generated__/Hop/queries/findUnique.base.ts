import * as Inputs from '@/graphql/__generated__/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueHopQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Hop',
    nullable: true,
    args: { where: t.arg({ type: Inputs.HopWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hop.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueHopQuery = defineQuery((t) => ({
  findUniqueHop: t.prismaField(findUniqueHopQueryObject(t)),
}));
