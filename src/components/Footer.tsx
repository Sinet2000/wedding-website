import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(61, 65, 55, 0.74);
  mix-blend-mode: multiply;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
`;

const Subtitle = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  span {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 1.2rem;
    letter-spacing: 2px;
    white-space: nowrap;
  }
`;

const Line = styled.div`
  width: 100px;
  height: 1px;
  background: white;
  opacity: 0.8;
`;

const PreTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.calligraphyOne};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.calligraphySix};
  font-size: 5rem;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const Credit = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 0.9rem;
  opacity: 0.8;

  img {
    height: 20px;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </VideoBackground>
      <Overlay />

      <ContentWrapper>
        <Subtitle>
          <Line />
          <span>Ждём вас с нетерпением!</span>
          <Line />
        </Subtitle>

        <PreTitle>С любовью и благодарностью</PreTitle>
        <Title>Дарья & Никита</Title>
      </ContentWrapper>

      <Credit>Made with love by Nikita Nikitins ❤️</Credit>
    </FooterContainer>
  );
};
