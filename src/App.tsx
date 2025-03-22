import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { BannerMain } from "./components/BannerMain";
import { Calendar } from "./components/Calendar";
import { Timeline } from "./components/Timeline";
import { Countdown } from "./components/Countdown";
import { SaveTheDateBanner } from "./components/SaveTheDateBanner";
import { Location } from "./components/Location";
import { Welcome } from "./components/Welcome";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

const MainContent = styled.main`
  position: relative;
  background-image: url("/images/bg-main.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: ${(props) => props.theme.spacing.xlarge}
    ${(props) => props.theme.spacing.large};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimelineSection = styled(Section)`
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContent>
        <BannerMain />
        <Welcome />

        {/* Calendar Section */}
        <Calendar />
        <SaveTheDateBanner />
        <Countdown />

        {/* Timeline Section */}
        <TimelineSection>
          <Container>
            <Timeline />
          </Container>
        </TimelineSection>

        {/* Location Section */}
        <Location />

        <Contact />

        <Footer />
      </MainContent>
    </ThemeProvider>
  );
}

export default App;
