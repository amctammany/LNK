import * as Objects from './objects';
type Model = Objects.Model;
export declare const Cruds: Record<Objects.Model, {
    Object: any;
    queries: Record<string, Function>;
    mutations: Record<string, Function>;
}>;
type ResolverType = "Query" | "Mutation";
export declare function generateAllObjects(opts?: CrudOptions): import("@pothos/plugin-prisma").PrismaObjectRef<import("@pothos/plugin-prisma").PrismaModelTypes & {
    Name: "User";
    Shape: import("@prisma/client/runtime").GetResult<{
        id: string;
        username: string;
        name: string;
        email: string;
    }, unknown> & {};
    Include: never;
    Select: import("@prisma/client").Prisma.UserSelect<import("@prisma/client/runtime").DefaultArgs>;
    OrderBy: import("@prisma/client").Prisma.UserOrderByWithRelationInput;
    WhereUnique: import("@prisma/client").Prisma.UserWhereUniqueInput;
    Where: import("@prisma/client").Prisma.UserWhereInput;
    Create: {};
    Update: {};
    RelationName: never;
    ListRelations: never;
    Relations: {};
}, {
    id: string;
    username: string;
    name: string;
    email: string;
}>[];
export declare function generateAllQueries(opts?: CrudOptions): void;
export declare function generateAllMutations(opts?: CrudOptions): void;
export declare function generateAllResolvers(opts?: CrudOptions): void;
type CrudOptions = {
    include?: Model[];
    exclude?: Model[];
    /**
     * Caution: This is not type safe
     * Wrap all queries/mutations to override args, run extra code in resolve function (ie: throw errors, logs), apply plugins, etc.
     */
    handleResolver?: (props: {
        modelName: Model;
        field: any;
        operationName: string;
        resolverName: string;
        t: any;
        isPrismaField: boolean;
        type: ResolverType;
    }) => any;
};
export declare function generateAllCrud(opts?: CrudOptions): void;
export {};
//# sourceMappingURL=autocrud.d.ts.map