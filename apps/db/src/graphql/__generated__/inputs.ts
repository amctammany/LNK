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

export const HopScalarFieldEnum = builder.enumType('HopScalarFieldEnum', {
  values: ["id","name","slug","country","description","alpha","alphaLow","alphaHigh","beta","betaLow","betaHigh","caryophyllene","caryophylleneLow","caryophylleneHigh","cohumulone","cohumuloneLow","cohumuloneHigh","farnesene","farneseneLow","farneseneHigh","humulene","humuleneLow","humuleneHigh","myrcene","myrceneLow","myrceneHigh","totalOil","totalOilLow","totalOilHigh","purpose","flavor","notes","styles"] as const,
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

export const HopWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[HopWhereInput]}),
  OR: t.field({"required":false,"type":[HopWhereInput]}),
  NOT: t.field({"required":false,"type":[HopWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  slug: t.field({"required":false,"type":StringFilter}),
  country: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringFilter}),
  alpha: t.field({"required":false,"type":FloatFilter}),
  alphaLow: t.field({"required":false,"type":FloatFilter}),
  alphaHigh: t.field({"required":false,"type":FloatFilter}),
  beta: t.field({"required":false,"type":FloatFilter}),
  betaLow: t.field({"required":false,"type":FloatFilter}),
  betaHigh: t.field({"required":false,"type":FloatFilter}),
  caryophyllene: t.field({"required":false,"type":FloatFilter}),
  caryophylleneLow: t.field({"required":false,"type":FloatFilter}),
  caryophylleneHigh: t.field({"required":false,"type":FloatFilter}),
  cohumulone: t.field({"required":false,"type":FloatFilter}),
  cohumuloneLow: t.field({"required":false,"type":FloatFilter}),
  cohumuloneHigh: t.field({"required":false,"type":FloatFilter}),
  farnesene: t.field({"required":false,"type":FloatFilter}),
  farneseneLow: t.field({"required":false,"type":FloatFilter}),
  farneseneHigh: t.field({"required":false,"type":FloatFilter}),
  humulene: t.field({"required":false,"type":FloatFilter}),
  humuleneLow: t.field({"required":false,"type":FloatFilter}),
  humuleneHigh: t.field({"required":false,"type":FloatFilter}),
  myrcene: t.field({"required":false,"type":FloatFilter}),
  myrceneLow: t.field({"required":false,"type":FloatFilter}),
  myrceneHigh: t.field({"required":false,"type":FloatFilter}),
  totalOil: t.field({"required":false,"type":FloatFilter}),
  totalOilLow: t.field({"required":false,"type":FloatFilter}),
  totalOilHigh: t.field({"required":false,"type":FloatFilter}),
  purpose: t.field({"required":false,"type":StringFilter}),
  flavor: t.field({"required":false,"type":StringFilter}),
  notes: t.field({"required":false,"type":StringFilter}),
  styles: t.field({"required":false,"type":StringNullableListFilter}),
});
export const HopWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopWhereInput>>('HopWhereInput').implement({
  fields: HopWhereInputFields,
});

export const HopOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  country: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  alpha: t.field({"required":false,"type":SortOrder}),
  alphaLow: t.field({"required":false,"type":SortOrder}),
  alphaHigh: t.field({"required":false,"type":SortOrder}),
  beta: t.field({"required":false,"type":SortOrder}),
  betaLow: t.field({"required":false,"type":SortOrder}),
  betaHigh: t.field({"required":false,"type":SortOrder}),
  caryophyllene: t.field({"required":false,"type":SortOrder}),
  caryophylleneLow: t.field({"required":false,"type":SortOrder}),
  caryophylleneHigh: t.field({"required":false,"type":SortOrder}),
  cohumulone: t.field({"required":false,"type":SortOrder}),
  cohumuloneLow: t.field({"required":false,"type":SortOrder}),
  cohumuloneHigh: t.field({"required":false,"type":SortOrder}),
  farnesene: t.field({"required":false,"type":SortOrder}),
  farneseneLow: t.field({"required":false,"type":SortOrder}),
  farneseneHigh: t.field({"required":false,"type":SortOrder}),
  humulene: t.field({"required":false,"type":SortOrder}),
  humuleneLow: t.field({"required":false,"type":SortOrder}),
  humuleneHigh: t.field({"required":false,"type":SortOrder}),
  myrcene: t.field({"required":false,"type":SortOrder}),
  myrceneLow: t.field({"required":false,"type":SortOrder}),
  myrceneHigh: t.field({"required":false,"type":SortOrder}),
  totalOil: t.field({"required":false,"type":SortOrder}),
  totalOilLow: t.field({"required":false,"type":SortOrder}),
  totalOilHigh: t.field({"required":false,"type":SortOrder}),
  purpose: t.field({"required":false,"type":SortOrder}),
  flavor: t.field({"required":false,"type":SortOrder}),
  notes: t.field({"required":false,"type":SortOrder}),
  styles: t.field({"required":false,"type":SortOrder}),
});
export const HopOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopOrderByWithRelationInput>>('HopOrderByWithRelationInput').implement({
  fields: HopOrderByWithRelationInputFields,
});

