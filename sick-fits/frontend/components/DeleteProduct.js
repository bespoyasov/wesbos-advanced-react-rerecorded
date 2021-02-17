import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update,
  });

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (!confirm("U sure?")) return;
        deleteProduct().catch((err) => alert(err.message));
      }}
    >
      {children}
    </button>
  );
}
