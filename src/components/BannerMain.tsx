import styled from "@emotion/styled";
import { motion, useScroll, useTransform } from "framer-motion";

const BannerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const ParallaxImage = styled(motion.div)`
  position: absolute;
  top: -20%;
  left: -10%;
  right: -10%;
  bottom: -20%;
  background-image: url("/images/banner.jpg");
  background-position: center;
  background-size: cover;
  will-change: transform;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(74, 86, 56, 0.2) 0%,
    rgba(74, 86, 56, 0.6) 100%
  );
  mix-blend-mode: multiply;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    top: auto;
    bottom: 15%;
    transform: translateX(-50%);
  }
`;

const MainHeading = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.calligraphySix};
  font-size: 6rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Ampersand = styled(motion.span)`
  display: block;
  font-size: 4rem;
  margin: 0.5rem 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Divider = styled(motion.div)`
  width: 150px;
  height: 1px;
  background-color: white;
  margin: 2rem auto;
  opacity: 0.8;
`;

const DateText = styled(motion.div)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  opacity: 0.9;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FloatingText = styled(motion.div)`
  position: absolute;
  font-family: ${(props) => props.theme.fonts.primary};
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  letter-spacing: 0.1em;

  &.top-left {
    top: 10%;
    left: 5%;
  }

  &.top-right {
    top: 10%;
    right: 5%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05em;

    &.top-left {
      left: 20%;
    }

    &.top-right {
      right: 20%;
    }
  }
`;

export const BannerMain = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <BannerContainer>
      <ParallaxImage
        style={{
          scale,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      />
      <Overlay />
      <FloatingText
        className="top-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Save the Date
      </FloatingText>
      <FloatingText
        className="top-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Рига, Латвия
      </FloatingText>
      <ContentWrapper>
        <MainHeading
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Дарья
          <Ampersand
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            &
          </Ampersand>
          Никита
        </MainHeading>
        <Divider
          initial={{ width: 0 }}
          animate={{ width: 150 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <DateText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          24.05.2025
        </DateText>
      </ContentWrapper>
    </BannerContainer>
  );
};
