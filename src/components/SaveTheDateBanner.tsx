import styled from "@emotion/styled";

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
  background: ${(props) => props.theme.colors.background};
  border-top: 1px solid rgba(54, 59, 47, 0.3);
  border-bottom: 1px solid rgba(54, 59, 47, 0.3);
`;

const ScrollingContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: scroll 40s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const TextGroup = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2rem;
  letter-spacing: 0.2em;
  color: rgb(57, 61, 51);
  padding-right: 2rem;
`;

const Diamond = styled.span`
  display: inline-block;
  margin: 0 1rem;
  transform: rotate(45deg);
  width: 8px;
  height: 8px;
  background-color: #97a97c;
`;

export const SaveTheDateBanner = () => {
  const content = Array(10).fill("SAVE THE DATE");

  return (
    <BannerContainer>
      <ScrollingContent>
        {content.map((text, index) => (
          <TextGroup key={index}>
            {text}
            <Diamond />
          </TextGroup>
        ))}
      </ScrollingContent>
    </BannerContainer>
  );
};
