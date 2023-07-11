
import { builder } from '@/graphql/builder';
import { Prisma } from '@prisma/client';
export {
  UserObject,
  UserIdFieldObject,
  UserUsernameFieldObject,
  UserNameFieldObject,
  UserEmailFieldObject,
  UserRecipesFieldObject,
  createManyUserMutation,
  createOneUserMutation,
  deleteManyUserMutation,
  deleteOneUserMutation,
  updateManyUserMutation,
  updateOneUserMutation,
  upsertOneUserMutation,
  createManyUserMutationObject,
  createOneUserMutationObject,
  deleteManyUserMutationObject,
  deleteOneUserMutationObject,
  updateManyUserMutationObject,
  updateOneUserMutationObject,
  upsertOneUserMutationObject,
  findFirstUserQuery,
  findManyUserQuery,
  countUserQuery,
  findUniqueUserQuery,
  findFirstUserQueryObject,
  findManyUserQueryObject,
  countUserQueryObject,
  findUniqueUserQueryObject
} from './User';
export {
  RecipeObject,
  RecipeIdFieldObject,
  RecipeNameFieldObject,
  RecipeSlugFieldObject,
  RecipeDescriptionFieldObject,
  RecipeAuthorIdFieldObject,
  RecipeAuthorFieldObject,
  createManyRecipeMutation,
  createOneRecipeMutation,
  deleteManyRecipeMutation,
  deleteOneRecipeMutation,
  updateManyRecipeMutation,
  updateOneRecipeMutation,
  upsertOneRecipeMutation,
  createManyRecipeMutationObject,
  createOneRecipeMutationObject,
  deleteManyRecipeMutationObject,
  deleteOneRecipeMutationObject,
  updateManyRecipeMutationObject,
  updateOneRecipeMutationObject,
  upsertOneRecipeMutationObject,
  findFirstRecipeQuery,
  findManyRecipeQuery,
  countRecipeQuery,
  findUniqueRecipeQuery,
  findFirstRecipeQueryObject,
  findManyRecipeQueryObject,
  countRecipeQueryObject,
  findUniqueRecipeQueryObject
} from './Recipe';

export const BatchPayload = builder.objectType(builder.objectRef<Prisma.BatchPayload>('BatchPayload'), {
  description: 'Batch payloads from prisma.',
  fields: (t) => ({
    count: t.exposeInt('count', { description: 'Prisma Batch Payload', nullable: false }),
  }),
});

export const modelNames = [
  'User',
  'Recipe',
] as const;

export type Model = typeof modelNames[number];
