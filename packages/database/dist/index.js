"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  schema: () => schema_default
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("@prisma/client"), module.exports);
var import_plugin_prisma3 = require("@pothos/plugin-prisma");

// src/graphql/schema.ts
var import_core2 = require("@pothos/core");
var import_plugin_prisma2 = require("@pothos/plugin-prisma");

// src/graphql/builder.ts
var import_core = __toESM(require("@pothos/core"));
var import_plugin_prisma = __toESM(require("@pothos/plugin-prisma"));

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma2;
if (process.env.NODE_ENV === "production") {
  prisma2 = new import_client.PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new import_client.PrismaClient();
  }
  prisma2 = global.prisma;
}
var db = new import_client.PrismaClient({
  // log: ['error', 'info', 'query', 'warn'],
});

// src/graphql/builder.ts
var builder = new import_core.default({
  plugins: [import_plugin_prisma.default],
  prisma: {
    client: db
  }
});

// src/graphql/__generated__/utils.ts
var defineQuery = (q) => q;
var defineQueryFunction = (func) => func;
var defineQueryObject = (obj) => obj;
var defineQueryPrismaObject = (def) => def;
var defineMutation = (m) => m;
var defineMutationFunction = (func) => func;
var defineMutationObject = (obj) => obj;
var defineMutationPrismaObject = (obj) => obj;
var defineExposeObject = (_, obj) => obj;
var definePrismaObject = (_, obj) => obj;

// src/graphql/__generated__/User/object.base.ts
var UserObject = definePrismaObject("User", {
  description: void 0,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID("id", UserIdFieldObject),
    username: t.exposeString("username", UserUsernameFieldObject),
    name: t.exposeString("name", UserNameFieldObject),
    email: t.exposeString("email", UserEmailFieldObject)
  })
});
var UserIdFieldObject = defineExposeObject("String", {
  description: void 0,
  nullable: false
});
var UserUsernameFieldObject = defineExposeObject("String", {
  description: void 0,
  nullable: false
});
var UserNameFieldObject = defineExposeObject("String", {
  description: void 0,
  nullable: false
});
var UserEmailFieldObject = defineExposeObject("String", {
  description: void 0,
  nullable: false
});

