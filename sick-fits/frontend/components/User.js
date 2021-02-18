import { gql, useQuery } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      # handle the type union,
      # since authenticatedItem can contain anything
      ... on User {
        id
        email
        name
        # TODO: Query the cart once we have it
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
