import { Prisma } from '@prisma/client';
export { UserObject, UserIdFieldObject, UserUsernameFieldObject, UserNameFieldObject, UserEmailFieldObject, createManyUserMutation, createOneUserMutation, deleteManyUserMutation, deleteOneUserMutation, updateManyUserMutation, updateOneUserMutation, upsertOneUserMutation, createManyUserMutationObject, createOneUserMutationObject, deleteManyUserMutationObject, deleteOneUserMutationObject, updateManyUserMutationObject, updateOneUserMutationObject, upsertOneUserMutationObject, findFirstUserQuery, findManyUserQuery, countUserQuery, findUniqueUserQuery, findFirstUserQueryObject, findManyUserQueryObject, countUserQueryObject, findUniqueUserQueryObject } from './User';
export declare const BatchPayload: import("@pothos/core/dts/refs/object").default<Prisma.BatchPayload, Prisma.BatchPayload>;
export declare const modelNames: readonly ["User"];
export type Model = typeof modelNames[number];
