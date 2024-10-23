"use client";


import { scrollToSection } from "@/app/utility";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AboutUs() {

  return (
    <>
      <Text
        textTransform={"uppercase"}
        color={"blue.400"}
        fontWeight={600}
        fontSize={"larger"}
        bg={useColorModeValue("blue.50", "blue.900")}
        p={2}
        rounded={"md"}
        className="w-fit m-auto"
        id="about-section"
      >
        About Us
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        maxW={"90rem"}
        margin={"auto"}
        className="p-14"
      >
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/media/other/bannerImage.png"}
            className="rounded"
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
              <br />{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Voyage Mate is a travel app designed to simplify the booking of
              tourism packages, offering a seamless experience from planning to
              reservation.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "#004aad",
                }}
                onClick={() => scrollToSection('book-section')}
              >
                Book Now
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
