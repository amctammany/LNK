export declare const findUniqueUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<any, any>) => {
    type: "User";
    nullable: true;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, any, any, import("@pothos/core").ObjectRef<any>, {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
    }, true, unknown>;
};
export declare const findUniqueUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<any, any>) => {
    findUniqueUser: import("@pothos/core").FieldRef<any, "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
