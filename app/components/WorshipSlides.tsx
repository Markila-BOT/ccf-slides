import React from "react";
import { Deck, Slide, Heading, Text, FlexBox, Box, Progress } from "spectacle";
import Image from "next/image";

// Theme for the presentation
const theme = {
  colors: {
    primary: "#fbfaf8",
    secondary: "#f04242",
    tertiary: "#f3f0ed",
  },
  fonts: {
    header: '"Geist Mono", monospace',
    text: '"Geist Mono", monospace',
  },
  fontSizes: {
    h1: "72px",
    h2: "64px",
    text: "36px",
  },
};

export default function WorshipSlides() {
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
      {/* Worship Image Slide - Presentable and Centered */}
      <Slide backgroundColor="primary">
        <Box
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            borderRadius: "18px",
            overflow: "hidden",
            background: "#222",
            border: "2px solid #f04242",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src="/worship.jpg"
            alt="Worship"
            width={1200}
            height={600}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              background: "#111",
              borderRadius: "16px",
            }}
            priority
          />
        </Box>
      </Slide>
      {/* Definition Slide - Etymology of 'worship' */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="h2" margin="0 0 1.5rem 0" color="#f04242">
            worship{" "}
            <span style={{ fontWeight: 400, fontSize: "0.7em" }}>(n.)</span>
          </Heading>
          <Box
            style={{
              background: "#181f1a",
              border: "1.5px solid #f04242",
              borderRadius: "14px",
              padding: "2rem 2.5rem",
              maxWidth: 800,
              margin: "0 auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Text
              fontSize="text"
              color="#fff"
              style={{
                fontFamily: "serif",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              Middle English <b>worshippe, worship</b>, &quot;high respect,
              honor, fame,&quot; from Old English <b>worðscip, wurðscip</b>{" "}
              (Anglian), <b>weorðscipe</b> (West Saxon) &quot;condition of being
              worthy, dignity, glory, distinction, honor, renown,&quot; from{" "}
              <b>weorð</b> &quot;worthy&quot; (see worth) + <b>-scipe</b> (see
              -ship).
            </Text>
          </Box>
        </FlexBox>
      </Slide>

      {/* Psalm 100 Slide - Grateful Praise (Image-based) */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100vh"
          minHeight={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              borderRadius: "18px",
              overflow: "hidden",
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Image
              src="/real.jpg"
              alt="True Worship: Get REAL"
              width={1200}
              height={600}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
                borderRadius: "16px",
              }}
              priority
            />
          </Box>
        </FlexBox>
      </Slide>
      {/* Psalm 100 Slide 1 - RECOGNIZE WHO GOD IS AND RESPOND WHOLEHEARTEDLY */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100vh"
          minHeight={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Heading
            fontSize="h3"
            color="#f04242"
            style={{
              marginTop: "2vh",
              marginBottom: "2vh",
              textAlign: "center",
            }}
          >
            1) RECOGNIZE WHO GOD IS AND RESPOND WHOLEHEARTEDLY
          </Heading>
          <Box
            style={{
              background: "#181f1a",
              border: "1.5px solid #f04242",
              borderRadius: "14px",
              padding: "2rem",
              maxWidth: "90vw",
              width: "100%",
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Text
              fontSize="text"
              color="#fff"
              style={{ lineHeight: 1.5, whiteSpace: "pre-line" }}
            >
              {`Psalm 100:1
Shout joyfully to the Lord, all the earth.`}
            </Text>
          </Box>
        </FlexBox>
      </Slide>
      {/* Psalm 100 Slide 2 - EXPRESSED IN SERVICE */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100vh"
          minHeight={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Heading
            fontSize="h3"
            color="#f04242"
            style={{
              marginTop: "2vh",
              marginBottom: "2vh",
              textAlign: "center",
            }}
          >
            2) EXPRESSED IN SERVICE
          </Heading>
          <Box
            style={{
              background: "#181f1a",
              border: "1.5px solid #f04242",
              borderRadius: "14px",
              padding: "2rem",
              maxWidth: "90vw",
              width: "100%",
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Text
              fontSize="text"
              color="#fff"
              style={{ lineHeight: 1.5, whiteSpace: "pre-line" }}
            >
              {`Psalm 100:2
Serve the Lord with gladness; Come before Him with joyful singing.`}
            </Text>
          </Box>
        </FlexBox>
      </Slide>
      {/* Psalm 100 Slide 3 - ANCHORED IN GOD&apos;S WORD */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100vh"
          minHeight={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Heading
            fontSize="h3"
            color="#f04242"
            style={{
              marginTop: "2vh",
              marginBottom: "2vh",
              textAlign: "center",
            }}
          >
            3) ANCHORED IN GOD&apos;S WORD
          </Heading>
          <Box
            style={{
              background: "#181f1a",
              border: "1.5px solid #f04242",
              borderRadius: "14px",
              padding: "2rem",
              maxWidth: "90vw",
              width: "100%",
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Text
              fontSize="text"
              color="#fff"
              style={{ lineHeight: 1.5, whiteSpace: "pre-line" }}
            >
              {`Psalm 100:3
Know that the Lord Himself is God;
It is He who has made us, and not we ourselves;
We are His people and the sheep of His pasture.`}
            </Text>
          </Box>
        </FlexBox>
      </Slide>
      {/* Psalm 100 Slide 4 - LIVE IN THANKSGIVING */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100vh"
          minHeight={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Heading
            fontSize="h3"
            color="#f04242"
            style={{
              marginTop: "2vh",
              marginBottom: "2vh",
              textAlign: "center",
            }}
          >
            4) LIVE IN THANKSGIVING
          </Heading>
          <Box
            style={{
              background: "#181f1a",
              border: "1.5px solid #f04242",
              borderRadius: "14px",
              padding: "2rem",
              maxWidth: "90vw",
              width: "100%",
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Text
              fontSize="text"
              color="#fff"
              style={{ lineHeight: 1.5, whiteSpace: "pre-line" }}
            >
              {`Psalm 100:4-5
Enter His gates with thanksgiving
And His courts with praise.
Give thanks to Him, bless His name.
For the Lord is good;
His loving kindness is everlasting
And His faithfulness to all generations.`}
            </Text>
          </Box>
        </FlexBox>
      </Slide>
      {/* A Living Sacrifice Slide - Romans 12:1 */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100vh"
          minHeight={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Heading
            fontSize="h2"
            color="#f04242"
            style={{
              marginTop: "2vh",
              marginBottom: "2vh",
              textAlign: "center",
            }}
          >
            Romans 12:1 - A Living Sacrifice
          </Heading>
          <Box
            style={{
              background: "#181f1a",
              border: "1.5px solid #f04242",
              borderRadius: "14px",
              padding: "2rem",
              maxWidth: "90vw",
              width: "100%",
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Text
              fontSize="text"
              color="#fff"
              style={{ lineHeight: 1.5, whiteSpace: "pre-line" }}
            >
              {`Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.

(Romans 12:1, NIV)`}
            </Text>
          </Box>
        </FlexBox>
      </Slide>

      {/* Worship in Spirit and Truth Slide - John 4:24 */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100vh"
          minHeight={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Heading
            fontSize="h2"
            color="#f04242"
            style={{
              marginTop: "2vh",
              marginBottom: "2vh",
              textAlign: "center",
            }}
          >
            John 4:24 - Worship in Spirit and Truth
          </Heading>
          <Box
            style={{
              background: "#181f1a",
              border: "1.5px solid #f04242",
              borderRadius: "14px",
              padding: "2rem",
              maxWidth: "90vw",
              width: "100%",
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Text
              fontSize="text"
              color="#fff"
              style={{ lineHeight: 1.5, whiteSpace: "pre-line" }}
            >
              {`God is spirit, and his worshipers must worship in the Spirit and in truth.\n\n(John 4:24, NIV)`}
            </Text>
          </Box>
        </FlexBox>
      </Slide>
      {/* Remain in God Slide - Closing Message */}
      <Slide backgroundColor="primary">
        <FlexBox
          height="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {/* Responsive image container with border and shadow, matching worship slide */}
          <Box
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              borderRadius: "18px",
              overflow: "hidden",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Image
              src="/whatever.jpg"
              alt="Remain in God rain or shine"
              width={1200}
              height={1000}
              style={{
                objectFit: "contain",
                borderRadius: "16px",
              }}
              priority
            />
          </Box>
        </FlexBox>
      </Slide>
    </Deck>
  );
}