// src/graphql/__generated__/inputs.ts
var UserScalarFieldEnum = builder.enumType("UserScalarFieldEnum", {
  values: ["id", "username", "name", "email"]
});
var SortOrder = builder.enumType("SortOrder", {
  values: ["asc", "desc"]
});
var QueryMode = builder.enumType("QueryMode", {
  values: ["default", "insensitive"]
});
var UserWhereInputFields = (t) => ({
  AND: t.field({ "required": false, "type": [UserWhereInput] }),
  OR: t.field({ "required": false, "type": [UserWhereInput] }),
  NOT: t.field({ "required": false, "type": [UserWhereInput] }),
  id: t.field({ "required": false, "type": StringFilter }),
  username: t.field({ "required": false, "type": StringFilter }),
  name: t.field({ "required": false, "type": StringFilter }),
  email: t.field({ "required": false, "type": StringFilter })
});
var UserWhereInput = builder.inputRef("UserWhereInput").implement({
  fields: UserWhereInputFields
});
var UserOrderByWithRelationInputFields = (t) => ({
  id: t.field({ "required": false, "type": SortOrder }),
  username: t.field({ "required": false, "type": SortOrder }),
  name: t.field({ "required": false, "type": SortOrder }),
  email: t.field({ "required": false, "type": SortOrder })
});
var UserOrderByWithRelationInput = builder.inputRef("UserOrderByWithRelationInput").implement({
  fields: UserOrderByWithRelationInputFields
});
var UserWhereUniqueInputFields = (t) => ({
  id: t.string({ "required": false }),
  username: t.string({ "required": false })
});
var UserWhereUniqueInput = builder.inputRef("UserWhereUniqueInput").implement({
  fields: UserWhereUniqueInputFields
});
var UserOrderByWithAggregationInputFields = (t) => ({
  id: t.field({ "required": false, "type": SortOrder }),
  username: t.field({ "required": false, "type": SortOrder }),
  name: t.field({ "required": false, "type": SortOrder }),
  email: t.field({ "required": false, "type": SortOrder }),
  _count: t.field({ "required": false, "type": UserCountOrderByAggregateInput }),
  _max: t.field({ "required": false, "type": UserMaxOrderByAggregateInput }),
  _min: t.field({ "required": false, "type": UserMinOrderByAggregateInput })
});
var UserOrderByWithAggregationInput = builder.inputRef("UserOrderByWithAggregationInput").implement({
  fields: UserOrderByWithAggregationInputFields
});
var UserScalarWhereWithAggregatesInputFields = (t) => ({
  AND: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
  OR: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
  NOT: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
  id: t.field({ "required": false, "type": StringWithAggregatesFilter }),
  username: t.field({ "required": false, "type": StringWithAggregatesFilter }),
  name: t.field({ "required": false, "type": StringWithAggregatesFilter }),
  email: t.field({ "required": false, "type": StringWithAggregatesFilter })
});
var UserScalarWhereWithAggregatesInput = builder.inputRef("UserScalarWhereWithAggregatesInput").implement({
  fields: UserScalarWhereWithAggregatesInputFields
});
var UserCreateInputFields = (t) => ({
  id: t.string({ "required": false }),
  username: t.string({ "required": true }),
  name: t.string({ "required": true }),
  email: t.string({ "required": true })
});
var UserCreateInput = builder.inputRef("UserCreateInput").implement({
  fields: UserCreateInputFields
});
var UserUpdateInputFields = (t) => ({
  username: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
  name: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
  email: t.field({ "required": false, "type": StringFieldUpdateOperationsInput })
});
var UserUpdateInput = builder.inputRef("UserUpdateInput").implement({
  fields: UserUpdateInputFields
});
var UserCreateManyInputFields = (t) => ({
  id: t.string({ "required": false }),
  username: t.string({ "required": true }),
  name: t.string({ "required": true }),
  email: t.string({ "required": true })
});
var UserCreateManyInput = builder.inputRef("UserCreateManyInput").implement({
  fields: UserCreateManyInputFields
});
var UserUpdateManyMutationInputFields = (t) => ({
  username: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
  name: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
  email: t.field({ "required": false, "type": StringFieldUpdateOperationsInput })
});
var UserUpdateManyMutationInput = builder.inputRef("UserUpdateManyMutationInput").implement({
  fields: UserUpdateManyMutationInputFields
});
var StringFilterFields = (t) => ({
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
  not: t.field({ "required": false, "type": NestedStringFilter })
});
var StringFilter = builder.inputRef("StringFilter").implement({
  fields: StringFilterFields
});
var UserCountOrderByAggregateInputFields = (t) => ({
  id: t.field({ "required": false, "type": SortOrder }),
  username: t.field({ "required": false, "type": SortOrder }),
  name: t.field({ "required": false, "type": SortOrder }),
  email: t.field({ "required": false, "type": SortOrder })
});
var UserCountOrderByAggregateInput = builder.inputRef("UserCountOrderByAggregateInput").implement({
  fields: UserCountOrderByAggregateInputFields
});
var UserMaxOrderByAggregateInputFields = (t) => ({
  id: t.field({ "required": false, "type": SortOrder }),
  username: t.field({ "required": false, "type": SortOrder }),
  name: t.field({ "required": false, "type": SortOrder }),
  email: t.field({ "required": false, "type": SortOrder })
});
var UserMaxOrderByAggregateInput = builder.inputRef("UserMaxOrderByAggregateInput").implement({
  fields: UserMaxOrderByAggregateInputFields
});
var UserMinOrderByAggregateInputFields = (t) => ({
  id: t.field({ "required": false, "type": SortOrder }),
  username: t.field({ "required": false, "type": SortOrder }),
  name: t.field({ "required": false, "type": SortOrder }),
  email: t.field({ "required": false, "type": SortOrder })
});
var UserMinOrderByAggregateInput = builder.inputRef("UserMinOrderByAggregateInput").implement({
  fields: UserMinOrderByAggregateInputFields
});
var StringWithAggregatesFilterFields = (t) => ({
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
  _max: t.field({ "required": false, "type": NestedStringFilter })
});
var StringWithAggregatesFilter = builder.inputRef("StringWithAggregatesFilter").implement({
  fields: StringWithAggregatesFilterFields
});
var StringFieldUpdateOperationsInputFields = (t) => ({
  set: t.string({ "required": false })
});
var StringFieldUpdateOperationsInput = builder.inputRef("StringFieldUpdateOperationsInput").implement({
  fields: StringFieldUpdateOperationsInputFields
});
var NestedStringFilterFields = (t) => ({
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
  not: t.field({ "required": false, "type": NestedStringFilter })
});
var NestedStringFilter = builder.inputRef("NestedStringFilter").implement({
  fields: NestedStringFilterFields
});
var NestedStringWithAggregatesFilterFields = (t) => ({
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
  _max: t.field({ "required": false, "type": NestedStringFilter })
});
var NestedStringWithAggregatesFilter = builder.inputRef("NestedStringWithAggregatesFilter").implement({
  fields: NestedStringWithAggregatesFilterFields
});
var NestedIntFilterFields = (t) => ({
  equals: t.int({ "required": false }),
  in: t.intList({ "required": false }),
  notIn: t.intList({ "required": false }),
  lt: t.int({ "required": false }),
  lte: t.int({ "required": false }),
  gt: t.int({ "required": false }),
  gte: t.int({ "required": false }),
  not: t.field({ "required": false, "type": NestedIntFilter })
});
var NestedIntFilter = builder.inputRef("NestedIntFilter").implement({
  fields: NestedIntFilterFields
});

