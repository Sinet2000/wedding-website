import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CalendarSection = styled.section`
  position: relative;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 90vh;
  }
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/images/green-tree.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 14% 0%;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled(motion.h2)`
  font-family: ${(props) => props.theme.fonts.calligraphyThree};
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 2rem;
  color: rgb(44, 48, 38);
  letter-spacing: 0.1em;
`;

const MonthTitle = styled(motion.h3)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.5rem;
  color: #4a5638;
  margin: 1.5rem 0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const WeekDaysGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const WeekDay = styled(motion.div)<{ $isWeekend?: boolean }>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 600;
  font-size: 0.85rem;
  color: ${(props) => (props.$isWeekend ? "#e21a2e" : "#999")};
  padding: 0rem;
  text-transform: uppercase;
`;

const DaysGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0rem;
`;

const Day = styled(motion.div)<{ $isSelected?: boolean }>`
  aspect-ratio: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => (props.$isSelected ? "white" : "#333")};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: ${(props) => !props.$isSelected && "scale(1.1)"};
    color: ${(props) => !props.$isSelected && "#97a97c"};
  }

  ${(props) =>
    props.$isSelected &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background: #97a97c;
      border-radius: 50%;
      z-index: -1;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(151, 169, 124, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(151, 169, 124, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(151, 169, 124, 0);
      }
    }
  `}
`;

const Message = styled(motion.p)`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 500;
  color: #4a5638;
  margin: 1rem 0;
  line-height: 1.6;
`;

const DateWrapper = styled(motion.div)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #333;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Calendar = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const daysInMay = Array.from({ length: 31 }, (_, i) => i + 1);
  const firstDayOffset = 3; // May 1st, 2025 is Thursday (offset 3)

  const handleAddToCalendar = () => {
    const event = {
      title: "💍 Свадьба: Дарья & Никита 💕",
      description: "Будем рады разделить этот особенный день с вами! 🎊✨",
      startDate: "2025-05-24T13:30:00",
      endDate: "2025-05-25T02:30:00",
      location: "Zemgaļu iela 1, Vidzemes priekšpilsēta, Rīga, LV-1006, Latvia",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(
      event.location
    )}&dates=${event.startDate.replace(/[-:]/g, "")}/${event.endDate.replace(
      /[-:]/g,
      ""
    )}`;
    window.open(googleCalendarUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <CalendarSection ref={sectionRef}>
      <BackgroundImage
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <ContentCard
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Title variants={itemVariants}>МЫ ЖДЁМ ВАС</Title>
        <MonthTitle variants={itemVariants}>МАЙ</MonthTitle>

        <WeekDaysGrid variants={itemVariants}>
          {weekDays.map((day) => (
            <WeekDay key={day} $isWeekend={day === "сб" || day === "вс"}>
              {day}
            </WeekDay>
          ))}
        </WeekDaysGrid>

        <DaysGrid variants={itemVariants}>
          {Array(firstDayOffset)
            .fill(null)
            .map((_, i) => (
              <Day key={`empty-${i}`} />
            ))}
          {daysInMay.map((day) => (
            <Day
              key={day}
              $isSelected={day === 24}
              whileHover={day !== 24 ? { scale: 1.1 } : {}}
              whileTap={day !== 24 ? { scale: 0.95 } : {}}
            >
              {day}
            </Day>
          ))}
        </DaysGrid>

        <Message variants={itemVariants}>
          Не пропустите важное событие этой весны –
          <br />
          день нашей свадьбы!
        </Message>

        <DateWrapper
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          24 / 05 / 25
        </DateWrapper>

        <ButtonContainer>
          <CalendarButton onClick={() => handleAddToCalendar()}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
            </svg>
            Добавить в календарь
          </CalendarButton>
        </ButtonContainer>
      </ContentCard>
    </CalendarSection>
  );
};
