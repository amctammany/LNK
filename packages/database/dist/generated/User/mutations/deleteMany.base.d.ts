export declare const deleteManyUserMutationObject: (t: import("@pothos/core").MutationFieldBuilder<any, any>) => {
    type: any;
    nullable: true;
    args: {
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
    };
    resolve: import("@pothos/core").Resolver<any, import("@pothos/core").InputShapeFromFields<{
        where: import("@pothos/core").InputFieldRef<any, "Arg">;
    }>, any, any, unknown>;
};
export declare const deleteManyUserMutation: (t: PothosSchemaTypes.MutationFieldBuilder<any, any>) => {
    deleteManyUser: import("@pothos/core").FieldRef<any, "Mutation">;
};
