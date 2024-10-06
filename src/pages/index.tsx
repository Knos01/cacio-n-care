import { Dashboard } from "@/components/Dashboard";
import StoreManager from "@/components/StoreManager";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CreateButton, CustomContainer, Layout } from "@/components/atoms";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Store } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAsyncMemo } from "use-async-memo";

export default function Home() {
  return (
    <>
      <Head>
        <title>CacioNCare</title>
        <meta
          name="description"
          content="Revolutionizing hackathon prize distribution."
        />
        {/* ... other meta tags */}
      </Head>

      <Layout>
        <Nav />
        <CustomContainer as="main">
          <h1>Cacio 'N Care</h1>
          <p>
            Streamline grant processes by enabling DAOs to effortlessly create,
            evaluate, and distribute funds.
          </p>
          <p>
            Automate grant submissions, facilitate transparent evaluation
            through smart contract-based criteria, and execute seamless fund
            distributions upon approval, enhancing efficiency and transparency
            in decentralized decision-making.
          </p>

          <Link href="/competition/create" passHref>
            <CreateButton>Create Grant</CreateButton>
          </Link>
          <Link href="/dashboard" passHref>
            test
          </Link>

          <p></p>
          <StoreManager />
        </CustomContainer>
        <Footer />
      </Layout>
    </>
  );
}
