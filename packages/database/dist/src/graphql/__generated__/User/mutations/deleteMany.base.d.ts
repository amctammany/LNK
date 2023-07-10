export declare const deleteManyUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: import("@pothos/core/dts/refs/object").default<import("@prisma/client").Prisma.BatchPayload, import("@prisma/client").Prisma.BatchPayload>;
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
    }>, {}, import("@prisma/client").Prisma.BatchPayload, unknown>;
};
export declare const deleteManyUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    deleteManyUser: import("@pothos/core").FieldRef<import("@prisma/client").Prisma.BatchPayload, "Mutation">;
};
