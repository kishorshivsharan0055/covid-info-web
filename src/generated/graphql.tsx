import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  posts: Array<Post>;
  post?: Maybe<Beds>;
  checkMe?: Maybe<Userss>;
  getBeds: Array<Beds>;
  getPlasma: Array<Plasma>;
  getPlasmaById?: Maybe<Plasma>;
  getRATCenter: Array<RatCenter>;
  getRATCenterById?: Maybe<RatCenter>;
  getTiffin: Array<Tiffin>;
  getTiffinById?: Maybe<Tiffin>;
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};


export type QueryGetPlasmaByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetRatCenterByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetTiffinByIdArgs = {
  id: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
};

export type Beds = {
  __typename?: 'Beds';
  id: Scalars['Float'];
  hosp_Name: Scalars['String'];
  phone_no: Scalars['String'];
  address: Scalars['String'];
  location: Scalars['String'];
  with_oxygen: Scalars['Float'];
  without_oxygen: Scalars['Float'];
  icu: Scalars['Float'];
  icu_ventilator: Scalars['Float'];
  with_oxygen_left: Scalars['Float'];
  without_oxygen_left: Scalars['Float'];
  icu_left: Scalars['Float'];
  icu_ventilator_left: Scalars['Float'];
};

export type Userss = {
  __typename?: 'Userss';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type Plasma = {
  __typename?: 'Plasma';
  id: Scalars['Float'];
  hosp_Name: Scalars['String'];
  phone_no: Scalars['String'];
  mail_id: Scalars['String'];
  location: Scalars['String'];
  address: Scalars['String'];
};

export type RatCenter = {
  __typename?: 'RATCenter';
  id: Scalars['Float'];
  hosp_Name: Scalars['String'];
  location: Scalars['String'];
  address: Scalars['String'];
};

export type Tiffin = {
  __typename?: 'Tiffin';
  id: Scalars['Float'];
  provider_name: Scalars['String'];
  phone_no: Scalars['String'];
  address: Scalars['String'];
  price: Scalars['String'];
  delivery: Scalars['String'];
  food: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  updatePost?: Maybe<Post>;
  deletePost: Scalars['Boolean'];
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createBeds: Beds;
  updateBeds?: Maybe<Beds>;
  deleteBeds: Scalars['Boolean'];
  createPlasma: Plasma;
  updatePlasma?: Maybe<Plasma>;
  deletePlasma: Scalars['Boolean'];
  createRATCenter: RatCenter;
  updateRATCenter?: Maybe<RatCenter>;
  deleteRATCenter: Scalars['Boolean'];
  createTiffin: Tiffin;
  updateTiffin?: Maybe<Tiffin>;
  deleteTiffin: Scalars['Boolean'];
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCreateBedsArgs = {
  data: BedsInput;
};


export type MutationUpdateBedsArgs = {
  hosp_name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteBedsArgs = {
  id: Scalars['Float'];
};


export type MutationCreatePlasmaArgs = {
  data: PlasmaInput;
};


export type MutationUpdatePlasmaArgs = {
  hosp_name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeletePlasmaArgs = {
  id: Scalars['Float'];
};


export type MutationCreateRatCenterArgs = {
  data: RatCenterInput;
};


export type MutationUpdateRatCenterArgs = {
  location?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteRatCenterArgs = {
  id: Scalars['Float'];
};


export type MutationCreateTiffinArgs = {
  data: TiffinInput;
};


export type MutationUpdateTiffinArgs = {
  provider_name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteTiffinArgs = {
  id: Scalars['Float'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<Userss>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type BedsInput = {
  hosp_Name: Scalars['String'];
  phone_no: Scalars['String'];
  address: Scalars['String'];
  location: Scalars['String'];
  with_oxygen: Scalars['Float'];
  without_oxygen: Scalars['Float'];
  icu: Scalars['Float'];
  icu_ventilator: Scalars['Float'];
  with_oxygen_left: Scalars['Float'];
  without_oxygen_left: Scalars['Float'];
  icu_left: Scalars['Float'];
  icu_ventilator_left: Scalars['Float'];
};

export type PlasmaInput = {
  hosp_Name: Scalars['String'];
  phone_no: Scalars['String'];
  mail_id: Scalars['String'];
  location: Scalars['String'];
  address: Scalars['String'];
};

export type RatCenterInput = {
  hosp_Name: Scalars['String'];
  location: Scalars['String'];
  address: Scalars['String'];
};

export type TiffinInput = {
  provider_name: Scalars['String'];
  phone_no: Scalars['String'];
  address: Scalars['String'];
  price: Scalars['String'];
  delivery: Scalars['String'];
  food: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'Userss' }
  & Pick<Userss, 'id' | 'username' | 'createdAt'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'Userss' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type GetBedsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBedsQuery = (
  { __typename?: 'Query' }
  & { getBeds: Array<(
    { __typename?: 'Beds' }
    & Pick<Beds, 'id' | 'hosp_Name' | 'phone_no' | 'address' | 'with_oxygen' | 'without_oxygen' | 'icu' | 'icu_ventilator' | 'with_oxygen_left' | 'without_oxygen_left' | 'icu_left' | 'icu_ventilator_left' | 'location'>
  )> }
);

export type GetPlasmaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlasmaQuery = (
  { __typename?: 'Query' }
  & { getPlasma: Array<(
    { __typename?: 'Plasma' }
    & Pick<Plasma, 'id' | 'hosp_Name' | 'phone_no' | 'mail_id' | 'location' | 'address'>
  )> }
);

export type GetRatCentersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRatCentersQuery = (
  { __typename?: 'Query' }
  & { getRATCenter: Array<(
    { __typename?: 'RATCenter' }
    & Pick<RatCenter, 'id' | 'hosp_Name' | 'location' | 'address'>
  )> }
);

export type GetTiffinQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTiffinQuery = (
  { __typename?: 'Query' }
  & { getTiffin: Array<(
    { __typename?: 'Tiffin' }
    & Pick<Tiffin, 'id' | 'provider_name' | 'phone_no' | 'address' | 'price' | 'delivery' | 'food'>
  )> }
);

export type CheckMeQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckMeQuery = (
  { __typename?: 'Query' }
  & { checkMe?: Maybe<(
    { __typename?: 'Userss' }
    & RegularUserFragment
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title'>
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on Userss {
  id
  username
  createdAt
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetBedsDocument = gql`
    query getBeds {
  getBeds {
    id
    hosp_Name
    phone_no
    address
    with_oxygen
    without_oxygen
    icu
    icu_ventilator
    with_oxygen_left
    without_oxygen_left
    icu_left
    icu_ventilator_left
    location
  }
}
    `;

export function useGetBedsQuery(options: Omit<Urql.UseQueryArgs<GetBedsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetBedsQuery>({ query: GetBedsDocument, ...options });
};
export const GetPlasmaDocument = gql`
    query getPlasma {
  getPlasma {
    id
    hosp_Name
    phone_no
    mail_id
    location
    address
  }
}
    `;

export function useGetPlasmaQuery(options: Omit<Urql.UseQueryArgs<GetPlasmaQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlasmaQuery>({ query: GetPlasmaDocument, ...options });
};
export const GetRatCentersDocument = gql`
    query getRATCenters {
  getRATCenter {
    id
    hosp_Name
    location
    address
  }
}
    `;

export function useGetRatCentersQuery(options: Omit<Urql.UseQueryArgs<GetRatCentersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRatCentersQuery>({ query: GetRatCentersDocument, ...options });
};
export const GetTiffinDocument = gql`
    query getTiffin {
  getTiffin {
    id
    provider_name
    phone_no
    address
    price
    delivery
    food
  }
}
    `;

export function useGetTiffinQuery(options: Omit<Urql.UseQueryArgs<GetTiffinQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTiffinQuery>({ query: GetTiffinDocument, ...options });
};
export const CheckMeDocument = gql`
    query CheckMe {
  checkMe {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useCheckMeQuery(options: Omit<Urql.UseQueryArgs<CheckMeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CheckMeQuery>({ query: CheckMeDocument, ...options });
};
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    createdAt
    updatedAt
    title
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};