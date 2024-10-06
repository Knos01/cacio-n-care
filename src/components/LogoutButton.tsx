import { Button } from "./atoms";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { logout } = usePrivy();

  return (
    <div>
      <Button onClick={logout}>Log out</Button>
    </div>
  );
}
