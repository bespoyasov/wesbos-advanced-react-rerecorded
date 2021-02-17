import UpdateProduct from "../components/UpdateProduct";

export default function Update({ query }) {
  return <UpdateProduct id={query.id} />;
}
