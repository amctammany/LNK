export declare const createManyUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    type: ["User"];
    nullable: false;
    args: {
        data: import("@pothos/core").InputFieldRef<{
            id?: string;
            username: string;
            name: string;
            email: string;
        }[], "Arg">;
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
    }, {}, [import("@pothos/core").ObjectRef<import("@prisma/client/runtime").GetResult<{
        id: string;
        username: string;
        name: string;
        email: string;
    }, unknown> & {}>], {
        data: import("@pothos/core").InputFieldRef<{
            id?: string;
            username: string;
            name: string;
            email: string;
        }[], "Arg">;
    }, false, unknown>;
};
export declare const createManyUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue, import("@prisma/client").Prisma.InputJsonValue>;
}>, {}>) => {
    createManyUser: import("@pothos/core").FieldRef<readonly (import("@prisma/client/runtime").GetResult<{
        id: string;
        username: string;
        name: string;
        email: string;
    }, unknown> & {})[], "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
