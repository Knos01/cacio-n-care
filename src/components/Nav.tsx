import styles from "../styles/styles.module.css";
import LoginButton from "./LoginButton";
import { useSharedState } from "@/utils/store";
import Link from "next/link";
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

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

export function Nav() {
  const [{ user }] = useSharedState();
  // console.log(user)
  return (
    <Wrapper>
      <Title>
        <Link href="/">🧀Cacio 'N Care</Link>
      </Title>
      <div style={{ display: "flex", gap: "10px" }}>
        {user && (
          <button
            className={styles.connectButton}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <img
              src="/images/github.png"
              alt={`Github image`}
              width={15}
              height={15}
            />
            {user.login}
          </button>
        )}

        <LoginButton />
      </div>
    </Wrapper>
  );
}
