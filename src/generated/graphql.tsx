import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  getBeds: Array<Beds>;
  post?: Maybe<Beds>;
  getPlasma: Array<Plasma>;
  getPlasmaById?: Maybe<Plasma>;
  getRATCenter: Array<RatCenter>;
  getRATCenterById?: Maybe<RatCenter>;
  getTiffin: Array<Tiffin>;
  getTiffinById?: Maybe<Tiffin>;
  me?: Maybe<Admin>;
};

export type QueryPostArgs = {
  id: Scalars["Float"];
};

export type QueryGetPlasmaByIdArgs = {
  id: Scalars["Float"];
};

export type QueryGetRatCenterByIdArgs = {
  id: Scalars["Float"];
};

export type QueryGetTiffinByIdArgs = {
  id: Scalars["Float"];
};

export type Beds = {
  __typename?: "Beds";
  id: Scalars["Float"];
  hosp_Name: Scalars["String"];
  phone_no: Scalars["String"];
  address: Scalars["String"];
  createdAt: Scalars["DateTime"];
  location: Scalars["String"];
  with_oxygen: Scalars["Float"];
  without_oxygen: Scalars["Float"];
  icu: Scalars["Float"];
  icu_ventilator: Scalars["Float"];
  with_oxygen_left: Scalars["Float"];
  without_oxygen_left: Scalars["Float"];
  icu_left: Scalars["Float"];
  icu_ventilator_left: Scalars["Float"];
};

export type Plasma = {
  __typename?: "Plasma";
  id: Scalars["Float"];
  hosp_Name: Scalars["String"];
  phone_no: Scalars["String"];
  mail_id: Scalars["String"];
  createdAt: Scalars["DateTime"];
  location: Scalars["String"];
  address: Scalars["String"];
  blood_grp: Array<Scalars["String"]>;
};

export type RatCenter = {
  __typename?: "RATCenter";
  id: Scalars["Float"];
  hosp_Name: Scalars["String"];
  location: Scalars["String"];
  address: Scalars["String"];
  createdAt: Scalars["String"];
};

export type Tiffin = {
  __typename?: "Tiffin";
  id: Scalars["Float"];
  provider_name: Scalars["String"];
  phone_no: Scalars["String"];
  address: Scalars["String"];
  price: Scalars["String"];
  delivery: Scalars["String"];
  food: Scalars["String"];
};

export type Admin = {
  __typename?: "Admin";
  id: Scalars["Float"];
  username: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBeds: Beds;
  updateBeds?: Maybe<Beds>;
  deleteBeds: Scalars["Boolean"];
  createPlasma: Plasma;
  updatePlasma?: Maybe<Plasma>;
  deletePlasma: Scalars["Boolean"];
  createRATCenter: RatCenter;
  updateRATCenter?: Maybe<RatCenter>;
  deleteRATCenter: Scalars["Boolean"];
  createTiffin: Tiffin;
  updateTiffin?: Maybe<Tiffin>;
  deleteTiffin: Scalars["Boolean"];
  login: UserResponse;
  logout: Scalars["Boolean"];
};

export type MutationCreateBedsArgs = {
  data: BedsInput;
};

export type MutationUpdateBedsArgs = {
  hosp_name?: Maybe<Scalars["String"]>;
  id: Scalars["Float"];
};

export type MutationDeleteBedsArgs = {
  id: Scalars["Float"];
};

export type MutationCreatePlasmaArgs = {
  data: PlasmaInput;
};

export type MutationUpdatePlasmaArgs = {
  hosp_name?: Maybe<Scalars["String"]>;
  id: Scalars["Float"];
};

export type MutationDeletePlasmaArgs = {
  id: Scalars["Float"];
};

export type MutationCreateRatCenterArgs = {
  data: RatCenterInput;
};

export type MutationUpdateRatCenterArgs = {
  location?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  id: Scalars["Float"];
};

export type MutationDeleteRatCenterArgs = {
  id: Scalars["Float"];
};

export type MutationCreateTiffinArgs = {
  data: TiffinInput;
};

export type MutationUpdateTiffinArgs = {
  provider_name?: Maybe<Scalars["String"]>;
  id: Scalars["Float"];
};

