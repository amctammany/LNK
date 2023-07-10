export declare const findFirstUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: "User";
    nullable: true;
    args: {
        where: import("@pothos/core").InputFieldRef<{
            AND?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput> | undefined;
            OR?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput> | undefined;
            NOT?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput> | undefined;
            id?: string | import("@prisma/client").Prisma.StringFilter | undefined;
            username?: string | import("@prisma/client").Prisma.StringFilter | undefined;
            name?: string | import("@prisma/client").Prisma.StringFilter | undefined;
            email?: string | import("@prisma/client").Prisma.StringFilter | undefined;
        } | null | undefined, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<{
            id?: import("@prisma/client").Prisma.SortOrder | undefined;
            username?: import("@prisma/client").Prisma.SortOrder | undefined;
            name?: import("@prisma/client").Prisma.SortOrder | undefined;
            email?: import("@prisma/client").Prisma.SortOrder | undefined;
        }[] | null | undefined, "Arg">;
        cursor: import("@pothos/core").InputFieldRef<{
            id?: string | undefined;
            username?: string | undefined;
        } | null | undefined, "Arg">;
        take: import("@pothos/core").InputFieldRef<number | null | undefined, "Arg">;
        skip: import("@pothos/core").InputFieldRef<number | null | undefined, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<("id" | "username" | "name" | "email")[] | null | undefined, "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, {
        Name: "User";
        Shape: import("@prisma/client/runtime").GetResult<{
            id: string;
            username: string;
            name: string;
            email: string;
        }, unknown> & {};
        Include: never;
        Select: import("@prisma/client").Prisma.UserSelect<import("@prisma/client/runtime").DefaultArgs>;
        OrderBy: import("@prisma/client").Prisma.UserOrderByWithRelationInput;
        WhereUnique: import("@prisma/client").Prisma.UserWhereUniqueInput;
        Where: import("@prisma/client").Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    }, {}, import("@pothos/core").ObjectRef<import("@prisma/client/runtime").GetResult<{
        id: string;
        username: string;
        name: string;
        email: string;
    }, unknown> & {}>, {
        where: import("@pothos/core").InputFieldRef<{
            AND?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput> | undefined;
            OR?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput> | undefined;
            NOT?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput> | undefined;
            id?: string | import("@prisma/client").Prisma.StringFilter | undefined;
            username?: string | import("@prisma/client").Prisma.StringFilter | undefined;
            name?: string | import("@prisma/client").Prisma.StringFilter | undefined;
            email?: string | import("@prisma/client").Prisma.StringFilter | undefined;
        } | null | undefined, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<{
            id?: import("@prisma/client").Prisma.SortOrder | undefined;
            username?: import("@prisma/client").Prisma.SortOrder | undefined;
            name?: import("@prisma/client").Prisma.SortOrder | undefined;
            email?: import("@prisma/client").Prisma.SortOrder | undefined;
        }[] | null | undefined, "Arg">;
        cursor: import("@pothos/core").InputFieldRef<{
            id?: string | undefined;
            username?: string | undefined;
        } | null | undefined, "Arg">;
        take: import("@pothos/core").InputFieldRef<number | null | undefined, "Arg">;
        skip: import("@pothos/core").InputFieldRef<number | null | undefined, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<("id" | "username" | "name" | "email")[] | null | undefined, "Arg">;
    }, true, unknown>;
};
export declare const findFirstUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    findFirstUser: import("@pothos/core").FieldRef<(import("@prisma/client/runtime").GetResult<{
        id: string;
        username: string;
        name: string;
        email: string;
    }, unknown> & {}) | null | undefined, "Object" | "Query" | "Mutation" | "Subscription" | "Interface" | "PrismaObject">;
};
//# sourceMappingURL=findFirst.base.d.ts.map