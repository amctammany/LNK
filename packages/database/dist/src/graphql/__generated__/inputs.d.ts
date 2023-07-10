import { Prisma } from '@prisma/client';
type Filters = {
    string: Prisma.StringFieldUpdateOperationsInput;
    nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
    dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
    nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
    int: Prisma.IntFieldUpdateOperationsInput;
    nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
    bool: Prisma.BoolFieldUpdateOperationsInput;
    nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
    bigInt: Prisma.BigIntFieldUpdateOperationsInput;
    nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
    bytes: Prisma.BytesFieldUpdateOperationsInput;
    nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
    float: Prisma.FloatFieldUpdateOperationsInput;
    nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
    decimal: Prisma.DecimalFieldUpdateOperationsInput;
    nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};
type ApplyFilters<InputField> = {
    [F in keyof Filters]: 0 extends 1 & Filters[F] ? never : Filters[F] extends InputField ? Filters[F] : never;
}[keyof Filters];
type PrismaUpdateOperationsInputFilter<T extends object> = {
    [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>;
};
export declare const UserScalarFieldEnum: import("@pothos/core/dts/refs/enum").default<"name" | "id" | "username" | "email", "name" | "id" | "username" | "email">;
export declare const SortOrder: import("@pothos/core/dts/refs/enum").default<"asc" | "desc", "asc" | "desc">;
export declare const QueryMode: import("@pothos/core/dts/refs/enum").default<"default" | "insensitive", "default" | "insensitive">;
export declare const UserWhereInputFields: (t: any) => {
    AND: any;
    OR: any;
    NOT: any;
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserWhereInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserWhereInput>>;
export declare const UserOrderByWithRelationInputFields: (t: any) => {
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserOrderByWithRelationInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithRelationInput>>;
export declare const UserWhereUniqueInputFields: (t: any) => {
    id: any;
    username: any;
};
export declare const UserWhereUniqueInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserWhereUniqueInput>>;
export declare const UserOrderByWithAggregationInputFields: (t: any) => {
    id: any;
    username: any;
    name: any;
    email: any;
    _count: any;
    _max: any;
    _min: any;
};
export declare const UserOrderByWithAggregationInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithAggregationInput>>;
export declare const UserScalarWhereWithAggregatesInputFields: (t: any) => {
    AND: any;
    OR: any;
    NOT: any;
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserScalarWhereWithAggregatesInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereWithAggregatesInput>>;
export declare const UserCreateInputFields: (t: any) => {
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserCreateInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserCreateInput>>;
export declare const UserUpdateInputFields: (t: any) => {
    username: any;
    name: any;
    email: any;
};
export declare const UserUpdateInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateInput>>;
export declare const UserCreateManyInputFields: (t: any) => {
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserCreateManyInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyInput>>;
export declare const UserUpdateManyMutationInputFields: (t: any) => {
    username: any;
    name: any;
    email: any;
};
export declare const UserUpdateManyMutationInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyMutationInput>>;
export declare const StringFilterFields: (t: any) => {
    equals: any;
    in: any;
    notIn: any;
    lt: any;
    lte: any;
    gt: any;
    gte: any;
    contains: any;
    startsWith: any;
    endsWith: any;
    mode: any;
    not: any;
};
export declare const StringFilter: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>>;
export declare const UserCountOrderByAggregateInputFields: (t: any) => {
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserCountOrderByAggregateInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserCountOrderByAggregateInput>>;
export declare const UserMaxOrderByAggregateInputFields: (t: any) => {
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserMaxOrderByAggregateInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserMaxOrderByAggregateInput>>;
export declare const UserMinOrderByAggregateInputFields: (t: any) => {
    id: any;
    username: any;
    name: any;
    email: any;
};
export declare const UserMinOrderByAggregateInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.UserMinOrderByAggregateInput>>;
export declare const StringWithAggregatesFilterFields: (t: any) => {
    equals: any;
    in: any;
    notIn: any;
    lt: any;
    lte: any;
    gt: any;
    gte: any;
    contains: any;
    startsWith: any;
    endsWith: any;
    mode: any;
    not: any;
    _count: any;
    _min: any;
    _max: any;
};
export declare const StringWithAggregatesFilter: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>>;
export declare const StringFieldUpdateOperationsInputFields: (t: any) => {
    set: any;
};
export declare const StringFieldUpdateOperationsInput: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>>;
export declare const NestedStringFilterFields: (t: any) => {
    equals: any;
    in: any;
    notIn: any;
    lt: any;
    lte: any;
    gt: any;
    gte: any;
    contains: any;
    startsWith: any;
    endsWith: any;
    not: any;
};
export declare const NestedStringFilter: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>>;
export declare const NestedStringWithAggregatesFilterFields: (t: any) => {
    equals: any;
    in: any;
    notIn: any;
    lt: any;
    lte: any;
    gt: any;
    gte: any;
    contains: any;
    startsWith: any;
    endsWith: any;
    not: any;
    _count: any;
    _min: any;
    _max: any;
};
export declare const NestedStringWithAggregatesFilter: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>>;
export declare const NestedIntFilterFields: (t: any) => {
    equals: any;
    in: any;
    notIn: any;
    lt: any;
    lte: any;
    gt: any;
    gte: any;
    not: any;
};
export declare const NestedIntFilter: import("@pothos/core/dts/refs/input-object").default<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>>;
export {};
