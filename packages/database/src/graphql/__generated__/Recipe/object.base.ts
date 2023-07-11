import * as Inputs from '@/graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const RecipeObject = definePrismaObject('Recipe', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', RecipeIdFieldObject),
    name: t.exposeString('name', RecipeNameFieldObject),
    slug: t.exposeString('slug', RecipeSlugFieldObject),
    description: t.exposeString('description', RecipeDescriptionFieldObject),
    authorId: t.exposeString('authorId', RecipeAuthorIdFieldObject),
    author: t.relation('author', RecipeAuthorFieldObject),
  }),
});

export const RecipeIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const RecipeNameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const RecipeSlugFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const RecipeDescriptionFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const RecipeAuthorIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const RecipeAuthorFieldObject = defineRelationObject('Recipe', 'author', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
