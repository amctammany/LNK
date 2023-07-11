import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Batch payloads from prisma. */
export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** Prisma Batch Payload */
  count: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyRecipe: Array<Recipe>;
  createManyUser: Array<User>;
  createOneRecipe: Recipe;
  createOneUser: User;
  deleteManyRecipe?: Maybe<BatchPayload>;
  deleteManyUser?: Maybe<BatchPayload>;
  deleteOneRecipe?: Maybe<Recipe>;
  deleteOneUser?: Maybe<User>;
  updateManyRecipe: BatchPayload;
  updateManyUser: BatchPayload;
  updateOneRecipe?: Maybe<Recipe>;
  updateOneUser?: Maybe<User>;
  upsertOneRecipe: Recipe;
  upsertOneUser: User;
};


export type MutationCreateManyRecipeArgs = {
  data: Array<RecipeCreateInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateOneRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyRecipeArgs = {
  where: RecipeWhereInput;
};


export type MutationDeleteManyUserArgs = {
  where: UserWhereInput;
};


export type MutationDeleteOneRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyRecipeArgs = {
  data: RecipeUpdateManyMutationInput;
  where?: InputMaybe<RecipeWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneRecipeArgs = {
  create: RecipeCreateInput;
  update: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  countRecipe: Scalars['Int']['output'];
  countUser: Scalars['Int']['output'];
  findFirstRecipe?: Maybe<Recipe>;
  findFirstUser?: Maybe<User>;
  findManyRecipe: Array<Recipe>;
  findManyUser: Array<User>;
  findUniqueRecipe?: Maybe<Recipe>;
  findUniqueUser?: Maybe<User>;
};


export type QueryCountRecipeArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryCountUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstRecipeArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyRecipeArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export const enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
};

export type Recipe = {
  __typename?: 'Recipe';
  author: User;
  authorId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type RecipeCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type RecipeCreateInput = {
  author: UserCreateNestedOneWithoutRecipesInput;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type RecipeCreateManyAuthorInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type RecipeCreateManyAuthorInputEnvelope = {
  data: Array<RecipeCreateManyAuthorInput>;
};

export type RecipeCreateManyInput = {
  authorId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type RecipeCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<RecipeCreateManyAuthorInputEnvelope>;
};

export type RecipeCreateOrConnectWithoutAuthorInput = {
  create: RecipeCreateWithoutAuthorInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateWithoutAuthorInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type RecipeListRelationFilter = {
  every?: InputMaybe<RecipeWhereInput>;
  none?: InputMaybe<RecipeWhereInput>;
  some?: InputMaybe<RecipeWhereInput>;
};

export type RecipeMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type RecipeMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type RecipeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeOrderByWithAggregationInput = {
  _count?: InputMaybe<RecipeCountOrderByAggregateInput>;
  _max?: InputMaybe<RecipeMaxOrderByAggregateInput>;
  _min?: InputMaybe<RecipeMinOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type RecipeOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export const enum RecipeScalarFieldEnum {
  AuthorId = 'authorId',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Slug = 'slug'
};

export type RecipeScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type RecipeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
};

export type RecipeUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutRecipesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipeUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipeUpdateManyWithWhereWithoutAuthorInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<RecipeCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type RecipeUpdateWithWhereUniqueWithoutAuthorInput = {
  data: RecipeUpdateWithoutAuthorInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithoutAuthorInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipeUpsertWithWhereUniqueWithoutAuthorInput = {
  create: RecipeCreateWithoutAuthorInput;
  update: RecipeUpdateWithoutAuthorInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeWhereInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  authorId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type RecipeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export const enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  recipes: Array<Recipe>;
  username: Scalars['String']['output'];
};


export type UserRecipesArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAuthorInput>;
  username: Scalars['String']['input'];
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutRecipesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRecipesInput>;
  create?: InputMaybe<UserCreateWithoutRecipesInput>;
};

export type UserCreateOrConnectWithoutRecipesInput = {
  create: UserCreateWithoutRecipesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutRecipesInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recipes?: InputMaybe<RecipeOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export const enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Username = 'username'
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAuthorNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRecipesInput>;
  create?: InputMaybe<UserCreateWithoutRecipesInput>;
  update?: InputMaybe<UserUpdateWithoutRecipesInput>;
  upsert?: InputMaybe<UserUpsertWithoutRecipesInput>;
};

export type UserUpdateWithoutRecipesInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutRecipesInput = {
  create: UserCreateWithoutRecipesInput;
  update: UserUpdateWithoutRecipesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Recipe: ResolverTypeWrapper<Recipe>;
  RecipeCountOrderByAggregateInput: RecipeCountOrderByAggregateInput;
  RecipeCreateInput: RecipeCreateInput;
  RecipeCreateManyAuthorInput: RecipeCreateManyAuthorInput;
  RecipeCreateManyAuthorInputEnvelope: RecipeCreateManyAuthorInputEnvelope;
  RecipeCreateManyInput: RecipeCreateManyInput;
  RecipeCreateNestedManyWithoutAuthorInput: RecipeCreateNestedManyWithoutAuthorInput;
  RecipeCreateOrConnectWithoutAuthorInput: RecipeCreateOrConnectWithoutAuthorInput;
  RecipeCreateWithoutAuthorInput: RecipeCreateWithoutAuthorInput;
  RecipeListRelationFilter: RecipeListRelationFilter;
  RecipeMaxOrderByAggregateInput: RecipeMaxOrderByAggregateInput;
  RecipeMinOrderByAggregateInput: RecipeMinOrderByAggregateInput;
  RecipeOrderByRelationAggregateInput: RecipeOrderByRelationAggregateInput;
  RecipeOrderByWithAggregationInput: RecipeOrderByWithAggregationInput;
  RecipeOrderByWithRelationInput: RecipeOrderByWithRelationInput;
  RecipeScalarFieldEnum: RecipeScalarFieldEnum;
  RecipeScalarWhereInput: RecipeScalarWhereInput;
  RecipeScalarWhereWithAggregatesInput: RecipeScalarWhereWithAggregatesInput;
  RecipeUpdateInput: RecipeUpdateInput;
  RecipeUpdateManyMutationInput: RecipeUpdateManyMutationInput;
  RecipeUpdateManyWithWhereWithoutAuthorInput: RecipeUpdateManyWithWhereWithoutAuthorInput;
  RecipeUpdateManyWithoutAuthorNestedInput: RecipeUpdateManyWithoutAuthorNestedInput;
  RecipeUpdateWithWhereUniqueWithoutAuthorInput: RecipeUpdateWithWhereUniqueWithoutAuthorInput;
  RecipeUpdateWithoutAuthorInput: RecipeUpdateWithoutAuthorInput;
  RecipeUpsertWithWhereUniqueWithoutAuthorInput: RecipeUpsertWithWhereUniqueWithoutAuthorInput;
  RecipeWhereInput: RecipeWhereInput;
  RecipeWhereUniqueInput: RecipeWhereUniqueInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: ResolverTypeWrapper<User>;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutRecipesInput: UserCreateNestedOneWithoutRecipesInput;
  UserCreateOrConnectWithoutRecipesInput: UserCreateOrConnectWithoutRecipesInput;
  UserCreateWithoutRecipesInput: UserCreateWithoutRecipesInput;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateOneRequiredWithoutRecipesNestedInput: UserUpdateOneRequiredWithoutRecipesNestedInput;
  UserUpdateWithoutRecipesInput: UserUpdateWithoutRecipesInput;
  UserUpsertWithoutRecipesInput: UserUpsertWithoutRecipesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BatchPayload: BatchPayload;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: {};
  Recipe: Recipe;
  RecipeCountOrderByAggregateInput: RecipeCountOrderByAggregateInput;
  RecipeCreateInput: RecipeCreateInput;
  RecipeCreateManyAuthorInput: RecipeCreateManyAuthorInput;
  RecipeCreateManyAuthorInputEnvelope: RecipeCreateManyAuthorInputEnvelope;
  RecipeCreateManyInput: RecipeCreateManyInput;
  RecipeCreateNestedManyWithoutAuthorInput: RecipeCreateNestedManyWithoutAuthorInput;
  RecipeCreateOrConnectWithoutAuthorInput: RecipeCreateOrConnectWithoutAuthorInput;
  RecipeCreateWithoutAuthorInput: RecipeCreateWithoutAuthorInput;
  RecipeListRelationFilter: RecipeListRelationFilter;
  RecipeMaxOrderByAggregateInput: RecipeMaxOrderByAggregateInput;
  RecipeMinOrderByAggregateInput: RecipeMinOrderByAggregateInput;
  RecipeOrderByRelationAggregateInput: RecipeOrderByRelationAggregateInput;
  RecipeOrderByWithAggregationInput: RecipeOrderByWithAggregationInput;
  RecipeOrderByWithRelationInput: RecipeOrderByWithRelationInput;
  RecipeScalarWhereInput: RecipeScalarWhereInput;
  RecipeScalarWhereWithAggregatesInput: RecipeScalarWhereWithAggregatesInput;
  RecipeUpdateInput: RecipeUpdateInput;
  RecipeUpdateManyMutationInput: RecipeUpdateManyMutationInput;
  RecipeUpdateManyWithWhereWithoutAuthorInput: RecipeUpdateManyWithWhereWithoutAuthorInput;
  RecipeUpdateManyWithoutAuthorNestedInput: RecipeUpdateManyWithoutAuthorNestedInput;
  RecipeUpdateWithWhereUniqueWithoutAuthorInput: RecipeUpdateWithWhereUniqueWithoutAuthorInput;
  RecipeUpdateWithoutAuthorInput: RecipeUpdateWithoutAuthorInput;
  RecipeUpsertWithWhereUniqueWithoutAuthorInput: RecipeUpsertWithWhereUniqueWithoutAuthorInput;
  RecipeWhereInput: RecipeWhereInput;
  RecipeWhereUniqueInput: RecipeWhereUniqueInput;
  String: Scalars['String']['output'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: User;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutRecipesInput: UserCreateNestedOneWithoutRecipesInput;
  UserCreateOrConnectWithoutRecipesInput: UserCreateOrConnectWithoutRecipesInput;
  UserCreateWithoutRecipesInput: UserCreateWithoutRecipesInput;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateOneRequiredWithoutRecipesNestedInput: UserUpdateOneRequiredWithoutRecipesNestedInput;
  UserUpdateWithoutRecipesInput: UserUpdateWithoutRecipesInput;
  UserUpsertWithoutRecipesInput: UserUpsertWithoutRecipesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
}>;

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createManyRecipe?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationCreateManyRecipeArgs, 'data'>>;
  createManyUser?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateManyUserArgs, 'data'>>;
  createOneRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationCreateOneRecipeArgs, 'data'>>;
  createOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateOneUserArgs, 'data'>>;
  deleteManyRecipe?: Resolver<Maybe<ResolversTypes['BatchPayload']>, ParentType, ContextType, RequireFields<MutationDeleteManyRecipeArgs, 'where'>>;
  deleteManyUser?: Resolver<Maybe<ResolversTypes['BatchPayload']>, ParentType, ContextType, RequireFields<MutationDeleteManyUserArgs, 'where'>>;
  deleteOneRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationDeleteOneRecipeArgs, 'where'>>;
  deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
  updateManyRecipe?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyRecipeArgs, 'data'>>;
  updateManyUser?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyUserArgs, 'data'>>;
  updateOneRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationUpdateOneRecipeArgs, 'data' | 'where'>>;
  updateOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'data' | 'where'>>;
  upsertOneRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationUpsertOneRecipeArgs, 'create' | 'update' | 'where'>>;
  upsertOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpsertOneUserArgs, 'create' | 'update' | 'where'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  countRecipe?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountRecipeArgs>>;
  countUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountUserArgs>>;
  findFirstRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<QueryFindFirstRecipeArgs>>;
  findFirstUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryFindFirstUserArgs>>;
  findManyRecipe?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<QueryFindManyRecipeArgs>>;
  findManyUser?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryFindManyUserArgs>>;
  findUniqueRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryFindUniqueRecipeArgs, 'where'>>;
  findUniqueUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFindUniqueUserArgs, 'where'>>;
}>;

export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipes?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<UserRecipesArgs>>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

