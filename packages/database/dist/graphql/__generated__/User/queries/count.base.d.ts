export declare const countUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: "Int";
    nullable: false;
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
    resolve: import("@pothos/core").Resolver<{}, import("@pothos/core").InputShapeFromFields<{
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
    }>, {}, number, unknown>;
};
export declare const countUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    countUser: import("@pothos/core").FieldRef<number, "Query">;
};
//# sourceMappingURL=count.base.d.ts.map