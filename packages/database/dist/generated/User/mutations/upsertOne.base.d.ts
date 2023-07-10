export declare const upsertOneUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<any, any>) => {
    type: "User";
    nullable: false;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        create: import("@pothos/core").InputFieldRef<any, "Arg">;
        update: import("@pothos/core").InputFieldRef<any, "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, any, any, import("@pothos/core").ObjectRef<any>, {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        create: import("@pothos/core").InputFieldRef<any, "Arg">;
        update: import("@pothos/core").InputFieldRef<any, "Arg">;
    }, false, unknown>;
};
export declare const upsertOneUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<any, any>) => {
    upsertOneUser: import("@pothos/core").FieldRef<any, "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
