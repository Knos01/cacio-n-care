import { Button } from "./atoms";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { login } = usePrivy();

  return (
    <div>
      <Button onClick={login}>Log in</Button>
    </div>
  );
}
