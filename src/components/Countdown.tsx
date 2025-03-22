import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountdownSection = styled.section`
  position: relative;
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 60vh;
    padding: 2rem 1rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/images/green-tree.jpg");
  background-size: cover;
  background-position: bottom right;
`;

const Title = styled(motion.h2)`
  font-family: ${(props) => props.theme.fonts.calligraphyThree};
  font-size: 3.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 2rem 0 3rem;
  text-align: center;
  position: relative;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.1em;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100px;
    height: 0.5px;
    background: rgba(255, 255, 255, 0.7);
  }

  &::before {
    right: calc(100% + 2rem);
  }

  &::after {
    left: calc(100% + 2rem);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0 2rem;

    &::before,
    &::after {
      width: 50px;
    }
  }
`;

const CountdownWrapper = styled(motion.div)`
  display: flex;
  gap: 2rem;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;

  @media (max-width: 768px) {
    min-width: 80px;
  }
`;

const Digits = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Digit = styled.div`
  background: #97a97c;
  color: white;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 700;
  width: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 40px;
    height: 50px;
  }
`;

const Label = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1rem;
  color: #666;
  text-transform: lowercase;
`;

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-24T14:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0").split("");
  };

  return (
    <CountdownSection>
      <BackgroundImage />
      <CountdownWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {[
          { value: timeLeft.days, label: "дней" },
          { value: timeLeft.hours, label: "часов" },
          { value: timeLeft.minutes, label: "минут" },
          { value: timeLeft.seconds, label: "секунд" },
        ].map(({ value, label }) => (
          <TimeUnit key={label}>
            <Digits>
              {formatNumber(value).map((digit, index) => (
                <Digit key={index}>{digit}</Digit>
              ))}
            </Digits>
            <Label>{label}</Label>
          </TimeUnit>
        ))}
      </CountdownWrapper>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        До нашей свадьбы осталось
      </Title>
    </CountdownSection>
  );
};