// src/graphql/__generated__/User/mutations/createMany.base.ts
var createManyUserMutationObject = defineMutationFunction(
  (t) => defineMutationPrismaObject({
    type: ["User"],
    nullable: false,
    args: { data: t.arg({ type: [UserCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) => await prisma.$transaction(args.data.map((data) => prisma.user.create({ data })))
  })
);
var createManyUserMutation = defineMutation((t) => ({
  createManyUser: t.prismaField(createManyUserMutationObject(t))
}));

// src/graphql/__generated__/User/mutations/createOne.base.ts
var createOneUserMutationObject = defineMutationFunction(
  (t) => defineMutationPrismaObject({
    type: "User",
    nullable: false,
    args: { data: t.arg({ type: UserCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) => await prisma.user.create({ data: args.data, ...query })
  })
);
var createOneUserMutation = defineMutation((t) => ({
  createOneUser: t.prismaField(createOneUserMutationObject(t))
}));

// src/graphql/__generated__/objects.ts
var BatchPayload = builder.objectType(builder.objectRef("BatchPayload"), {
  description: "Batch payloads from prisma.",
  fields: (t) => ({
    count: t.exposeInt("count", { description: "Prisma Batch Payload", nullable: false })
  })
});

// src/graphql/__generated__/User/mutations/deleteMany.base.ts
var deleteManyUserMutationObject = defineMutationFunction(
  (t) => defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: UserWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) => await prisma.user.deleteMany({ where: args.where })
  })
);
var deleteManyUserMutation = defineMutation((t) => ({
  deleteManyUser: t.field(deleteManyUserMutationObject(t))
}));

// src/graphql/__generated__/User/mutations/deleteOne.base.ts
var deleteOneUserMutationObject = defineMutationFunction(
  (t) => defineMutationPrismaObject({
    type: "User",
    nullable: true,
    args: { where: t.arg({ type: UserWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) => await prisma.user.delete({ where: args.where, ...query })
  })
);
var deleteOneUserMutation = defineMutation((t) => ({
  deleteOneUser: t.prismaField(deleteOneUserMutationObject(t))
}));

// src/graphql/__generated__/User/mutations/updateMany.base.ts
var updateManyUserMutationObject = defineMutationFunction(
  (t) => defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: UserWhereInput, required: false }),
      data: t.arg({ type: UserUpdateManyMutationInput, required: true })
    },
    resolve: async (_root, args, _context, _info) => await prisma.user.updateMany({ where: args.where || void 0, data: args.data })
  })
);
var updateManyUserMutation = defineMutation((t) => ({
  updateManyUser: t.field(updateManyUserMutationObject(t))
}));

