import { Dashboard } from "@/components/Dashboard";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { Card, Row } from "@/components/atoms";
import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #b2e3c6;
  color: #1d3b3b;
  padding: 20px;
  flex-shrink: 0;
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

const DashboardView = () => {
  const { user, ready, authenticated } = usePrivy();
  return (
    <Container>
      <Sidebar>
        <Link href="/">
          <img src="/images/logo_mint.png" alt="logo" />
          <h2>Cacio 'N Care</h2>
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
          <Dashboard />
        </Body>
      </MainContent>
    </Container>
  );
};

export default DashboardView;