export const HopWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
});
export const HopWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopWhereUniqueInput>>('HopWhereUniqueInput').implement({
  fields: HopWhereUniqueInputFields,
});

export const HopOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  country: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  alpha: t.field({"required":false,"type":SortOrder}),
  alphaLow: t.field({"required":false,"type":SortOrder}),
  alphaHigh: t.field({"required":false,"type":SortOrder}),
  beta: t.field({"required":false,"type":SortOrder}),
  betaLow: t.field({"required":false,"type":SortOrder}),
  betaHigh: t.field({"required":false,"type":SortOrder}),
  caryophyllene: t.field({"required":false,"type":SortOrder}),
  caryophylleneLow: t.field({"required":false,"type":SortOrder}),
  caryophylleneHigh: t.field({"required":false,"type":SortOrder}),
  cohumulone: t.field({"required":false,"type":SortOrder}),
  cohumuloneLow: t.field({"required":false,"type":SortOrder}),
  cohumuloneHigh: t.field({"required":false,"type":SortOrder}),
  farnesene: t.field({"required":false,"type":SortOrder}),
  farneseneLow: t.field({"required":false,"type":SortOrder}),
  farneseneHigh: t.field({"required":false,"type":SortOrder}),
  humulene: t.field({"required":false,"type":SortOrder}),
  humuleneLow: t.field({"required":false,"type":SortOrder}),
  humuleneHigh: t.field({"required":false,"type":SortOrder}),
  myrcene: t.field({"required":false,"type":SortOrder}),
  myrceneLow: t.field({"required":false,"type":SortOrder}),
  myrceneHigh: t.field({"required":false,"type":SortOrder}),
  totalOil: t.field({"required":false,"type":SortOrder}),
  totalOilLow: t.field({"required":false,"type":SortOrder}),
  totalOilHigh: t.field({"required":false,"type":SortOrder}),
  purpose: t.field({"required":false,"type":SortOrder}),
  flavor: t.field({"required":false,"type":SortOrder}),
  notes: t.field({"required":false,"type":SortOrder}),
  styles: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":HopCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":HopAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":HopMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":HopMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":HopSumOrderByAggregateInput}),
});
export const HopOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopOrderByWithAggregationInput>>('HopOrderByWithAggregationInput').implement({
  fields: HopOrderByWithAggregationInputFields,
});