// src/graphql/__generated__/User/mutations/updateOne.base.ts
var updateOneUserMutationObject = defineMutationFunction(
  (t) => defineMutationPrismaObject({
    type: "User",
    nullable: true,
    args: {
      where: t.arg({ type: UserWhereUniqueInput, required: true }),
      data: t.arg({ type: UserUpdateInput, required: true })
    },
    resolve: async (query, _root, args, _context, _info) => await prisma.user.update({ where: args.where, data: args.data, ...query })
  })
);
var updateOneUserMutation = defineMutation((t) => ({
  updateOneUser: t.prismaField(updateOneUserMutationObject(t))
}));

// src/graphql/__generated__/User/mutations/upsertOne.base.ts
var upsertOneUserMutationObject = defineMutationFunction(
  (t) => defineMutationPrismaObject({
    type: "User",
    nullable: false,
    args: {
      where: t.arg({ type: UserWhereUniqueInput, required: true }),
      create: t.arg({ type: UserCreateInput, required: true }),
      update: t.arg({ type: UserUpdateInput, required: true })
    },
    resolve: async (query, _root, args, _context, _info) => await prisma.user.upsert({
      where: args.where,
      create: args.create,
      update: args.update,
      ...query
    })
  })
);
var upsertOneUserMutation = defineMutation((t) => ({
  upsertOneUser: t.prismaField(upsertOneUserMutationObject(t))
}));

// src/graphql/__generated__/User/queries/findFirst.base.ts
var findFirstUserQueryObject = defineQueryFunction(
  (t) => defineQueryPrismaObject({
    type: "User",
    nullable: true,
    args: {
      where: t.arg({ type: UserWhereInput, required: false }),
      orderBy: t.arg({ type: [UserOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: UserWhereUniqueInput, required: false }),
      take: t.arg({ type: "Int", required: false }),
      skip: t.arg({ type: "Int", required: false }),
      distinct: t.arg({ type: [UserScalarFieldEnum], required: false })
    },
    resolve: async (query, _root, args, _context, _info) => await prisma.user.findFirst({
      where: args.where || void 0,
      cursor: args.cursor || void 0,
      take: args.take || void 0,
      distinct: args.distinct || void 0,
      skip: args.skip || void 0,
      orderBy: args.orderBy || void 0,
      ...query
    })
  })
);
var findFirstUserQuery = defineQuery((t) => ({
  findFirstUser: t.prismaField(findFirstUserQueryObject(t))
}));

// src/graphql/__generated__/User/queries/findMany.base.ts
var findManyUserQueryObject = defineQueryFunction(
  (t) => defineQueryPrismaObject({
    type: ["User"],
    nullable: false,
    args: {
      where: t.arg({ type: UserWhereInput, required: false }),
      orderBy: t.arg({ type: [UserOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: UserWhereUniqueInput, required: false }),
      take: t.arg({ type: "Int", required: false }),
      skip: t.arg({ type: "Int", required: false }),
      distinct: t.arg({ type: [UserScalarFieldEnum], required: false })
    },
    resolve: async (query, _root, args, _context, _info) => await prisma.user.findMany({
      where: args.where || void 0,
      cursor: args.cursor || void 0,
      take: args.take || void 0,
      distinct: args.distinct || void 0,
      skip: args.skip || void 0,
      orderBy: args.orderBy || void 0,
      ...query
    })
  })
);
var findManyUserQuery = defineQuery((t) => ({
  findManyUser: t.prismaField(findManyUserQueryObject(t))
}));

// src/graphql/__generated__/User/queries/count.base.ts
var countUserQueryObject = defineQueryFunction(
  (t) => defineQueryObject({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UserWhereInput, required: false }),
      orderBy: t.arg({ type: [UserOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: UserWhereUniqueInput, required: false }),
      take: t.arg({ type: "Int", required: false }),
      skip: t.arg({ type: "Int", required: false }),
      distinct: t.arg({ type: [UserScalarFieldEnum], required: false })
    },
    resolve: async (_root, args, _context, _info) => await prisma.user.count({
      where: args.where || void 0,
      cursor: args.cursor || void 0,
      take: args.take || void 0,
      distinct: args.distinct || void 0,
      skip: args.skip || void 0,
      orderBy: args.orderBy || void 0
    })
  })
);
var countUserQuery = defineQuery((t) => ({
  countUser: t.field(countUserQueryObject(t))
}));

