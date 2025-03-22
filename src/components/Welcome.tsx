import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WelcomeContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 80vh;
    padding: 4rem 0;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Title = styled(motion.h2)`
  font-family: ${(props) => props.theme.fonts.calligraphyThree};
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.2;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text};
  max-width: 600px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  position: relative;
  width: 100%;
  height: 50vh;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 70vh;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const Welcome = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <WelcomeContainer ref={containerRef}>
      <ContentWrapper
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <TextContent>
          <Title variants={itemVariants}>Дорогие родные и близкие!</Title>
          <Subtitle variants={itemVariants}>
            Это официальное приглашение на нашу свадьбу! А получили вы его
            потому, что мы очень хотим видеть вас в этот день рядом с нами :)
          </Subtitle>
        </TextContent>
        <ImageWrapper variants={imageVariants}>
          <Image
            src="/images/our-story-img.png"
            alt="Our story"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </ImageWrapper>
      </ContentWrapper>
    </WelcomeContainer>
  );
};