export const HopScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[HopScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[HopScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[HopScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  slug: t.field({"required":false,"type":StringWithAggregatesFilter}),
  country: t.field({"required":false,"type":StringWithAggregatesFilter}),
  description: t.field({"required":false,"type":StringWithAggregatesFilter}),
  alpha: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  alphaLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  alphaHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  beta: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  betaLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  betaHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  caryophyllene: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  caryophylleneLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  caryophylleneHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  cohumulone: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  cohumuloneLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  cohumuloneHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  farnesene: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  farneseneLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  farneseneHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  humulene: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  humuleneLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  humuleneHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  myrcene: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  myrceneLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  myrceneHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  totalOil: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  totalOilLow: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  totalOilHigh: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  purpose: t.field({"required":false,"type":StringWithAggregatesFilter}),
  flavor: t.field({"required":false,"type":StringWithAggregatesFilter}),
  notes: t.field({"required":false,"type":StringWithAggregatesFilter}),
  styles: t.field({"required":false,"type":StringNullableListFilter}),
});
export const HopScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopScalarWhereWithAggregatesInput>>('HopScalarWhereWithAggregatesInput').implement({
  fields: HopScalarWhereWithAggregatesInputFields,
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

export const HopCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  slug: t.string({"required":true}),
  country: t.string({"required":true}),
  description: t.string({"required":true}),
  alpha: t.float({"required":true}),
  alphaLow: t.float({"required":true}),
  alphaHigh: t.float({"required":true}),
  beta: t.float({"required":true}),
  betaLow: t.float({"required":true}),
  betaHigh: t.float({"required":true}),
  caryophyllene: t.float({"required":true}),
  caryophylleneLow: t.float({"required":true}),
  caryophylleneHigh: t.float({"required":true}),
  cohumulone: t.float({"required":true}),
  cohumuloneLow: t.float({"required":true}),
  cohumuloneHigh: t.float({"required":true}),
  farnesene: t.float({"required":true}),
  farneseneLow: t.float({"required":true}),
  farneseneHigh: t.float({"required":true}),
  humulene: t.float({"required":true}),
  humuleneLow: t.float({"required":true}),
  humuleneHigh: t.float({"required":true}),
  myrcene: t.float({"required":true}),
  myrceneLow: t.float({"required":true}),
  myrceneHigh: t.float({"required":true}),
  totalOil: t.float({"required":true}),
  totalOilLow: t.float({"required":true}),
  totalOilHigh: t.float({"required":true}),
  purpose: t.string({"required":true}),
  flavor: t.string({"required":true}),
  notes: t.string({"required":true}),
  styles: t.stringList({"required":false}),
});
export const HopCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopCreateInput>>('HopCreateInput').implement({
  fields: HopCreateInputFields,
});

export const HopUpdateInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  country: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  alpha: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  alphaLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  alphaHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  beta: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  betaLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  betaHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  caryophyllene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  caryophylleneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  caryophylleneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  cohumulone: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  cohumuloneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  cohumuloneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  farnesene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  farneseneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  farneseneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  humulene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  humuleneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  humuleneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  myrcene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  myrceneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  myrceneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  totalOil: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  totalOilLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  totalOilHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  purpose: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  flavor: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  notes: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  styles: t.stringList({"required":false}),
});
export const HopUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopUpdateInput>>('HopUpdateInput').implement({
  fields: HopUpdateInputFields,
});

export const HopCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  slug: t.string({"required":true}),
  country: t.string({"required":true}),
  description: t.string({"required":true}),
  alpha: t.float({"required":true}),
  alphaLow: t.float({"required":true}),
  alphaHigh: t.float({"required":true}),
  beta: t.float({"required":true}),
  betaLow: t.float({"required":true}),
  betaHigh: t.float({"required":true}),
  caryophyllene: t.float({"required":true}),
  caryophylleneLow: t.float({"required":true}),
  caryophylleneHigh: t.float({"required":true}),
  cohumulone: t.float({"required":true}),
  cohumuloneLow: t.float({"required":true}),
  cohumuloneHigh: t.float({"required":true}),
  farnesene: t.float({"required":true}),
  farneseneLow: t.float({"required":true}),
  farneseneHigh: t.float({"required":true}),
  humulene: t.float({"required":true}),
  humuleneLow: t.float({"required":true}),
  humuleneHigh: t.float({"required":true}),
  myrcene: t.float({"required":true}),
  myrceneLow: t.float({"required":true}),
  myrceneHigh: t.float({"required":true}),
  totalOil: t.float({"required":true}),
  totalOilLow: t.float({"required":true}),
  totalOilHigh: t.float({"required":true}),
  purpose: t.string({"required":true}),
  flavor: t.string({"required":true}),
  notes: t.string({"required":true}),
  styles: t.stringList({"required":false}),
});
export const HopCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopCreateManyInput>>('HopCreateManyInput').implement({
  fields: HopCreateManyInputFields,
});

