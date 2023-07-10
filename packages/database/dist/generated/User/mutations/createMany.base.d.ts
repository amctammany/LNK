export declare const createManyUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<any, any>) => {
    type: [string];
    nullable: false;
    args: {
        data: import("@pothos/core").InputFieldRef<any[], "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, any, any, [import("@pothos/core").ObjectRef<any>], {
        data: import("@pothos/core").InputFieldRef<any[], "Arg">;
    }, false, unknown>;
};
export declare const createManyUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<any, any>) => {
    createManyUser: import("@pothos/core").FieldRef<readonly any[], "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
