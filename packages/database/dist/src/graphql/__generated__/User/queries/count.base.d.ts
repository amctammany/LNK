export declare const countUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: "Int";
    nullable: false;
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
    resolve: import("@pothos/core").Resolver<{}, import("@pothos/core").InputShapeFromFields<{
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
    }>, {}, number, unknown>;
};
export declare const countUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    countUser: import("@pothos/core").FieldRef<number, "Query">;
};
