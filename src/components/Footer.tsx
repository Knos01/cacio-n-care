import { GithubIcon, TwitterIcon } from "@/assets/icons";
import { mq } from "@/styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media ${mq.sm.max} {
    gap: 0.75rem;
    flex-direction: column-reverse;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

const Link = styled.a`
  color: #ffffff;
  font-weight: 600;
  transition: color 0.15s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: #ffffff;
      opacity: 0.75;
    }
  }
`;

export function CustomFooter() {
  return (
    <Wrapper>
      <Links>
        <Link href="https://github.com/robdgs" target="_blank">
          robdgs
        </Link>
        <Link href="https://github.com/Knos01" target="_blank">
          Knos01
        </Link>
      </Links>

      <Links>
        <Link
          href="https://github.com/Knos01/cacio-n-care"
          target="_blank"
          style={{ display: "flex", gap: "0.5rem" }}
        >
          <GithubIcon />
          Github Repository
        </Link>
      </Links>
    </Wrapper>
  );
}
