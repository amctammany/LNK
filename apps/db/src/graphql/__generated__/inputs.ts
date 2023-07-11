// @ts-nocheck
import { Prisma } from '@prisma/client';
import { builder } from '@/graphql/builder';

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
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};



export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id","username","name","email"] as const,
});

export const RecipeScalarFieldEnum = builder.enumType('RecipeScalarFieldEnum', {
  values: ["id","name","slug","description","authorId"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const UserWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserWhereInput]}),
  OR: t.field({"required":false,"type":[UserWhereInput]}),
  NOT: t.field({"required":false,"type":[UserWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  username: t.field({"required":false,"type":StringFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  email: t.field({"required":false,"type":StringFilter}),
  recipes: t.field({"required":false,"type":RecipeListRelationFilter}),
});
export const UserWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereInput>>('UserWhereInput').implement({
  fields: UserWhereInputFields,
});

export const UserOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  username: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  recipes: t.field({"required":false,"type":RecipeOrderByRelationAggregateInput}),
});
export const UserOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithRelationInput>>('UserOrderByWithRelationInput').implement({
  fields: UserOrderByWithRelationInputFields,
});

export const UserWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  username: t.string({"required":false}),
});
export const UserWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereUniqueInput>>('UserWhereUniqueInput').implement({
  fields: UserWhereUniqueInputFields,
});

export const UserOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  username: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":UserCountOrderByAggregateInput}),
  _max: t.field({"required":false,"type":UserMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":UserMinOrderByAggregateInput}),
});
export const UserOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithAggregationInput>>('UserOrderByWithAggregationInput').implement({
  fields: UserOrderByWithAggregationInputFields,
});

export const UserScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  username: t.field({"required":false,"type":StringWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  email: t.field({"required":false,"type":StringWithAggregatesFilter}),
});
export const UserScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereWithAggregatesInput>>('UserScalarWhereWithAggregatesInput').implement({
  fields: UserScalarWhereWithAggregatesInputFields,
});

export const RecipeWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RecipeWhereInput]}),
  OR: t.field({"required":false,"type":[RecipeWhereInput]}),
  NOT: t.field({"required":false,"type":[RecipeWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  slug: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringFilter}),
  authorId: t.field({"required":false,"type":StringFilter}),
  author: t.field({"required":false,"type":UserWhereInput}),
});
export const RecipeWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeWhereInput>>('RecipeWhereInput').implement({
  fields: RecipeWhereInputFields,
});

export const RecipeOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  authorId: t.field({"required":false,"type":SortOrder}),
  author: t.field({"required":false,"type":UserOrderByWithRelationInput}),
});
export const RecipeOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeOrderByWithRelationInput>>('RecipeOrderByWithRelationInput').implement({
  fields: RecipeOrderByWithRelationInputFields,
});

export const RecipeWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
});
export const RecipeWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeWhereUniqueInput>>('RecipeWhereUniqueInput').implement({
  fields: RecipeWhereUniqueInputFields,
});

export const RecipeOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  authorId: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":RecipeCountOrderByAggregateInput}),
  _max: t.field({"required":false,"type":RecipeMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":RecipeMinOrderByAggregateInput}),
});
export const RecipeOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeOrderByWithAggregationInput>>('RecipeOrderByWithAggregationInput').implement({
  fields: RecipeOrderByWithAggregationInputFields,
});

export const RecipeScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RecipeScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[RecipeScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[RecipeScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  slug: t.field({"required":false,"type":StringWithAggregatesFilter}),
  description: t.field({"required":false,"type":StringWithAggregatesFilter}),
  authorId: t.field({"required":false,"type":StringWithAggregatesFilter}),
});
export const RecipeScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeScalarWhereWithAggregatesInput>>('RecipeScalarWhereWithAggregatesInput').implement({
  fields: RecipeScalarWhereWithAggregatesInputFields,
});

export const UserCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  username: t.string({"required":true}),
  name: t.string({"required":true}),
  email: t.string({"required":true}),
  recipes: t.field({"required":false,"type":RecipeCreateNestedManyWithoutAuthorInput}),
});
export const UserCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateInput>>('UserCreateInput').implement({
  fields: UserCreateInputFields,
});

