import { builder } from '@/graphql/builder';
export var UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
    values: ["id", "username", "name", "email"],
});
export var SortOrder = builder.enumType('SortOrder', {
    values: ["asc", "desc"],
});
export var QueryMode = builder.enumType('QueryMode', {
    values: ["default", "insensitive"],
});
export var UserWhereInputFields = function (t) { return ({
    AND: t.field({ "required": false, "type": [UserWhereInput] }),
    OR: t.field({ "required": false, "type": [UserWhereInput] }),
    NOT: t.field({ "required": false, "type": [UserWhereInput] }),
    id: t.field({ "required": false, "type": StringFilter }),
    username: t.field({ "required": false, "type": StringFilter }),
    name: t.field({ "required": false, "type": StringFilter }),
    email: t.field({ "required": false, "type": StringFilter }),
}); };
export var UserWhereInput = builder.inputRef('UserWhereInput').implement({
    fields: UserWhereInputFields,
});
export var UserOrderByWithRelationInputFields = function (t) { return ({
    id: t.field({ "required": false, "type": SortOrder }),
    username: t.field({ "required": false, "type": SortOrder }),
    name: t.field({ "required": false, "type": SortOrder }),
    email: t.field({ "required": false, "type": SortOrder }),
}); };
export var UserOrderByWithRelationInput = builder.inputRef('UserOrderByWithRelationInput').implement({
    fields: UserOrderByWithRelationInputFields,
});
export var UserWhereUniqueInputFields = function (t) { return ({
    id: t.string({ "required": false }),
    username: t.string({ "required": false }),
}); };
export var UserWhereUniqueInput = builder.inputRef('UserWhereUniqueInput').implement({
    fields: UserWhereUniqueInputFields,
});
export var UserOrderByWithAggregationInputFields = function (t) { return ({
    id: t.field({ "required": false, "type": SortOrder }),
    username: t.field({ "required": false, "type": SortOrder }),
    name: t.field({ "required": false, "type": SortOrder }),
    email: t.field({ "required": false, "type": SortOrder }),
    _count: t.field({ "required": false, "type": UserCountOrderByAggregateInput }),
    _max: t.field({ "required": false, "type": UserMaxOrderByAggregateInput }),
    _min: t.field({ "required": false, "type": UserMinOrderByAggregateInput }),
}); };
export var UserOrderByWithAggregationInput = builder.inputRef('UserOrderByWithAggregationInput').implement({
    fields: UserOrderByWithAggregationInputFields,
});
export var UserScalarWhereWithAggregatesInputFields = function (t) { return ({
    AND: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
    OR: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
    NOT: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
    id: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    username: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    name: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    email: t.field({ "required": false, "type": StringWithAggregatesFilter }),
}); };
export var UserScalarWhereWithAggregatesInput = builder.inputRef('UserScalarWhereWithAggregatesInput').implement({
    fields: UserScalarWhereWithAggregatesInputFields,
});
export var UserCreateInputFields = function (t) { return ({
    id: t.string({ "required": false }),
    username: t.string({ "required": true }),
    name: t.string({ "required": true }),
    email: t.string({ "required": true }),
}); };
export var UserCreateInput = builder.inputRef('UserCreateInput').implement({
    fields: UserCreateInputFields,
});
export var UserUpdateInputFields = function (t) { return ({
    username: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    name: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    email: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
}); };
export var UserUpdateInput = builder.inputRef('UserUpdateInput').implement({
    fields: UserUpdateInputFields,
});
export var UserCreateManyInputFields = function (t) { return ({
    id: t.string({ "required": false }),
    username: t.string({ "required": true }),
    name: t.string({ "required": true }),
    email: t.string({ "required": true }),
}); };
export var UserCreateManyInput = builder.inputRef('UserCreateManyInput').implement({
    fields: UserCreateManyInputFields,
});
export var UserUpdateManyMutationInputFields = function (t) { return ({
    username: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    name: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    email: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
}); };
export var UserUpdateManyMutationInput = builder.inputRef('UserUpdateManyMutationInput').implement({
    fields: UserUpdateManyMutationInputFields,
});
export var StringFilterFields = function (t) { return ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    mode: t.field({ "required": false, "type": QueryMode }),
    not: t.field({ "required": false, "type": NestedStringFilter }),
}); };
export var StringFilter = builder.inputRef('StringFilter').implement({
    fields: StringFilterFields,
});
export var UserCountOrderByAggregateInputFields = function (t) { return ({
    id: t.field({ "required": false, "type": SortOrder }),
    username: t.field({ "required": false, "type": SortOrder }),
    name: t.field({ "required": false, "type": SortOrder }),
    email: t.field({ "required": false, "type": SortOrder }),
}); };
export var UserCountOrderByAggregateInput = builder.inputRef('UserCountOrderByAggregateInput').implement({
    fields: UserCountOrderByAggregateInputFields,
});
export var UserMaxOrderByAggregateInputFields = function (t) { return ({
    id: t.field({ "required": false, "type": SortOrder }),
    username: t.field({ "required": false, "type": SortOrder }),
    name: t.field({ "required": false, "type": SortOrder }),
    email: t.field({ "required": false, "type": SortOrder }),
}); };
export var UserMaxOrderByAggregateInput = builder.inputRef('UserMaxOrderByAggregateInput').implement({
    fields: UserMaxOrderByAggregateInputFields,
});
export var UserMinOrderByAggregateInputFields = function (t) { return ({
    id: t.field({ "required": false, "type": SortOrder }),
    username: t.field({ "required": false, "type": SortOrder }),
    name: t.field({ "required": false, "type": SortOrder }),
    email: t.field({ "required": false, "type": SortOrder }),
}); };
export var UserMinOrderByAggregateInput = builder.inputRef('UserMinOrderByAggregateInput').implement({
    fields: UserMinOrderByAggregateInputFields,
});
export var StringWithAggregatesFilterFields = function (t) { return ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    mode: t.field({ "required": false, "type": QueryMode }),
    not: t.field({ "required": false, "type": NestedStringWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedStringFilter }),
    _max: t.field({ "required": false, "type": NestedStringFilter }),
}); };
export var StringWithAggregatesFilter = builder.inputRef('StringWithAggregatesFilter').implement({
    fields: StringWithAggregatesFilterFields,
});
export var StringFieldUpdateOperationsInputFields = function (t) { return ({
    set: t.string({ "required": false }),
}); };
export var StringFieldUpdateOperationsInput = builder.inputRef('StringFieldUpdateOperationsInput').implement({
    fields: StringFieldUpdateOperationsInputFields,
});
export var NestedStringFilterFields = function (t) { return ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    not: t.field({ "required": false, "type": NestedStringFilter }),
}); };
export var NestedStringFilter = builder.inputRef('NestedStringFilter').implement({
    fields: NestedStringFilterFields,
});
export var NestedStringWithAggregatesFilterFields = function (t) { return ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    not: t.field({ "required": false, "type": NestedStringWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedStringFilter }),
    _max: t.field({ "required": false, "type": NestedStringFilter }),
}); };
export var NestedStringWithAggregatesFilter = builder.inputRef('NestedStringWithAggregatesFilter').implement({
    fields: NestedStringWithAggregatesFilterFields,
});
export var NestedIntFilterFields = function (t) { return ({
    equals: t.int({ "required": false }),
    in: t.intList({ "required": false }),
    notIn: t.intList({ "required": false }),
    lt: t.int({ "required": false }),
    lte: t.int({ "required": false }),
    gt: t.int({ "required": false }),
    gte: t.int({ "required": false }),
    not: t.field({ "required": false, "type": NestedIntFilter }),
}); };
export var NestedIntFilter = builder.inputRef('NestedIntFilter').implement({
    fields: NestedIntFilterFields,
});
