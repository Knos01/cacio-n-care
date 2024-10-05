import { Button, Card } from "./atoms";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { ready, authenticated, login, user, logout } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);

  console.log(user);

  return (
    <Button disabled={disableLogin} onClick={login}>
      Log in
    </Button>
  );
}
