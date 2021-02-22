import { useUser } from "./User";
import SignIn from "./SignIn";

export default function Please({ children }) {
  const me = useUser();
  if (!me) return <SignIn />;
  return <>{children}</>;
}
