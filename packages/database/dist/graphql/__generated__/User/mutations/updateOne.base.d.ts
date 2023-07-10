export declare const updateOneUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: "User";
    nullable: true;
    args: {
        where: import("@pothos/core").InputFieldRef<{
            id?: string | undefined;
            username?: string | undefined;
        }, "Arg">;
        data: import("@pothos/core").InputFieldRef<{
            username?: import("@prisma/client").Prisma.StringFieldUpdateOperationsInput | undefined;
            name?: import("@prisma/client").Prisma.StringFieldUpdateOperationsInput | undefined;
            email?: import("@prisma/client").Prisma.StringFieldUpdateOperationsInput | undefined;
        }, "Arg">;
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
            id?: string | undefined;
            username?: string | undefined;
        }, "Arg">;
        data: import("@pothos/core").InputFieldRef<{
            username?: import("@prisma/client").Prisma.StringFieldUpdateOperationsInput | undefined;
            name?: import("@prisma/client").Prisma.StringFieldUpdateOperationsInput | undefined;
            email?: import("@prisma/client").Prisma.StringFieldUpdateOperationsInput | undefined;
        }, "Arg">;
    }, true, unknown>;
};
export declare const updateOneUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    updateOneUser: import("@pothos/core").FieldRef<(import("@prisma/client/runtime").GetResult<{
        id: string;
        username: string;
        name: string;
        email: string;
    }, unknown> & {}) | null | undefined, "Object" | "Query" | "Mutation" | "Subscription" | "Interface" | "PrismaObject">;
};
//# sourceMappingURL=updateOne.base.d.ts.map