export const HopUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  country: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  alpha: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  alphaLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  alphaHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  beta: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  betaLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  betaHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  caryophyllene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  caryophylleneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  caryophylleneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  cohumulone: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  cohumuloneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  cohumuloneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  farnesene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  farneseneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  farneseneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  humulene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  humuleneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  humuleneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  myrcene: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  myrceneLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  myrceneHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  totalOil: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  totalOilLow: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  totalOilHigh: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  purpose: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  flavor: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  notes: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  styles: t.stringList({"required":false}),
});
export const HopUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopUpdateManyMutationInput>>('HopUpdateManyMutationInput').implement({
  fields: HopUpdateManyMutationInputFields,
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

export const FloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const FloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatFilter>>('FloatFilter').implement({
  fields: FloatFilterFields,
});

export const StringNullableListFilterFields = (t: any) => ({
  equals: t.stringList({"required":false}),
  has: t.string({"required":false}),
  hasEvery: t.stringList({"required":false}),
  hasSome: t.stringList({"required":false}),
  isEmpty: t.boolean({"required":false}),
});
export const StringNullableListFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableListFilter>>('StringNullableListFilter').implement({
  fields: StringNullableListFilterFields,
});

export const HopCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  country: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  alpha: t.field({"required":false,"type":SortOrder}),
  alphaLow: t.field({"required":false,"type":SortOrder}),
  alphaHigh: t.field({"required":false,"type":SortOrder}),
  beta: t.field({"required":false,"type":SortOrder}),
  betaLow: t.field({"required":false,"type":SortOrder}),
  betaHigh: t.field({"required":false,"type":SortOrder}),
  caryophyllene: t.field({"required":false,"type":SortOrder}),
  caryophylleneLow: t.field({"required":false,"type":SortOrder}),
  caryophylleneHigh: t.field({"required":false,"type":SortOrder}),
  cohumulone: t.field({"required":false,"type":SortOrder}),
  cohumuloneLow: t.field({"required":false,"type":SortOrder}),
  cohumuloneHigh: t.field({"required":false,"type":SortOrder}),
  farnesene: t.field({"required":false,"type":SortOrder}),
  farneseneLow: t.field({"required":false,"type":SortOrder}),
  farneseneHigh: t.field({"required":false,"type":SortOrder}),
  humulene: t.field({"required":false,"type":SortOrder}),
  humuleneLow: t.field({"required":false,"type":SortOrder}),
  humuleneHigh: t.field({"required":false,"type":SortOrder}),
  myrcene: t.field({"required":false,"type":SortOrder}),
  myrceneLow: t.field({"required":false,"type":SortOrder}),
  myrceneHigh: t.field({"required":false,"type":SortOrder}),
  totalOil: t.field({"required":false,"type":SortOrder}),
  totalOilLow: t.field({"required":false,"type":SortOrder}),
  totalOilHigh: t.field({"required":false,"type":SortOrder}),
  purpose: t.field({"required":false,"type":SortOrder}),
  flavor: t.field({"required":false,"type":SortOrder}),
  notes: t.field({"required":false,"type":SortOrder}),
  styles: t.field({"required":false,"type":SortOrder}),
});
export const HopCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopCountOrderByAggregateInput>>('HopCountOrderByAggregateInput').implement({
  fields: HopCountOrderByAggregateInputFields,
});

export const HopAvgOrderByAggregateInputFields = (t: any) => ({
  alpha: t.field({"required":false,"type":SortOrder}),
  alphaLow: t.field({"required":false,"type":SortOrder}),
  alphaHigh: t.field({"required":false,"type":SortOrder}),
  beta: t.field({"required":false,"type":SortOrder}),
  betaLow: t.field({"required":false,"type":SortOrder}),
  betaHigh: t.field({"required":false,"type":SortOrder}),
  caryophyllene: t.field({"required":false,"type":SortOrder}),
  caryophylleneLow: t.field({"required":false,"type":SortOrder}),
  caryophylleneHigh: t.field({"required":false,"type":SortOrder}),
  cohumulone: t.field({"required":false,"type":SortOrder}),
  cohumuloneLow: t.field({"required":false,"type":SortOrder}),
  cohumuloneHigh: t.field({"required":false,"type":SortOrder}),
  farnesene: t.field({"required":false,"type":SortOrder}),
  farneseneLow: t.field({"required":false,"type":SortOrder}),
  farneseneHigh: t.field({"required":false,"type":SortOrder}),
  humulene: t.field({"required":false,"type":SortOrder}),
  humuleneLow: t.field({"required":false,"type":SortOrder}),
  humuleneHigh: t.field({"required":false,"type":SortOrder}),
  myrcene: t.field({"required":false,"type":SortOrder}),
  myrceneLow: t.field({"required":false,"type":SortOrder}),
  myrceneHigh: t.field({"required":false,"type":SortOrder}),
  totalOil: t.field({"required":false,"type":SortOrder}),
  totalOilLow: t.field({"required":false,"type":SortOrder}),
  totalOilHigh: t.field({"required":false,"type":SortOrder}),
});
export const HopAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopAvgOrderByAggregateInput>>('HopAvgOrderByAggregateInput').implement({
  fields: HopAvgOrderByAggregateInputFields,
});

