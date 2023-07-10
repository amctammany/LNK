export declare const createOneUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<any, any>) => {
    type: "User";
    nullable: false;
    args: {
        data: import("@pothos/core").InputFieldRef<any, "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, any, any, import("@pothos/core").ObjectRef<any>, {
        data: import("@pothos/core").InputFieldRef<any, "Arg">;
    }, false, unknown>;
};
export declare const createOneUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<any, any>) => {
    createOneUser: import("@pothos/core").FieldRef<any, "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
