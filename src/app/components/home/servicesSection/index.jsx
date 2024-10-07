"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcOrganization,
  FcIcons8Cup ,
  FcReading,
  FcCustomerSupport,
  FcBusiness 
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function ServicesSection() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Our Services – Your Perfect Travel Experience.
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Discover a range of tailored services designed to enhance your
          journey, ensuring comfort, safety, and memorable experiences
          throughout your trip, from booking to return.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Affordable Hotel"}
            icon={<Icon as={FcOrganization} w={10} h={10} />}
            description={
              "Comfortable stays at pocket-friendly rates, carefully selected to match your preferences."
            }
          />
          <Card
            heading={"Food & Drinks"}
            icon={<Icon as={FcIcons8Cup} w={10} h={10} />}
            description={
              "Local cuisines and international favorites to satisfy your cravings throughout the trip."
            }
            
          />
          <Card
            heading={"Safety Guide"}
            icon={<Icon as={FcReading} w={10} h={10} />}
            description={
              "A comprehensive guide ensuring you feel secure while exploring new destinations."
            }
            
          />
          <Card
            heading={"24/7 Customer Support"}
            icon={<Icon as={FcCustomerSupport} w={10} h={10} />}
            description={
              "Always ready to assist you at any time, ensuring a smooth travel experience."
            }
            
          />
          <Card
            heading={"Private Transportation"}
            icon={<Icon as={FcBusiness} w={10} h={10} />}
            description={
              "Reliable and comfortable transportation to get you where you need to be, hassle-free."
            }
            
          />
        </Flex>
      </Container>
    </Box>
  );
}