// src/graphql/__generated__/User/queries/findUnique.base.ts
var findUniqueUserQueryObject = defineQueryFunction(
  (t) => defineQueryPrismaObject({
    type: "User",
    nullable: true,
    args: { where: t.arg({ type: UserWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) => await prisma.user.findUnique({ where: args.where, ...query })
  })
);
var findUniqueUserQuery = defineQuery((t) => ({
  findUniqueUser: t.prismaField(findUniqueUserQueryObject(t))
}));

// src/graphql/__generated__/autocrud.ts
var Cruds = {
  User: {
    Object: UserObject,
    queries: {
      findFirst: findFirstUserQueryObject,
      findMany: findManyUserQueryObject,
      count: countUserQueryObject,
      findUnique: findUniqueUserQueryObject
    },
    mutations: {
      createMany: createManyUserMutationObject,
      createOne: createOneUserMutationObject,
      deleteMany: deleteManyUserMutationObject,
      deleteOne: deleteOneUserMutationObject,
      updateMany: updateManyUserMutationObject,
      updateOne: updateOneUserMutationObject,
      upsertOne: upsertOneUserMutationObject
    }
  }
};
var crudEntries = Object.entries(Cruds);
function generateResolversByType(type, opts) {
  return crudEntries.filter(([modelName]) => includeModel(modelName, opts)).map(([modelName, config]) => {
    const resolverEntries = Object.entries(config[type === "Query" ? "queries" : "mutations"]);
    return resolverEntries.map(([operationName, resolverObjectDefiner]) => {
      const resolverName = operationName + modelName;
      const isntPrismaFieldList = ["count", "deleteMany", "updateMany"];
      const isPrismaField = !isntPrismaFieldList.includes(operationName);
      const getFields = (t) => {
        const field = resolverObjectDefiner(t);
        const handledField = opts?.handleResolver ? opts.handleResolver({
          field,
          modelName,
          operationName,
          resolverName,
          t,
          isPrismaField,
          type
        }) : field;
        return {
          [resolverName]: isPrismaField ? t.prismaField(handledField) : t.field(handledField)
        };
      };
      return type === "Query" ? builder.queryFields((t) => getFields(t)) : builder.mutationFields((t) => getFields(t));
    });
  });
}
function generateAllObjects(opts) {
  return crudEntries.filter(([md]) => includeModel(md, opts)).map(([modelName, { Object: Object2 }]) => {
    return builder.prismaObject(modelName, Object2);
  });
}
function generateAllQueries(opts) {
  generateResolversByType("Query", opts);
}
function generateAllMutations(opts) {
  generateResolversByType("Mutation", opts);
}
var includeModel = (model, opts) => {
  if (!opts)
    return true;
  if (opts.include)
    return opts.include.includes(model);
  if (opts.exclude)
    return !opts.exclude.includes(model);
  return true;
};
function generateAllCrud(opts) {
  generateAllObjects(opts);
  generateAllQueries(opts);
  generateAllMutations(opts);
}

// src/graphql/schema.ts
generateAllCrud();
builder.queryType({});
builder.mutationType({});
var schema = builder.toSchema();
var schema_default = schema;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema,
  ...require("@prisma/client")
});
//# sourceMappingURL=index.js.map