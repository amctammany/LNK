export declare const findFirstUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: "User";
    nullable: true;
    args: {
        where: import("@pothos/core").InputFieldRef<{
            AND?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput>;
            OR?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput>;
            NOT?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput>;
            id?: string | import("@prisma/client").Prisma.StringFilter;
            username?: string | import("@prisma/client").Prisma.StringFilter;
            name?: string | import("@prisma/client").Prisma.StringFilter;
            email?: string | import("@prisma/client").Prisma.StringFilter;
        }, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<{
            id?: import("@prisma/client").Prisma.SortOrder;
            username?: import("@prisma/client").Prisma.SortOrder;
            name?: import("@prisma/client").Prisma.SortOrder;
            email?: import("@prisma/client").Prisma.SortOrder;
        }[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<{
            id?: string;
            username?: string;
        }, "Arg">;
        take: import("@pothos/core").InputFieldRef<number, "Arg">;
        skip: import("@pothos/core").InputFieldRef<number, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<("name" | "id" | "username" | "email")[], "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
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
            AND?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput>;
            OR?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput>;
            NOT?: import("@prisma/client").Prisma.Enumerable<import("@prisma/client").Prisma.UserWhereInput>;
            id?: string | import("@prisma/client").Prisma.StringFilter;
            username?: string | import("@prisma/client").Prisma.StringFilter;
            name?: string | import("@prisma/client").Prisma.StringFilter;
            email?: string | import("@prisma/client").Prisma.StringFilter;
        }, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<{
            id?: import("@prisma/client").Prisma.SortOrder;
            username?: import("@prisma/client").Prisma.SortOrder;
            name?: import("@prisma/client").Prisma.SortOrder;
            email?: import("@prisma/client").Prisma.SortOrder;
        }[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<{
            id?: string;
            username?: string;
        }, "Arg">;
        take: import("@pothos/core").InputFieldRef<number, "Arg">;
        skip: import("@pothos/core").InputFieldRef<number, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<("name" | "id" | "username" | "email")[], "Arg">;
    }, true, unknown>;
};
export declare const findFirstUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    findFirstUser: import("@pothos/core").FieldRef<import("@prisma/client/runtime").GetResult<{
        id: string;
        username: string;
        name: string;
        email: string;
    }, unknown> & {}, "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
