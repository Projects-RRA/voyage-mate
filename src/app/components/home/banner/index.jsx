"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import packagesData from "../../../../../public/data/voyagePackages.json"

export default function HomeBanner() {
    const {voyagePackages} = packagesData;
    const countries = voyagePackages?.map(pkg => pkg.place);

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
    }, [countries.length]);
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "/media/other/banner.jpg"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading>
                <Text color={"#7da6e0"} as={"span"}>
                  Greetings from
                </Text>{" "}
                <br />{" "}
                <Text
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  as={"span"}
                  position={"relative"}
                  color="#ffffff"
                  fontFamily="RacingSansOne-Regular"
                  fontWeight={400}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "15%", md: "20%" }), // Adjusting the height
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    borderRadius: "10px", // Rounded corners
                    zIndex: -1,
                  }}
                >
                  Voyage Mate
                </Text>
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"#c3d1e8"}>
                Voyage Mate is a travel app designed to simplify the booking of
                tourism packages, offering a seamless experience from planning
                to reservation.
              </Text>

              <Heading>
                <Box display="flex">
                  <Text
                    color={"gray.300"}
                    fontFamily="RacingSansOne-Regular"
                    fontWeight={400}
                  >
                    Visit:
                  </Text>
                  &nbsp;
                  <Text color={"#ffffff"} fontFamily="Garet-Book">
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
          {/* <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack> */}
        </Stack>
      </VStack>
    </Flex>
  );
}
