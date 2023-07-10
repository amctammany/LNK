export declare const findFirstUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<any, any>) => {
    type: "User";
    nullable: true;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<any[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<any, "Arg">;
        take: import("@pothos/core").InputFieldRef<any, "Arg">;
        skip: import("@pothos/core").InputFieldRef<any, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<any[], "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, any, any, import("@pothos/core").ObjectRef<any>, {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<any[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<any, "Arg">;
        take: import("@pothos/core").InputFieldRef<any, "Arg">;
        skip: import("@pothos/core").InputFieldRef<any, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<any[], "Arg">;
    }, true, unknown>;
};
export declare const findFirstUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<any, any>) => {
    findFirstUser: import("@pothos/core").FieldRef<any, "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
