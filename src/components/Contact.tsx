import styled from "@emotion/styled";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 4rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 600px;
    padding: 0;
  }
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.calligraphyThree};
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 4px;

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
    transform: translateY(-2px);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: auto;
    padding: 1rem 2rem;
    font-size: 1.1rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;

const PhoneNumber = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  margin: 1.5rem 0;
  letter-spacing: 1px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 1px;
  background: ${(props) => props.theme.colors.text};
  opacity: 0.3;
  margin: 1.5rem auto;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100px;
    margin: 2rem auto;
  }
`;

export const Contact = () => {
  const phoneNumber = "+371 203 17 330";
  const formattedPhone = phoneNumber.replace(/\s/g, "");

  return (
    <ContactContainer>
      <ContentWrapper>
        <Title>Свяжитесь с нами</Title>
        <Subtitle>
          Если у вас есть вопросы или вам нужна дополнительная информация,
          пожалуйста, не стесняйтесь обращаться к нам любым удобным способом
        </Subtitle>

        <Divider />

        <PhoneNumber>{phoneNumber}</PhoneNumber>

        <ContactLinks>
          <ContactLink
            href={`https://t.me/${formattedPhone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram /> Telegram
          </ContactLink>

          <ContactLink
            href={`https://wa.me/${formattedPhone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </ContactLink>

          <ContactLink href={`tel:${formattedPhone}`}>
            <FaPhone /> Позвонить
          </ContactLink>
        </ContactLinks>
      </ContentWrapper>
    </ContactContainer>
  );
};
