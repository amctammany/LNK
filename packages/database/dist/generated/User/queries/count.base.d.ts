export declare const countUserQueryObject: (t: import("@pothos/core").QueryFieldBuilder<any, any>) => {
    type: "Int";
    nullable: false;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<any[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<any, "Arg">;
        take: import("@pothos/core").InputFieldRef<any, "Arg">;
        skip: import("@pothos/core").InputFieldRef<any, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<any[], "Arg">;
    };
    resolve: import("@pothos/core").Resolver<any, import("@pothos/core").InputShapeFromFields<{
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        orderBy: import("@pothos/core").InputFieldRef<any[], "Arg">;
        cursor: import("@pothos/core").InputFieldRef<any, "Arg">;
        take: import("@pothos/core").InputFieldRef<any, "Arg">;
        skip: import("@pothos/core").InputFieldRef<any, "Arg">;
        distinct: import("@pothos/core").InputFieldRef<any[], "Arg">;
    }>, any, any, unknown>;
};
export declare const countUserQuery: (t: PothosSchemaTypes.QueryFieldBuilder<any, any>) => {
    countUser: import("@pothos/core").FieldRef<any, "Query">;
};
