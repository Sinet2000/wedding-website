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

  const handleAddToCalendar = (platform: "android" | "ios") => {
    const event = {
      title: "💍 Свадьба: Дарья & Никита 💕",
      description: "Будем рады разделить этот особенный день с вами! 🎊✨",
      startDate: "2025-05-24T13:30:00",
      endDate: "2025-05-25T02:30:00",
      location: "Zemgaļu iela 1, Vidzemes priekšpilsēta, Rīga, LV-1006, Latvia",
    };

    if (platform == "android") {
      // Google Calendar Link
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
    } else {
      const event = {
        title: "Свадьба: Дарья & Никита",
        description:
          "Приглашаем вас на нашу свадьбу! 💍✨ Будем рады видеть вас в этот особенный день.",
        location: "Zemgaļu iela 1, Vidzemes priekšpilsēta, Rīga, LV-1006",
        startDate: new Date("2025-05-24T10:30:00Z"), // UTC время
        endDate: new Date("2025-05-24T12:30:00Z"), // UTC время
      };

      const formatDate = (date: Date) => {
        return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      };

      // Создание корректного .ics файла для iOS
      const timestamp = formatDate(new Date()); // Текущая временная метка
      const icsContent = `
      BEGIN:VCALENDAR
      VERSION:2.0
      PRODID:-//Свадьба Дарьи и Никиты//EN
      BEGIN:VEVENT
      UID:${timestamp}@daria-nikita-wedding.com
      DTSTAMP:${timestamp}
      DTSTART:${formatDate(event.startDate)}
      DTEND:${formatDate(event.endDate)}
      SUMMARY:${event.title}
      DESCRIPTION:${event.description}
      LOCATION:${event.location}
      END:VEVENT
      END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "event.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
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
          <CalendarButton onClick={() => handleAddToCalendar("android")}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
            </svg>
            Добавить в календарь
          </CalendarButton>

          <CalendarButton onClick={() => handleAddToCalendar("ios")}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            Добавить в календарь
          </CalendarButton>
        </ButtonContainer>
      </ContentCard>
    </CalendarSection>
  );
};