export type MutationDeleteTiffinArgs = {
  id: Scalars["Float"];
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type BedsInput = {
  hosp_Name: Scalars["String"];
  phone_no: Scalars["String"];
  address: Scalars["String"];
  location: Scalars["String"];
  with_oxygen: Scalars["Float"];
  without_oxygen: Scalars["Float"];
  icu: Scalars["Float"];
  icu_ventilator: Scalars["Float"];
  with_oxygen_left: Scalars["Float"];
  without_oxygen_left: Scalars["Float"];
  icu_left: Scalars["Float"];
  icu_ventilator_left: Scalars["Float"];
};

export type PlasmaInput = {
  hosp_Name: Scalars["String"];
  phone_no: Scalars["String"];
  mail_id: Scalars["String"];
  location: Scalars["String"];
  address: Scalars["String"];
  blood_grp: Array<Scalars["String"]>;
};

export type RatCenterInput = {
  hosp_Name: Scalars["String"];
  location: Scalars["String"];
  address: Scalars["String"];
};

export type TiffinInput = {
  provider_name: Scalars["String"];
  phone_no: Scalars["String"];
  address: Scalars["String"];
  price: Scalars["String"];
  delivery: Scalars["String"];
  food: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<Admin>;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type RegularErrorFragment = { __typename?: "FieldError" } & Pick<
  FieldError,
  "field" | "message"
>;

export type RegularUserFragment = { __typename?: "Admin" } & Pick<
  Admin,
  "id" | "username"
>;

export type RegularUserResponseFragment = { __typename?: "UserResponse" } & {
  errors?: Maybe<Array<{ __typename?: "FieldError" } & RegularErrorFragment>>;
  user?: Maybe<{ __typename?: "Admin" } & RegularUserFragment>;
};

export type CreateBedsMutationVariables = Exact<{
  input: BedsInput;
}>;

export type CreateBedsMutation = { __typename?: "Mutation" } & {
  createBeds: { __typename?: "Beds" } & Pick<
    Beds,
    | "id"
    | "hosp_Name"
    | "with_oxygen"
    | "phone_no"
    | "address"
    | "without_oxygen"
    | "location"
  >;
};

export type CreatePlasmaMutationVariables = Exact<{
  input: PlasmaInput;
}>;

export type CreatePlasmaMutation = { __typename?: "Mutation" } & {
  createPlasma: { __typename?: "Plasma" } & Pick<
    Plasma,
    "id" | "hosp_Name" | "phone_no" | "address" | "mail_id"
  >;
};

export type CreatRatCenterMutationVariables = Exact<{
  input: RatCenterInput;
}>;

export type CreatRatCenterMutation = { __typename?: "Mutation" } & {
  createRATCenter: { __typename?: "RATCenter" } & Pick<
    RatCenter,
    "id" | "hosp_Name" | "address"
  >;
};

export type CreateTiffinMutationVariables = Exact<{
  input: TiffinInput;
}>;

export type CreateTiffinMutation = { __typename?: "Mutation" } & {
  createTiffin: { __typename?: "Tiffin" } & Pick<
    Tiffin,
    "id" | "provider_name" | "phone_no" | "price"
  >;
};

export type LoginMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "UserResponse" } & RegularUserResponseFragment;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export type GetBedsQueryVariables = Exact<{ [key: string]: never }>;

export type GetBedsQuery = { __typename?: "Query" } & {
  getBeds: Array<
    { __typename?: "Beds" } & Pick<
      Beds,
      | "id"
      | "hosp_Name"
      | "phone_no"
      | "address"
      | "createdAt"
      | "with_oxygen"
      | "without_oxygen"
      | "icu"
      | "icu_ventilator"
      | "with_oxygen_left"
      | "without_oxygen_left"
      | "icu_left"
      | "icu_ventilator_left"
      | "location"
    >
  >;
};

export type GetPlasmaQueryVariables = Exact<{ [key: string]: never }>;

export type GetPlasmaQuery = { __typename?: "Query" } & {
  getPlasma: Array<
    { __typename?: "Plasma" } & Pick<
      Plasma,
      | "id"
      | "hosp_Name"
      | "phone_no"
      | "mail_id"
      | "location"
      | "address"
      | "createdAt"
      | "blood_grp"
    >
  >;
};

export type GetRatCentersQueryVariables = Exact<{ [key: string]: never }>;

export type GetRatCentersQuery = { __typename?: "Query" } & {
  getRATCenter: Array<
    { __typename?: "RATCenter" } & Pick<
      RatCenter,
      "id" | "hosp_Name" | "location" | "address"
    >
  >;
};

export type GetTiffinQueryVariables = Exact<{ [key: string]: never }>;

export type GetTiffinQuery = { __typename?: "Query" } & {
  getTiffin: Array<
    { __typename?: "Tiffin" } & Pick<
      Tiffin,
      | "id"
      | "provider_name"
      | "phone_no"
      | "address"
      | "price"
      | "delivery"
      | "food"
    >
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
  me?: Maybe<{ __typename?: "Admin" } & Pick<Admin, "id" | "username">>;
};

export const RegularErrorFragmentDoc = gql`
  fragment RegularError on FieldError {
    field
    message
  }
`;
export const RegularUserFragmentDoc = gql`
  fragment RegularUser on Admin {
    id
    username
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
  ${RegularUserFragmentDoc}
`;
export const CreateBedsDocument = gql`
  mutation CreateBeds($input: bedsInput!) {
    createBeds(data: $input) {
      id
      hosp_Name
      with_oxygen
      phone_no
      address
      without_oxygen
      location
    }
  }
`;

export function useCreateBedsMutation() {
  return Urql.useMutation<CreateBedsMutation, CreateBedsMutationVariables>(
    CreateBedsDocument
  );
}
export const CreatePlasmaDocument = gql`
  mutation CreatePlasma($input: PlasmaInput!) {
    createPlasma(data: $input) {
      id
      hosp_Name
      phone_no
      address
      mail_id
    }
  }
`;

export function useCreatePlasmaMutation() {
  return Urql.useMutation<CreatePlasmaMutation, CreatePlasmaMutationVariables>(
    CreatePlasmaDocument
  );
}
export const CreatRatCenterDocument = gql`
  mutation CreatRatCenter($input: RATCenterInput!) {
    createRATCenter(data: $input) {
      id
      hosp_Name
      address
    }
  }
`;

export function useCreatRatCenterMutation() {
  return Urql.useMutation<
    CreatRatCenterMutation,
    CreatRatCenterMutationVariables
  >(CreatRatCenterDocument);
}
export const CreateTiffinDocument = gql`
  mutation createTiffin($input: TiffinInput!) {
    createTiffin(data: $input) {
      id
      provider_name
      phone_no
      price
    }
  }
`;

export function useCreateTiffinMutation() {
  return Urql.useMutation<CreateTiffinMutation, CreateTiffinMutationVariables>(
    CreateTiffinDocument
  );
}
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ...RegularUserResponse
    }
  }
  ${RegularUserResponseFragmentDoc}
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument
  );
}
export const GetBedsDocument = gql`
  query getBeds {
    getBeds {
      id
      hosp_Name
      phone_no
      address
      createdAt
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

export function useGetBedsQuery(
  options: Omit<Urql.UseQueryArgs<GetBedsQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetBedsQuery>({ query: GetBedsDocument, ...options });
}
export const GetPlasmaDocument = gql`
  query getPlasma {
    getPlasma {
      id
      hosp_Name
      phone_no
      mail_id
      location
      address
      createdAt
      blood_grp
    }
  }
`;

export function useGetPlasmaQuery(
  options: Omit<Urql.UseQueryArgs<GetPlasmaQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetPlasmaQuery>({
    query: GetPlasmaDocument,
    ...options,
  });
}
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

export function useGetRatCentersQuery(
  options: Omit<Urql.UseQueryArgs<GetRatCentersQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetRatCentersQuery>({
    query: GetRatCentersDocument,
    ...options,
  });
}
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

export function useGetTiffinQuery(
  options: Omit<Urql.UseQueryArgs<GetTiffinQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetTiffinQuery>({
    query: GetTiffinDocument,
    ...options,
  });
}
export const MeDocument = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export function useMeQuery(
  options: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
