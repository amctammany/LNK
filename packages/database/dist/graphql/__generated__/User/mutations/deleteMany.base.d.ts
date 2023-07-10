export declare const deleteManyUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: import("@pothos/core/dts/refs/object").default<import("@prisma/client").Prisma.BatchPayload, import("@prisma/client").Prisma.BatchPayload>;
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
        }, "Arg">;
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
        }, "Arg">;
    }>, {}, import("@prisma/client").Prisma.BatchPayload | null | undefined, unknown>;
};
export declare const deleteManyUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    deleteManyUser: import("@pothos/core").FieldRef<import("@prisma/client").Prisma.BatchPayload | null | undefined, "Mutation">;
};
//# sourceMappingURL=deleteMany.base.d.ts.map