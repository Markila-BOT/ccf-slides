import React from "react";
import {
  Deck,
  Slide,
  FlexBox,
  Box,
  Progress,
} from "spectacle";
import Image from "next/image";

// Modern theme for the presentation
const theme = {
  colors: {
    primary: "#ffffff",
    secondary: "#2563eb",
    tertiary: "#f8fafc",
    accent: "#7c3aed",
    dark: "#1e293b",
  },
  fonts: {
    header: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    text: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSizes: {
    h1: "64px",
    h2: "48px",
    h3: "36px",
    text: "24px",
  },
};

export default function PresentationSlides() {
  return (
    <Deck
      theme={theme}
      template={() => (
        <FlexBox
          justifyContent="space-between"
          position="absolute"
          bottom={0}
          width={1}
        >
          <Box padding="0 1em">
            <Progress />
          </Box>
        </FlexBox>
      )}
    >
      {/* Slide 1 - d-1.png */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/d-1.png"
            alt="Slide 1"
            width={1200}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            priority
          />
        </Box>
      </Slide>

      {/* Slide 2 - d-2.png */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/d-2.png"
            alt="Slide 2"
            width={1200}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            priority
          />
        </Box>
      </Slide>

      {/* Slide 3 - d-3.png */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/d-3.png"
            alt="Slide 3"
            width={1200}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            priority
          />
        </Box>
      </Slide>

      {/* Slide 4 - d-4.png */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/d-4.png"
            alt="Slide 4"
            width={1200}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            priority
          />
        </Box>
      </Slide>

      {/* Slide 5 - d-5.png */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/d-5.png"
            alt="Slide 5"
            width={1200}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            priority
          />
        </Box>
      </Slide>

      {/* Slide 6 - d-6.png */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/d-6.png"
            alt="Slide 6"
            width={1200}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            priority
          />
        </Box>
      </Slide>

      {/* Slide 7 - d-7.png */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/d-7.png"
            alt="Slide 7"
            width={1200}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            priority
          />
        </Box>
      </Slide>
    </Deck>
  );
}
