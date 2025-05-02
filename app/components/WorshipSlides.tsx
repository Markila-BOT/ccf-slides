import React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  Image,
  FlexBox,
  Box,
  Progress,
} from "spectacle";
import { createApi } from "unsplash-js";

// Initialize Unsplash
const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || "",
});

// Theme for the presentation
const theme = {
  colors: {
    primary: "#1a1a1a",
    secondary: "#03A9FC",
    tertiary: "#ffffff",
  },
  fonts: {
    header: '"Open Sans", sans-serif',
    text: '"Open Sans", sans-serif',
  },
  fontSizes: {
    h1: "72px",
    h2: "64px",
    text: "36px",
  },
};

const psalmVerses = [
  {
    verse:
      "Why, O LORD, do you stand far away? Why do you hide yourself in times of trouble?",
    reference: "Psalm 10:1",
  },
  {
    verse:
      "But you do see, for you note mischief and vexation, that you may take it into your hands",
    reference: "Psalm 10:14a",
  },
  {
    verse:
      "The LORD is king forever and ever; the nations perish from his land",
    reference: "Psalm 10:16",
  },
  {
    verse:
      "O LORD, you hear the desire of the afflicted; you will strengthen their heart",
    reference: "Psalm 10:17a",
  },
];

export default function WorshipSlides() {
  const [images, setImages] = React.useState<Array<{ url: string }>>([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const results = await unsplash.search.getPhotos({
          query: "worship nature mountains sunset",
          perPage: 4,
        });

        if (results.response) {
          const fetchedImages = results.response.results.map((result) => ({
            url: result.urls.regular,
          }));
          setImages(fetchedImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

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
      {/* Title Slide */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Worship from Psalm 10</Heading>
          <Text>A journey through prayer and praise</Text>
        </FlexBox>
      </Slide>

      {/* Verse Slides */}
      {psalmVerses.map((item, index) => (
        <Slide key={index} backgroundColor="primary">
          {images[index] && (
            <Image
              src={images[index].url}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.3,
              }}
            />
          )}
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
            zIndex={1}
          >
            <Text
              color="tertiary"
              fontSize="text"
              margin="0 auto"
              textAlign="center"
              width="80%"
            >
              {item.verse}
            </Text>
            <Text color="secondary" fontSize="24px" margin="2em 0 0">
              {item.reference}
            </Text>
          </FlexBox>
        </Slide>
      ))}

      {/* Final Slide */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Thank You</Heading>
          <Text>For joining in worship</Text>
        </FlexBox>
      </Slide>
    </Deck>
  );
}
