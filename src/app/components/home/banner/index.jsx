"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function HomeBanner() {
  const countries = ["France", "Italy", "Spain", "Germany", "Japan"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      /**
       * On first render the currentIndex will be 0 (First country value will be shown)
       * This below code will increment currentIndex + 1 untill it reaches the last element in the array.
       * When it reaches the last item it will resets to 0 (4+1)%5 = 0
       */
      setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 2000); // Change country every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount to avoid memory leak
  }, []);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading>
            <Text color={"blue.400"} as={"span"}>
              Greetings from
            </Text>{" "}
            <br />{" "}
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              as={"span"}
              position={"relative"}
              color="#1e3a8a"
              fontFamily="RacingSansOne-Regular"
              fontWeight={400}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "15%", md: "20%" }), // Adjusting the height
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "linear-gradient(90deg, #FFD700 0%, #FFAA00 100%)", // Golden gradient
                borderRadius: "10px", // Rounded corners
                zIndex: -1,
              }}
            >
              Voyage Mate
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Voyage Mate is a travel app designed to simplify the booking of
            tourism packages, offering a seamless experience from planning to
            reservation.
          </Text>

          <Heading>
            <Box display="flex">
              <Text color={"gray.500"} fontFamily="RacingSansOne-Regular" fontWeight={400}>Visit:</Text>&nbsp;
              <Text color={"#1e3a8a"} fontFamily="Garet-Book">
                {countries[currentIndex]}
              </Text>
            </Box>
          </Heading>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "#004aad",
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Baner Image"}
          objectFit={"cover"}
          src={"/media/other/bannerImage.png"}
        />
      </Flex>
    </Stack>
  );
}
