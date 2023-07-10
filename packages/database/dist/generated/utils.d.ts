import { FieldOptionsFromKind, InputFieldMap, InterfaceParam, MutationFieldBuilder, MutationFieldsShape, ObjectRef, QueryFieldBuilder, QueryFieldsShape, TypeParam } from '@pothos/core';
import { PrismaFieldOptions, PrismaObjectTypeOptions, RelatedFieldOptions } from '@pothos/plugin-prisma';
import { builder } from './builder';
type Types = typeof builder extends PothosSchemaTypes.SchemaBuilder<infer T> ? T : unknown;
export declare const defineQuery: <Q extends QueryFieldsShape<any>>(q: Q) => Q;
export declare const defineQueryFunction: <Obj>(func: (t: QueryFieldBuilder<Types, Types['Root']>) => Obj) => (t: QueryFieldBuilder<Types, Types['Root']>) => Obj;
export declare const defineQueryObject: <Type extends TypeParam<any>, Nullable extends boolean, Args extends InputFieldMap>(obj: PothosSchemaTypes.QueryFieldOptions<any, Type, Nullable, Args, unknown>) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/core").Resolver<any, import("@pothos/core").InputShapeFromFields<Args>, any, import("@pothos/core").ShapeFromTypeParam<any, Type, Nullable>, unknown>;
};
export declare const defineQueryPrismaObject: <Type extends string | number | symbol | [string | number | symbol], Model extends any, Args extends InputFieldMap, Nullable extends boolean>(def: Omit<PothosSchemaTypes.QueryFieldOptions<any, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Nullable, Args, unknown>, "resolve" | "type"> & {
    type: Type;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, Model, any, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
}) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, Model, any, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
};
export declare const defineMutation: <M extends MutationFieldsShape<any>>(m: M) => M;
export declare const defineMutationFunction: <Obj>(func: (t: MutationFieldBuilder<Types, Types['Root']>) => Obj) => (t: MutationFieldBuilder<Types, Types['Root']>) => Obj;
export declare const defineMutationObject: <Type extends TypeParam<any>, Nullable extends boolean, Args extends InputFieldMap>(obj: PothosSchemaTypes.MutationFieldOptions<any, Type, Nullable, Args, unknown>) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/core").Resolver<any, import("@pothos/core").InputShapeFromFields<Args>, any, import("@pothos/core").ShapeFromTypeParam<any, Type, Nullable>, unknown>;
};
export declare const defineMutationPrismaObject: <Type extends string | number | symbol | [string | number | symbol], Model extends any, Args extends InputFieldMap, Nullable extends boolean>(obj: Omit<PothosSchemaTypes.MutationFieldOptions<any, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Nullable, Args, unknown>, "resolve" | "type"> & {
    type: Type;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, Model, any, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
}) => {
    type: Type;
    nullable: Nullable;
    args: Args;
    resolve: import("@pothos/plugin-prisma").PrismaFieldResolver<any, Model, any, Type extends [unknown] ? [ObjectRef<Model["Shape"]>] : ObjectRef<Model["Shape"]>, Args, Nullable, unknown>;
};
export declare const defineFieldObject: <Name extends string | number | symbol, Type extends TypeParam<any>, Nullable extends boolean, Args extends InputFieldMap>(_: Name, obj: PothosSchemaTypes.ObjectFieldOptions<any, any, Type, Nullable, Args, unknown>) => {
    type: Type;
    nullable: Nullable;
    description?: string;
    resolve: import("@pothos/core").Resolver<any, import("@pothos/core").InputShapeFromFields<Args>, any, import("@pothos/core").ShapeFromTypeParam<any, Type, Nullable>, unknown>;
};
export declare const defineExposeObject: <Type extends TypeParam<any>, Nullable extends boolean>(_: Type, obj: {
    description: string | undefined;
    nullable: Nullable;
}) => {
    description: string | undefined;
    nullable: Nullable;
};
export declare const defineRelationObject: <ModelName extends string | number | symbol, RelationName extends string | number | symbol, Nullable extends boolean, Args extends InputFieldMap>(_: ModelName, __: RelationName, obj: RelatedFieldOptions<any, any, RelationName, Nullable, Args, unknown, false, any>) => {
    description: string | undefined;
    nullable: Nullable;
    args: Args;
    query: any;
};
export declare const defineRelationFunction: <ModelName extends string | number | symbol, O>(_: ModelName, func: (t: PothosSchemaTypes.PrismaObjectFieldBuilder<any, any, false, any>) => O) => (t: PothosSchemaTypes.PrismaObjectFieldBuilder<any, any, false, any>) => O;
export declare const definePrismaObject: <Name extends string | number | symbol, Obj extends PrismaObjectTypeOptions<any, any, InterfaceParam<any>[], unknown, unknown, unknown, any>>(_: Name, obj: Obj) => Obj;
export {};
