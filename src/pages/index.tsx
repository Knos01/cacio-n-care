import {
  Shield,
  MessageSquare,
  Angry,
  Ban,
  VenetianMask,
  Heart,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #b2e3c6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: #457b9d;
  color: white;
  border-radius: 0.375rem;
  text-decoration: none;
  &:hover {
    background-color: #157b9d;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 6rem 0;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 1.2;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 2rem;
  color: #4b5563;
`;

const HeroButton = styled(Button)`
  font-size: 1.125rem;
  padding: 0.75rem 1.5rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  width: fit-content;
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 24rem;
  margin: 0 auto;
`;

const FeatureCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.div`
  background-color: #457b9d;
  padding: 1rem;
  color: white;
  border-radius: 0.375rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureIcon = styled.div`
  color: #457b9d;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StepList = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const StepItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const StepNumber = styled.div`
  background-color: #6b4e71;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const TestimonialGrid = styled.div`
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background-color: #f5f0eb;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const Footer = styled.footer`
  background-color: #2d2d2d;
  color: white;
  padding: 3rem 0;
`;

const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #9ca3af;
  font-size: 0.875rem;
  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #4b5563;
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
`;

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f0eb",
        color: "#2d2d2d",
        fontFamily: "sans-serif",
      }}
    >
      {" "}
      <Head>
        <title>CacioNCare</title>
        <meta
          name="description"
          content="Revolutionizing healthcare systems with privacy."
        />
      </Head>
      <Header>
        <HeaderContent>
          <Logo>
            <img
              src="/images/logo_mint.png"
              alt="logo"
              width={80}
              style={{ margin: "auto" }}
            />
            Cacio 'N Care
          </Logo>
          <Button href="/dashboard">Launch app</Button>
        </HeaderContent>
      </Header>
      <main>
        <Container>
          <HeroSection>
            <HeroContent>
              <HeroTitle>
                Your health data, <br />
                protected and private
              </HeroTitle>
              <HeroDescription>
                Take control of your health information with the power of ZKPass
                proofs and Secret Network storage. As easy as cooking Cacio 'N
                Pepe. 🧀
              </HeroDescription>
            </HeroContent>
          </HeroSection>
        </Container>

        <section
          id="features"
          style={{ backgroundColor: "white", padding: "4rem 0" }}
        >
          <Container>
            <SectionTitle>Problems with Health Data Leaks</SectionTitle>
            <HeroDescription>
              In today's digital landscape, the privacy of health data is under
              constant threat. Here are some alarming issues:
            </HeroDescription>
            <FeatureGrid>
              {[
                {
                  icon: Angry,
                  title: "Massive Data Breaches",
                  description:
                    "Over 170 million patient records were compromised in the last decade due to unsecured databases.",
                },
                {
                  icon: Ban,
                  title: "Unauthorized Data Sales",
                  description:
                    "Personal health details sold without consent, leading to exploitation and discrimination.",
                },
                {
                  icon: VenetianMask,
                  title: "Identity Theft",
                  description:
                    "Leaked medical records have enabled criminals to commit fraud, resulting in financial loss for victims.",
                },
              ].map((feature, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <FeatureIcon>
                    <feature.icon
                      style={{
                        width: "3rem",
                        height: "3rem",
                        margin: "0 auto",
                      }}
                    />
                  </FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <p style={{ color: "#4b5563" }}>{feature.description}</p>
                </div>
              ))}
            </FeatureGrid>
          </Container>
        </section>

        <section id="how-it-works" style={{ padding: "4rem 0" }}>
          <Container>
            <SectionTitle>How Cacio 'N Pepe Works</SectionTitle>
            <StepList>
              {[
                "Sign up with our secure, privacy-first account creation process.",
                "Input or import your health data using our encrypted data transfer system.",
                "Access your health information anytime, anywhere, with multi-factor authentication.",
                "Share specific health data with healthcare providers using granular permission controls.",
              ].map((step, index) => (
                <StepItem key={index}>
                  <StepNumber>{index + 1}</StepNumber>
                  <p style={{ fontSize: "1.125rem" }}>{step}</p>
                </StepItem>
              ))}
            </StepList>
          </Container>
        </section>

        <section
          id="testimonials"
          style={{ backgroundColor: "white", padding: "4rem 0" }}
        >
          <Container>
            <SectionTitle>What Our Users Say</SectionTitle>
            <TestimonialGrid>
              {[
                {
                  name: "Alex Johnson",
                  role: "Patient",
                  quote:
                    "PrivacyHealth has given me peace of mind knowing my sensitive health data is secure.",
                },
                {
                  name: "Dr. Sarah Lee",
                  role: "Healthcare Provider",
                  quote:
                    "The secure sharing feature has streamlined my patient care process while maintaining privacy.",
                },
              ].map((testimonial, index) => (
                <TestimonialCard key={index}>
                  <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                    "{testimonial.quote}"
                  </p>
                  <div style={{ fontWeight: "600" }}>{testimonial.name}</div>
                  <div style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                    {testimonial.role}
                  </div>
                </TestimonialCard>
              ))}
            </TestimonialGrid>
          </Container>
        </section>

        <section id="contact" style={{ padding: "4rem 0" }}>
          <Container>
            <SectionTitle>Ready to Secure Your Health Data?</SectionTitle>
            <div
              style={{
                maxWidth: "32rem",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
                Join thousands of users who trust PrivacyHealth with their
                sensitive information. Start your journey to private, secure
                health management today.
              </p>
              <HeroButton href="#">Get Started Now</HeroButton>
            </div>
          </Container>
        </section>
      </main>
      <Footer>
        <Container>
          <FooterGrid>
            <div>
              <FooterTitle>PrivacyHealth</FooterTitle>
              <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                Secure, private, and user-centric healthcare management.
              </p>
            </div>
            <div>
              <FooterTitle>Quick Links</FooterTitle>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <li>
                  <FooterLink href="#">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Features</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Pricing</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Contact</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <FooterTitle>Legal</FooterTitle>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <li>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Terms of Service</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Cookie Policy</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <FooterTitle>Connect</FooterTitle>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <li>
                  <FooterLink href="#">Twitter</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">LinkedIn</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Facebook</FooterLink>
                </li>
              </ul>
            </div>
          </FooterGrid>
          <FooterBottom>
            © {new Date().getFullYear()} PrivacyHealth. All rights reserved.
          </FooterBottom>
        </Container>
      </Footer>
    </div>
  );
}
