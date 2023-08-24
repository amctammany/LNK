import * as Inputs from '@/graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const UserObject = definePrismaObject('User', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', UserIdFieldObject),
    username: t.exposeString('username', UserUsernameFieldObject),
    slug: t.exposeString('slug', UserSlugFieldObject),
    name: t.exposeString('name', UserNameFieldObject),
    email: t.exposeString('email', UserEmailFieldObject),
    recipes: t.relation('recipes', UserRecipesFieldObject(t)),
  }),
});

export const UserIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserUsernameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserSlugFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserNameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserEmailFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserRecipesFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'recipes', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.RecipeWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.RecipeOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.RecipeWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.RecipeScalarFieldEnum], required: false }),
    },
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);
