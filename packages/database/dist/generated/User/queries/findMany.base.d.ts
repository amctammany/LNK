export declare const findManyUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<any, any>) => {
    type: [string];
    nullable: false;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<any[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<any, "Arg">;
        take: import("@pothos/core").InputFieldRef<any, "Arg">;
        skip: import("@pothos/core").InputFieldRef<any, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<any[], "Arg">;
    };
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, any, any, [import("@pothos/core").ObjectRef<any>], {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<any[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<any, "Arg">;
        take: import("@pothos/core").InputFieldRef<any, "Arg">;
        skip: import("@pothos/core").InputFieldRef<any, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<any[], "Arg">;
    }, false, unknown>;
};
export declare const findManyUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<any, any>) => {
    findManyUser: import("@pothos/core").FieldRef<readonly any[], "Query" | "Mutation" | "Subscription" | "Object" | "Interface" | "PrismaObject">;
};
