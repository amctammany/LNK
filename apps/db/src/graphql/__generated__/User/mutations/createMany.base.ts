import * as Inputs from '@/graphql/__generated__/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyUserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['User'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.UserCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.user.create({ data }))),
  }),
);

export const createManyUserMutation = defineMutation((t) => ({
  createManyUser: t.prismaField(createManyUserMutationObject(t)),
}));