export const UserUpdateInputFields = (t: any) => ({
  username: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  recipes: t.field({"required":false,"type":RecipeUpdateManyWithoutAuthorNestedInput}),
});
export const UserUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateInput>>('UserUpdateInput').implement({
  fields: UserUpdateInputFields,
});

export const UserCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  username: t.string({"required":true}),
  name: t.string({"required":true}),
  email: t.string({"required":true}),
});
export const UserCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyInput>>('UserCreateManyInput').implement({
  fields: UserCreateManyInputFields,
});

export const UserUpdateManyMutationInputFields = (t: any) => ({
  username: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const UserUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyMutationInput>>('UserUpdateManyMutationInput').implement({
  fields: UserUpdateManyMutationInputFields,
});

export const RecipeCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  slug: t.string({"required":true}),
  description: t.string({"required":true}),
  author: t.field({"required":true,"type":UserCreateNestedOneWithoutRecipesInput}),
});
export const RecipeCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCreateInput>>('RecipeCreateInput').implement({
  fields: RecipeCreateInputFields,
});

export const RecipeUpdateInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  author: t.field({"required":false,"type":UserUpdateOneRequiredWithoutRecipesNestedInput}),
});
export const RecipeUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeUpdateInput>>('RecipeUpdateInput').implement({
  fields: RecipeUpdateInputFields,
});

export const RecipeCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  slug: t.string({"required":true}),
  description: t.string({"required":true}),
  authorId: t.string({"required":true}),
});
export const RecipeCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCreateManyInput>>('RecipeCreateManyInput').implement({
  fields: RecipeCreateManyInputFields,
});

export const RecipeUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const RecipeUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeUpdateManyMutationInput>>('RecipeUpdateManyMutationInput').implement({
  fields: RecipeUpdateManyMutationInputFields,
});

export const StringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>>('StringFilter').implement({
  fields: StringFilterFields,
});

export const RecipeListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":RecipeWhereInput}),
  some: t.field({"required":false,"type":RecipeWhereInput}),
  none: t.field({"required":false,"type":RecipeWhereInput}),
});
export const RecipeListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeListRelationFilter>>('RecipeListRelationFilter').implement({
  fields: RecipeListRelationFilterFields,
});

export const RecipeOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const RecipeOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeOrderByRelationAggregateInput>>('RecipeOrderByRelationAggregateInput').implement({
  fields: RecipeOrderByRelationAggregateInputFields,
});

export const UserCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  username: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
});
export const UserCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCountOrderByAggregateInput>>('UserCountOrderByAggregateInput').implement({
  fields: UserCountOrderByAggregateInputFields,
});

export const UserMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  username: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
});
export const UserMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserMaxOrderByAggregateInput>>('UserMaxOrderByAggregateInput').implement({
  fields: UserMaxOrderByAggregateInputFields,
});

export const UserMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  username: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
});
export const UserMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserMinOrderByAggregateInput>>('UserMinOrderByAggregateInput').implement({
  fields: UserMinOrderByAggregateInputFields,
});

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>>('StringWithAggregatesFilter').implement({
  fields: StringWithAggregatesFilterFields,
});

export const UserRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":UserWhereInput}),
  isNot: t.field({"required":false,"type":UserWhereInput}),
});
export const UserRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRelationFilter>>('UserRelationFilter').implement({
  fields: UserRelationFilterFields,
});

export const RecipeCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  authorId: t.field({"required":false,"type":SortOrder}),
});
export const RecipeCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCountOrderByAggregateInput>>('RecipeCountOrderByAggregateInput').implement({
  fields: RecipeCountOrderByAggregateInputFields,
});

export const RecipeMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  authorId: t.field({"required":false,"type":SortOrder}),
});
export const RecipeMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeMaxOrderByAggregateInput>>('RecipeMaxOrderByAggregateInput').implement({
  fields: RecipeMaxOrderByAggregateInputFields,
});

