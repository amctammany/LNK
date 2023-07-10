export declare const updateOneUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<any, any>) => {
    type: "User";
    nullable: true;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        data: import("@pothos/core").InputFieldRef<any, "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, any, any, import("@pothos/core").ObjectRef<any>, {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        data: import("@pothos/core").InputFieldRef<any, "Arg">;
    }, true, unknown>;
};
export declare const updateOneUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<any, any>) => {
    updateOneUser: import("@pothos/core").FieldRef<any, "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
