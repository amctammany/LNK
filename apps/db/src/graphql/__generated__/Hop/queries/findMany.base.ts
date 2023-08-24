import * as Inputs from '@/graphql/__generated__/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyHopQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Hop'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.HopWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.HopOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.HopWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.HopScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hop.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyHopQuery = defineQuery((t) => ({
  findManyHop: t.prismaField(findManyHopQueryObject(t)),
}));