export const RecipeMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  authorId: t.field({"required":false,"type":SortOrder}),
});
export const RecipeMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeMinOrderByAggregateInput>>('RecipeMinOrderByAggregateInput').implement({
  fields: RecipeMinOrderByAggregateInputFields,
});

export const RecipeCreateNestedManyWithoutAuthorInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RecipeCreateWithoutAuthorInput]}),
  connectOrCreate: t.field({"required":false,"type":[RecipeCreateOrConnectWithoutAuthorInput]}),
  createMany: t.field({"required":false,"type":RecipeCreateManyAuthorInputEnvelope}),
  connect: t.field({"required":false,"type":[RecipeWhereUniqueInput]}),
});
export const RecipeCreateNestedManyWithoutAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCreateNestedManyWithoutAuthorInput>>('RecipeCreateNestedManyWithoutAuthorInput').implement({
  fields: RecipeCreateNestedManyWithoutAuthorInputFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const RecipeUpdateManyWithoutAuthorNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RecipeCreateWithoutAuthorInput]}),
  connectOrCreate: t.field({"required":false,"type":[RecipeCreateOrConnectWithoutAuthorInput]}),
  upsert: t.field({"required":false,"type":[RecipeUpsertWithWhereUniqueWithoutAuthorInput]}),
  createMany: t.field({"required":false,"type":RecipeCreateManyAuthorInputEnvelope}),
  set: t.field({"required":false,"type":[RecipeWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[RecipeWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[RecipeWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[RecipeWhereUniqueInput]}),
  update: t.field({"required":false,"type":[RecipeUpdateWithWhereUniqueWithoutAuthorInput]}),
  updateMany: t.field({"required":false,"type":[RecipeUpdateManyWithWhereWithoutAuthorInput]}),
  deleteMany: t.field({"required":false,"type":[RecipeScalarWhereInput]}),
});
export const RecipeUpdateManyWithoutAuthorNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeUpdateManyWithoutAuthorNestedInput>>('RecipeUpdateManyWithoutAuthorNestedInput').implement({
  fields: RecipeUpdateManyWithoutAuthorNestedInputFields,
});

export const UserCreateNestedOneWithoutRecipesInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutRecipesInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutRecipesInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
});
export const UserCreateNestedOneWithoutRecipesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutRecipesInput>>('UserCreateNestedOneWithoutRecipesInput').implement({
  fields: UserCreateNestedOneWithoutRecipesInputFields,
});

export const UserUpdateOneRequiredWithoutRecipesNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutRecipesInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutRecipesInput}),
  upsert: t.field({"required":false,"type":UserUpsertWithoutRecipesInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  update: t.field({"required":false,"type":UserUpdateWithoutRecipesInput}),
});
export const UserUpdateOneRequiredWithoutRecipesNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput>>('UserUpdateOneRequiredWithoutRecipesNestedInput').implement({
  fields: UserUpdateOneRequiredWithoutRecipesNestedInputFields,
});

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>>('NestedStringFilter').implement({
  fields: NestedStringFilterFields,
});

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>>('NestedStringWithAggregatesFilter').implement({
  fields: NestedStringWithAggregatesFilterFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const RecipeCreateWithoutAuthorInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  slug: t.string({"required":true}),
  description: t.string({"required":true}),
});
export const RecipeCreateWithoutAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCreateWithoutAuthorInput>>('RecipeCreateWithoutAuthorInput').implement({
  fields: RecipeCreateWithoutAuthorInputFields,
});

export const RecipeCreateOrConnectWithoutAuthorInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RecipeWhereUniqueInput}),
  create: t.field({"required":true,"type":RecipeCreateWithoutAuthorInput}),
});
export const RecipeCreateOrConnectWithoutAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCreateOrConnectWithoutAuthorInput>>('RecipeCreateOrConnectWithoutAuthorInput').implement({
  fields: RecipeCreateOrConnectWithoutAuthorInputFields,
});

export const RecipeCreateManyAuthorInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[RecipeCreateManyAuthorInput]}),
});
export const RecipeCreateManyAuthorInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCreateManyAuthorInputEnvelope>>('RecipeCreateManyAuthorInputEnvelope').implement({
  fields: RecipeCreateManyAuthorInputEnvelopeFields,
});

