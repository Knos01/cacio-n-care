import LoginButton from "./LoginButton";
import { Card } from "./atoms";
import { usePrivy } from "@privy-io/react-auth";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  position: fixed;
  margin-right: auto;
  margin-left: auto;
`;

export function Nav() {
  const { user, ready, authenticated } = usePrivy();

  return (
    <Wrapper>
      <div style={{ display: "flex", gap: "10px" }}>
        {ready && authenticated && <Card>{user?.wallet?.address}</Card>}

        <LoginButton />
      </div>
    </Wrapper>
  );
}
