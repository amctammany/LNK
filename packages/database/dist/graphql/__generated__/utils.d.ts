import { FieldOptionsFromKind, InputFieldMap, InterfaceParam, MutationFieldBuilder, MutationFieldsShape, ObjectRef, QueryFieldBuilder, QueryFieldsShape, TypeParam } from '@pothos/core';
import { PrismaFieldOptions, PrismaObjectTypeOptions, RelatedFieldOptions } from '@pothos/plugin-prisma';
import { builder } from '@/graphql/builder';
type Types = typeof builder extends PothosSchemaTypes.SchemaBuilder<infer T> ? T : unknown;
export declare const defineQuery: <Q extends QueryFieldsShape<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>>>(q: Q) => Q;
export declare const defineQueryFunction: <Obj>(func: (t: QueryFieldBuilder<Types, Types['Root']>) => Obj) => (t: QueryFieldBuilder<Types, Types['Root']>) => Obj;
export declare const defineQueryObject: <Type extends TypeParam<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>>, Nullable extends boolean, Args extends InputFieldMap>(obj: PothosSchemaTypes.QueryFieldOptions<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, Type, Nullable, Args, unknown>) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/core").Resolver<{}, import("@pothos/core").InputShapeFromFields<Args>, {}, import("@pothos/core").ShapeFromTypeParam<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, Type, Nullable>, unknown>;
};
export declare const defineQueryPrismaObject: <Type extends "User" | ["User"], Model extends import("@pothos/plugin-prisma/generated").default[Type extends [unknown] ? Type[0] : Type], Args extends InputFieldMap, Nullable extends boolean>(def: Omit<PothosSchemaTypes.QueryFieldOptions<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Nullable, Args, unknown>, "resolve" | "type"> & {
    type: Type;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, Model, {}, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
}) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, Model, {}, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
};
export declare const defineMutation: <M extends MutationFieldsShape<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>>>(m: M) => M;
export declare const defineMutationFunction: <Obj>(func: (t: MutationFieldBuilder<Types, Types['Root']>) => Obj) => (t: MutationFieldBuilder<Types, Types['Root']>) => Obj;
export declare const defineMutationObject: <Type extends TypeParam<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>>, Nullable extends boolean, Args extends InputFieldMap>(obj: PothosSchemaTypes.MutationFieldOptions<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, Type, Nullable, Args, unknown>) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/core").Resolver<{}, import("@pothos/core").InputShapeFromFields<Args>, {}, import("@pothos/core").ShapeFromTypeParam<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, Type, Nullable>, unknown>;
};
export declare const defineMutationPrismaObject: <Type extends "User" | ["User"], Model extends import("@pothos/plugin-prisma/generated").default[Type extends [unknown] ? Type[0] : Type], Args extends InputFieldMap, Nullable extends boolean>(obj: Omit<PothosSchemaTypes.MutationFieldOptions<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Nullable, Args, unknown>, "resolve" | "type"> & {
    type: Type;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, Model, {}, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
}) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, Model, {}, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
};
export declare const defineFieldObject: <Name extends "User", Type extends TypeParam<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>>, Nullable extends boolean, Args extends InputFieldMap>(_: Name, obj: PothosSchemaTypes.ObjectFieldOptions<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, import("@pothos/plugin-prisma/generated").default[Name]["Shape"], Type, Nullable, Args, unknown>) => {
    type: Type;
    nullable: Nullable;
    description?: string | undefined;
    resolve: import("@pothos/core").Resolver<import("@pothos/plugin-prisma/generated").default[Name]["Shape"], import("@pothos/core").InputShapeFromFields<Args>, {}, import("@pothos/core").ShapeFromTypeParam<PothosSchemaTypes.ExtendDefaultTypes<{
        PrismaTypes: import("@pothos/plugin-prisma/generated").default;
        Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
    }>, Type, Nullable>, unknown>;
};
export declare const defineExposeObject: <Type extends TypeParam<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>>, Nullable extends boolean>(_: Type, obj: {
    description: string | undefined;
    nullable: Nullable;
}) => {
    description: string | undefined;
    nullable: Nullable;
};
export declare const defineRelationObject: <ModelName extends "User", RelationName extends keyof import("@pothos/plugin-prisma/generated").default[ModelName]["Relations"], Nullable extends boolean, Args extends InputFieldMap>(_: ModelName, __: RelationName, obj: RelatedFieldOptions<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, import("@pothos/plugin-prisma/generated").default[ModelName], RelationName, Nullable, Args, unknown, false, import("@pothos/plugin-prisma/generated").default[ModelName]["Shape"]>) => {
    description: string | undefined;
    nullable: Nullable;
    args: Args;
    query: (import("@pothos/plugin-prisma/generated").default[ModelName]["Include"][RelationName & keyof import("@pothos/plugin-prisma/generated").default[ModelName]["Include"]] extends infer T ? T extends import("@pothos/plugin-prisma/generated").default[ModelName]["Include"][RelationName & keyof import("@pothos/plugin-prisma/generated").default[ModelName]["Include"]] ? T extends {
        where?: unknown;
    } ? Omit<T, "select" | "include"> | ((args: import("@pothos/core").InputShapeFromFields<Args>, ctx: {}) => Omit<T, "select" | "include">) : never : never : never) | undefined;
};
export declare const defineRelationFunction: <ModelName extends "User", O>(_: ModelName, func: (t: PothosSchemaTypes.PrismaObjectFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, import("@pothos/plugin-prisma/generated").default[ModelName], false, import("@pothos/plugin-prisma/generated").default[ModelName]["Shape"]>) => O) => (t: PothosSchemaTypes.PrismaObjectFieldBuilder<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, import("@pothos/plugin-prisma/generated").default[ModelName], false, import("@pothos/plugin-prisma/generated").default[ModelName]["Shape"]>) => O;
export declare const definePrismaObject: <Name extends "User", Obj extends PrismaObjectTypeOptions<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>, import("@pothos/plugin-prisma/generated").default[Name], InterfaceParam<PothosSchemaTypes.ExtendDefaultTypes<{
    PrismaTypes: import("@pothos/plugin-prisma/generated").default;
    Scalars: import("prisma-generator-pothos-codegen").Scalars<import("@prisma/client/runtime").Decimal, import("@prisma/client").Prisma.InputJsonValue | null, import("@prisma/client").Prisma.InputJsonValue>;
}>>[], unknown, unknown, unknown, import("@pothos/plugin-prisma/generated").default[Name]["Shape"]>>(_: Name, obj: Obj) => Obj;
export {};
//# sourceMappingURL=utils.d.ts.map