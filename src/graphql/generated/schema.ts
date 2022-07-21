import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Feed = {
  __typename?: 'Feed';
  count: Scalars['Int'];
  id?: Maybe<Scalars['ID']>;
  links: Array<Link>;
};

export type Link = {
  __typename?: 'Link';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  postedBy?: Maybe<User>;
  url: Scalars['String'];
  voters: Array<Maybe<User>>;
};

export type LinkOrderByInput = {
  createdAt?: InputMaybe<Sort>;
  description?: InputMaybe<Sort>;
  url?: InputMaybe<Sort>;
};

export type Mutation = {
  __typename?: 'Mutation';
  delete?: Maybe<Link>;
  login: AuthPayload;
  post: Link;
  signup: AuthPayload;
  update?: Maybe<Link>;
  vote?: Maybe<Vote>;
};


export type MutationDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPostArgs = {
  description: Scalars['String'];
  url: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  url?: InputMaybe<Scalars['String']>;
};


export type MutationVoteArgs = {
  linkId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  feed: Feed;
};


export type QueryFeedArgs = {
  filter?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<LinkOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  links: Array<Link>;
  name: Scalars['String'];
  votees: Array<Link>;
};

export type Vote = {
  __typename?: 'Vote';
  link: Link;
  user: User;
};

export type LinkFieldFragment = { __typename?: 'Link', id: number, description: string, url: string, createdAt: any };

export type FeedQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LinkOrderByInput> | LinkOrderByInput>;
}>;


export type FeedQuery = { __typename?: 'Query', feed: { __typename?: 'Feed', count: number, id?: string | null, links: Array<{ __typename?: 'Link', id: number, description: string, url: string, createdAt: any }> } };

export type PostMutationVariables = Exact<{
  description: Scalars['String'];
  url: Scalars['String'];
}>;


export type PostMutation = { __typename?: 'Mutation', post: { __typename?: 'Link', id: number, description: string, url: string, createdAt: any } };

export const LinkFieldFragmentDoc = gql`
    fragment linkField on Link {
  id
  description
  url
  createdAt
}
    `;
export const FeedDocument = gql`
    query feed($filter: String, $skip: Int, $take: Int, $orderBy: [LinkOrderByInput!]) {
  feed(filter: $filter, skip: $skip, take: $take, orderBy: $orderBy) {
    links {
      ...linkField
    }
    count
    id
  }
}
    ${LinkFieldFragmentDoc}`;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const PostDocument = gql`
    mutation post($description: String!, $url: String!) {
  post(description: $description, url: $url) {
    ...linkField
  }
}
    ${LinkFieldFragmentDoc}`;
export type PostMutationFn = Apollo.MutationFunction<PostMutation, PostMutationVariables>;

/**
 * __usePostMutation__
 *
 * To run a mutation, you first call `usePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postMutation, { data, loading, error }] = usePostMutation({
 *   variables: {
 *      description: // value for 'description'
 *      url: // value for 'url'
 *   },
 * });
 */
export function usePostMutation(baseOptions?: Apollo.MutationHookOptions<PostMutation, PostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostMutation, PostMutationVariables>(PostDocument, options);
      }
export type PostMutationHookResult = ReturnType<typeof usePostMutation>;
export type PostMutationResult = Apollo.MutationResult<PostMutation>;
export type PostMutationOptions = Apollo.BaseMutationOptions<PostMutation, PostMutationVariables>;