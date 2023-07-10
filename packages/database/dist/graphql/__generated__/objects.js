import { builder } from '@/graphql/builder';
export { UserObject, UserIdFieldObject, UserUsernameFieldObject, UserNameFieldObject, UserEmailFieldObject, createManyUserMutation, createOneUserMutation, deleteManyUserMutation, deleteOneUserMutation, updateManyUserMutation, updateOneUserMutation, upsertOneUserMutation, createManyUserMutationObject, createOneUserMutationObject, deleteManyUserMutationObject, deleteOneUserMutationObject, updateManyUserMutationObject, updateOneUserMutationObject, upsertOneUserMutationObject, findFirstUserQuery, findManyUserQuery, countUserQuery, findUniqueUserQuery, findFirstUserQueryObject, findManyUserQueryObject, countUserQueryObject, findUniqueUserQueryObject } from './User';
export var BatchPayload = builder.objectType(builder.objectRef('BatchPayload'), {
    description: 'Batch payloads from prisma.',
    fields: function (t) { return ({
        count: t.exposeInt('count', { description: 'Prisma Batch Payload', nullable: false }),
    }); },
});
export var modelNames = [
    'User',
];
