import styled from "@emotion/styled";

const LocationContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 5fr 4fr;
  position: relative;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 2rem;
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.calligraphyThree};
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

const Time = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

const MapButton = styled.button`
  padding: 1rem 2rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin-bottom: 1rem;

  &:hover {
    background: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
  }
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    clip-path: none;
    height: 50vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovingStripe = styled.div`
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

const Divider = styled.div`
  width: 100px;
  height: 1px;
  background-color: ${(props) => props.theme.colors.text};
  margin: 0 0 2rem;
  opacity: 0.3;
`;

const LocationSection = styled.div`
  margin-bottom: 2rem;
`;

export const Location = () => {
  const handleRegistryMapClick = () => {
    window.open("https://maps.app.goo.gl/tpHXWs6kvnpe5JYt5", "_blank");
  };

  const handleVenueMapClick = () => {
    window.open("https://maps.app.goo.gl/kRrMFDcvFVR9UkEw9", "_blank");
  };

  return (
    <LocationContainer>
      <MovingStripe>
        <ScrollingContent>
          {Array(10)
            .fill("WEDDING DAY")
            .map((text, index) => (
              <TextGroup key={index}>
                {text}
                <Diamond />
              </TextGroup>
            ))}
        </ScrollingContent>
      </MovingStripe>
      <ContentWrapper>
        <TextContent>
          <Title>Расписание дня</Title>
          <Divider />

          <LocationSection>
            <Description>
              <strong>Торжественная регистрация брака</strong>
            </Description>
            <Description>
              Rīgas pilsētas Vidzemes dzimtsarakstu nodaļa
            </Description>
            <Description>Zemgaļu iela 1, Rīga, LV-1006</Description>
            <Time>Сбор гостей в 13:30</Time>
            <MapButton onClick={handleRegistryMapClick}>
              Как добраться
            </MapButton>
          </LocationSection>

          <LocationSection>
            <Description>
              <strong>Праздничный банкет</strong>
            </Description>
            <Description>Champagne Bar Mon Cheri</Description>
            <Description>Brīvības iela 68, Rīga, LV-1011</Description>
            <Time>Сбор гостей в 18:00</Time>
            <MapButton onClick={handleVenueMapClick}>Как добраться</MapButton>
          </LocationSection>
        </TextContent>
        <ImageSection>
          <Image src="/images/Mon-cheri-location.png" alt="Wedding venue" />
        </ImageSection>
      </ContentWrapper>
    </LocationContainer>
  );
};
