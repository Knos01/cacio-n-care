import { Button, Card } from "./atoms";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { ready, authenticated, login, user, logout } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);

  console.log(user);

  if (ready && authenticated) {
    return <Card>{user?.wallet?.address}</Card>;
  }

  return (
    <Button disabled={disableLogin} onClick={login}>
      Log in
    </Button>
  );
}
