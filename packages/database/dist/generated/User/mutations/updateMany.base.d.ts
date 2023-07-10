export declare const updateManyUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<any, any>) => {
    type: any;
    nullable: false;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        data: import("@pothos/core").InputFieldRef<any, "Arg">;
    };
    resolve: import("@pothos/core").Resolver<any, import("@pothos/core").InputShapeFromFields<{
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
        data: import("@pothos/core").InputFieldRef<any, "Arg">;
    }>, any, any, unknown>;
};
export declare const updateManyUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<any, any>) => {
    updateManyUser: import("@pothos/core").FieldRef<any, "Mutation">;
};
