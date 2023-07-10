import * as Inputs from "@/graphql/__generated__/inputs";
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const UserObject = definePrismaObject("User", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID("id", UserIdFieldObject),
    username: t.exposeString("username", UserUsernameFieldObject),
    name: t.exposeString("name", UserNameFieldObject),
    email: t.exposeString("email", UserEmailFieldObject),
  }),
});

export const UserIdFieldObject = defineExposeObject("String", {
  description: undefined,
  nullable: false,
});

export const UserUsernameFieldObject = defineExposeObject("String", {
  description: undefined,
  nullable: false,
});

export const UserNameFieldObject = defineExposeObject("String", {
  description: undefined,
  nullable: false,
});

export const UserEmailFieldObject = defineExposeObject("String", {
  description: undefined,
  nullable: false,
});
