import { Dashboard } from "@/components/Dashboard";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import PrescriptionStored from "@/components/PrescriptionStored";
import StoreManager from "@/components/StoreManager";
import { Card, Row } from "@/components/atoms";
import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: full;
  width: 100vw;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #b2e3c6;
  color: #1d3b3b;
  padding: 20px;
  flex-shrink: 0;
  flex-direction: column;
  display: flex;
  gap: 1rem;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  height: 60px;
  background-color: #b2e3c6;
  color: #1d3b3b;
  display: flex;
  align-items: right;
  justify-content: end;
  padding: 5px 20px;
`;

const Body = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f4f4f4;
`;

const StoreView = () => {
  const { user, ready, authenticated } = usePrivy();

  const [hover, setHover] = useState({ dashboard: false, store: true });

  const linkStyle = (isHovered: boolean) => ({
    color: isHovered ? "#457B9D" : "#257B9D", // Subtle blue transition on hover
    textDecoration: "none",
    padding: "8px 12px", // Adding horizontal padding
    borderRadius: "6px", // Soft corner for a cleaner look
    backgroundColor: isHovered ? "#f0f4f8" : "transparent", // Light background on hover
    transition:
      "color 0.2s ease, background-color 0.2s ease, text-decoration 0.2s ease", // Smooth transitions
    cursor: "pointer", // Pointer cursor on hover
  });

  return (
    <Container>
      <Sidebar>
        <Link href="/">
          <img
            src="/images/logo_mint.png"
            alt="logo"
            width={120}
            style={{ margin: "auto" }}
          />
          <h2>Cacio 'N Care</h2>
        </Link>
        <hr />
        <Link
          href="/dashboard"
          style={linkStyle(hover.dashboard)}
          onMouseEnter={() => setHover({ ...hover, dashboard: true })}
          onMouseLeave={() => setHover({ ...hover, dashboard: false })}
        >
          Dashboard
        </Link>
        <Link
          href="store"
          style={linkStyle(hover.store)}
          onMouseEnter={() => setHover({ ...hover, store: true })}
          onMouseLeave={() => setHover({ ...hover, store: false })}
        >
          Store receipt data
        </Link>
      </Sidebar>

      <MainContent>
        <Navbar>
          {ready && authenticated ? (
            <Row>
              <span>Welcome {user?.email?.address.split("@")[0]}!</span>
              <LogoutButton />
            </Row>
          ) : (
            <LoginButton />
          )}
        </Navbar>

        <Body>
          <StoreManager />
        </Body>
      </MainContent>
    </Container>
  );
};

export default StoreView;
