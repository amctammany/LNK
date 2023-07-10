/* eslint-disable */
import type { Prisma, User } from "/home/alex/@lnk/node_modules/.pnpm/@prisma+client@4.16.2_prisma@4.16.2/node_modules/@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: never;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}