export const HopMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  country: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  alpha: t.field({"required":false,"type":SortOrder}),
  alphaLow: t.field({"required":false,"type":SortOrder}),
  alphaHigh: t.field({"required":false,"type":SortOrder}),
  beta: t.field({"required":false,"type":SortOrder}),
  betaLow: t.field({"required":false,"type":SortOrder}),
  betaHigh: t.field({"required":false,"type":SortOrder}),
  caryophyllene: t.field({"required":false,"type":SortOrder}),
  caryophylleneLow: t.field({"required":false,"type":SortOrder}),
  caryophylleneHigh: t.field({"required":false,"type":SortOrder}),
  cohumulone: t.field({"required":false,"type":SortOrder}),
  cohumuloneLow: t.field({"required":false,"type":SortOrder}),
  cohumuloneHigh: t.field({"required":false,"type":SortOrder}),
  farnesene: t.field({"required":false,"type":SortOrder}),
  farneseneLow: t.field({"required":false,"type":SortOrder}),
  farneseneHigh: t.field({"required":false,"type":SortOrder}),
  humulene: t.field({"required":false,"type":SortOrder}),
  humuleneLow: t.field({"required":false,"type":SortOrder}),
  humuleneHigh: t.field({"required":false,"type":SortOrder}),
  myrcene: t.field({"required":false,"type":SortOrder}),
  myrceneLow: t.field({"required":false,"type":SortOrder}),
  myrceneHigh: t.field({"required":false,"type":SortOrder}),
  totalOil: t.field({"required":false,"type":SortOrder}),
  totalOilLow: t.field({"required":false,"type":SortOrder}),
  totalOilHigh: t.field({"required":false,"type":SortOrder}),
  purpose: t.field({"required":false,"type":SortOrder}),
  flavor: t.field({"required":false,"type":SortOrder}),
  notes: t.field({"required":false,"type":SortOrder}),
});
export const HopMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopMaxOrderByAggregateInput>>('HopMaxOrderByAggregateInput').implement({
  fields: HopMaxOrderByAggregateInputFields,
});

export const HopMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  slug: t.field({"required":false,"type":SortOrder}),
  country: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  alpha: t.field({"required":false,"type":SortOrder}),
  alphaLow: t.field({"required":false,"type":SortOrder}),
  alphaHigh: t.field({"required":false,"type":SortOrder}),
  beta: t.field({"required":false,"type":SortOrder}),
  betaLow: t.field({"required":false,"type":SortOrder}),
  betaHigh: t.field({"required":false,"type":SortOrder}),
  caryophyllene: t.field({"required":false,"type":SortOrder}),
  caryophylleneLow: t.field({"required":false,"type":SortOrder}),
  caryophylleneHigh: t.field({"required":false,"type":SortOrder}),
  cohumulone: t.field({"required":false,"type":SortOrder}),
  cohumuloneLow: t.field({"required":false,"type":SortOrder}),
  cohumuloneHigh: t.field({"required":false,"type":SortOrder}),
  farnesene: t.field({"required":false,"type":SortOrder}),
  farneseneLow: t.field({"required":false,"type":SortOrder}),
  farneseneHigh: t.field({"required":false,"type":SortOrder}),
  humulene: t.field({"required":false,"type":SortOrder}),
  humuleneLow: t.field({"required":false,"type":SortOrder}),
  humuleneHigh: t.field({"required":false,"type":SortOrder}),
  myrcene: t.field({"required":false,"type":SortOrder}),
  myrceneLow: t.field({"required":false,"type":SortOrder}),
  myrceneHigh: t.field({"required":false,"type":SortOrder}),
  totalOil: t.field({"required":false,"type":SortOrder}),
  totalOilLow: t.field({"required":false,"type":SortOrder}),
  totalOilHigh: t.field({"required":false,"type":SortOrder}),
  purpose: t.field({"required":false,"type":SortOrder}),
  flavor: t.field({"required":false,"type":SortOrder}),
  notes: t.field({"required":false,"type":SortOrder}),
});
export const HopMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopMinOrderByAggregateInput>>('HopMinOrderByAggregateInput').implement({
  fields: HopMinOrderByAggregateInputFields,
});

