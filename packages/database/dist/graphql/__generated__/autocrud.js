import { builder } from '@/graphql/builder';
import * as User from './User';
export var Cruds = {
    User: {
        Object: User.UserObject,
        queries: {
            findFirst: User.findFirstUserQueryObject,
            findMany: User.findManyUserQueryObject,
            count: User.countUserQueryObject,
            findUnique: User.findUniqueUserQueryObject,
        },
        mutations: {
            createMany: User.createManyUserMutationObject,
            createOne: User.createOneUserMutationObject,
            deleteMany: User.deleteManyUserMutationObject,
            deleteOne: User.deleteOneUserMutationObject,
            updateMany: User.updateManyUserMutationObject,
            updateOne: User.updateOneUserMutationObject,
            upsertOne: User.upsertOneUserMutationObject,
        },
    },
};
var crudEntries = Object.entries(Cruds);
function generateResolversByType(type, opts) {
    return crudEntries
        .filter(function (_a) {
        var modelName = _a[0];
        return includeModel(modelName, opts);
    })
        .map(function (_a) {
        var modelName = _a[0], config = _a[1];
        var resolverEntries = Object.entries(config[type === "Query" ? "queries" : "mutations"]);
        return resolverEntries.map(function (_a) {
            var operationName = _a[0], resolverObjectDefiner = _a[1];
            var resolverName = operationName + modelName;
            var isntPrismaFieldList = ["count", "deleteMany", "updateMany"];
            var isPrismaField = !isntPrismaFieldList.includes(operationName);
            var getFields = function (t) {
                var _a;
                var field = resolverObjectDefiner(t);
                var handledField = (opts === null || opts === void 0 ? void 0 : opts.handleResolver)
                    ? opts.handleResolver({
                        field: field,
                        modelName: modelName,
                        operationName: operationName,
                        resolverName: resolverName,
                        t: t,
                        isPrismaField: isPrismaField,
                        type: type,
                    })
                    : field;
                return _a = {},
                    _a[resolverName] = isPrismaField
                        ? t.prismaField(handledField)
                        : t.field(handledField),
                    _a;
            };
            return type === "Query"
                ? builder.queryFields(function (t) { return getFields(t); })
                : builder.mutationFields(function (t) { return getFields(t); });
        });
    });
}
export function generateAllObjects(opts) {
    return crudEntries
        .filter(function (_a) {
        var md = _a[0];
        return includeModel(md, opts);
    })
        .map(function (_a) {
        var modelName = _a[0], Object = _a[1].Object;
        return builder.prismaObject(modelName, Object); // Objects is all imports
    });
}
export function generateAllQueries(opts) {
    generateResolversByType("Query", opts);
}
export function generateAllMutations(opts) {
    generateResolversByType("Mutation", opts);
}
export function generateAllResolvers(opts) {
    generateResolversByType("Mutation", opts);
    generateResolversByType("Query", opts);
}
var includeModel = function (model, opts) {
    if (!opts)
        return true;
    if (opts.include)
        return opts.include.includes(model);
    if (opts.exclude)
        return !opts.exclude.includes(model);
    return true;
};
export function generateAllCrud(opts) {
    generateAllObjects(opts);
    generateAllQueries(opts);
    generateAllMutations(opts);
}