export const RecipeUpsertWithWhereUniqueWithoutAuthorInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RecipeWhereUniqueInput}),
  update: t.field({"required":true,"type":RecipeUpdateWithoutAuthorInput}),
  create: t.field({"required":true,"type":RecipeCreateWithoutAuthorInput}),
});
export const RecipeUpsertWithWhereUniqueWithoutAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeUpsertWithWhereUniqueWithoutAuthorInput>>('RecipeUpsertWithWhereUniqueWithoutAuthorInput').implement({
  fields: RecipeUpsertWithWhereUniqueWithoutAuthorInputFields,
});

export const RecipeUpdateWithWhereUniqueWithoutAuthorInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RecipeWhereUniqueInput}),
  data: t.field({"required":true,"type":RecipeUpdateWithoutAuthorInput}),
});
export const RecipeUpdateWithWhereUniqueWithoutAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeUpdateWithWhereUniqueWithoutAuthorInput>>('RecipeUpdateWithWhereUniqueWithoutAuthorInput').implement({
  fields: RecipeUpdateWithWhereUniqueWithoutAuthorInputFields,
});

export const RecipeUpdateManyWithWhereWithoutAuthorInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RecipeScalarWhereInput}),
  data: t.field({"required":true,"type":RecipeUpdateManyMutationInput}),
});
export const RecipeUpdateManyWithWhereWithoutAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeUpdateManyWithWhereWithoutAuthorInput>>('RecipeUpdateManyWithWhereWithoutAuthorInput').implement({
  fields: RecipeUpdateManyWithWhereWithoutAuthorInputFields,
});

export const RecipeScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RecipeScalarWhereInput]}),
  OR: t.field({"required":false,"type":[RecipeScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[RecipeScalarWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  slug: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringFilter}),
  authorId: t.field({"required":false,"type":StringFilter}),
});
export const RecipeScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeScalarWhereInput>>('RecipeScalarWhereInput').implement({
  fields: RecipeScalarWhereInputFields,
});

export const UserCreateWithoutRecipesInputFields = (t: any) => ({
  id: t.string({"required":false}),
  username: t.string({"required":true}),
  name: t.string({"required":true}),
  email: t.string({"required":true}),
});
export const UserCreateWithoutRecipesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutRecipesInput>>('UserCreateWithoutRecipesInput').implement({
  fields: UserCreateWithoutRecipesInputFields,
});

export const UserCreateOrConnectWithoutRecipesInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRecipesInput}),
});
export const UserCreateOrConnectWithoutRecipesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutRecipesInput>>('UserCreateOrConnectWithoutRecipesInput').implement({
  fields: UserCreateOrConnectWithoutRecipesInputFields,
});

export const UserUpsertWithoutRecipesInputFields = (t: any) => ({
  update: t.field({"required":true,"type":UserUpdateWithoutRecipesInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRecipesInput}),
});
export const UserUpsertWithoutRecipesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutRecipesInput>>('UserUpsertWithoutRecipesInput').implement({
  fields: UserUpsertWithoutRecipesInputFields,
});

export const UserUpdateWithoutRecipesInputFields = (t: any) => ({
  username: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const UserUpdateWithoutRecipesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutRecipesInput>>('UserUpdateWithoutRecipesInput').implement({
  fields: UserUpdateWithoutRecipesInputFields,
});

export const RecipeCreateManyAuthorInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  slug: t.string({"required":true}),
  description: t.string({"required":true}),
});
export const RecipeCreateManyAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeCreateManyAuthorInput>>('RecipeCreateManyAuthorInput').implement({
  fields: RecipeCreateManyAuthorInputFields,
});

export const RecipeUpdateWithoutAuthorInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const RecipeUpdateWithoutAuthorInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RecipeUpdateWithoutAuthorInput>>('RecipeUpdateWithoutAuthorInput').implement({
  fields: RecipeUpdateWithoutAuthorInputFields,
});