export const HopSumOrderByAggregateInputFields = (t: any) => ({
  alpha: t.field({"required":false,"type":SortOrder}),
  alphaLow: t.field({"required":false,"type":SortOrder}),
  alphaHigh: t.field({"required":false,"type":SortOrder}),
  beta: t.field({"required":false,"type":SortOrder}),
  betaLow: t.field({"required":false,"type":SortOrder}),
  betaHigh: t.field({"required":false,"type":SortOrder}),
  caryophyllene: t.field({"required":false,"type":SortOrder}),
  caryophylleneLow: t.field({"required":false,"type":SortOrder}),
  caryophylleneHigh: t.field({"required":false,"type":SortOrder}),
  cohumulone: t.field({"required":false,"type":SortOrder}),
  cohumuloneLow: t.field({"required":false,"type":SortOrder}),
  cohumuloneHigh: t.field({"required":false,"type":SortOrder}),
  farnesene: t.field({"required":false,"type":SortOrder}),
  farneseneLow: t.field({"required":false,"type":SortOrder}),
  farneseneHigh: t.field({"required":false,"type":SortOrder}),
  humulene: t.field({"required":false,"type":SortOrder}),
  humuleneLow: t.field({"required":false,"type":SortOrder}),
  humuleneHigh: t.field({"required":false,"type":SortOrder}),
  myrcene: t.field({"required":false,"type":SortOrder}),
  myrceneLow: t.field({"required":false,"type":SortOrder}),
  myrceneHigh: t.field({"required":false,"type":SortOrder}),
  totalOil: t.field({"required":false,"type":SortOrder}),
  totalOilLow: t.field({"required":false,"type":SortOrder}),
  totalOilHigh: t.field({"required":false,"type":SortOrder}),
});
export const HopSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopSumOrderByAggregateInput>>('HopSumOrderByAggregateInput').implement({
  fields: HopSumOrderByAggregateInputFields,
});

export const FloatWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedFloatFilter}),
  _min: t.field({"required":false,"type":NestedFloatFilter}),
  _max: t.field({"required":false,"type":NestedFloatFilter}),
});
export const FloatWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatWithAggregatesFilter>>('FloatWithAggregatesFilter').implement({
  fields: FloatWithAggregatesFilterFields,
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

export const HopCreatestylesInputFields = (t: any) => ({
  set: t.stringList({"required":true}),
});
export const HopCreatestylesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopCreatestylesInput>>('HopCreatestylesInput').implement({
  fields: HopCreatestylesInputFields,
});

export const FloatFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.float({"required":false}),
  increment: t.float({"required":false}),
  decrement: t.float({"required":false}),
  multiply: t.float({"required":false}),
  divide: t.float({"required":false}),
});
export const FloatFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatFieldUpdateOperationsInput>>('FloatFieldUpdateOperationsInput').implement({
  fields: FloatFieldUpdateOperationsInputFields,
});

export const HopUpdatestylesInputFields = (t: any) => ({
  set: t.stringList({"required":false}),
  push: t.stringList({"required":false}),
});
export const HopUpdatestylesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HopUpdatestylesInput>>('HopUpdatestylesInput').implement({
  fields: HopUpdatestylesInputFields,
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

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>>('NestedFloatFilter').implement({
  fields: NestedFloatFilterFields,
});

export const NestedFloatWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedFloatFilter}),
  _min: t.field({"required":false,"type":NestedFloatFilter}),
  _max: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatWithAggregatesFilter>>('NestedFloatWithAggregatesFilter').implement({
  fields: NestedFloatWithAggregatesFilterFields,
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