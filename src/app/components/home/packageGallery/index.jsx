"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Button,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import packageInfo from "../../../../../public/data/packageDetails.json"


function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function PackageGallery() {
    const {packageDetails} = packageInfo;
  return (
    <SimpleGrid p={50} columns={{ base: 1, md: 3 }} gap={6}  maxW="90rem" margin="auto" className="justify-items-center">
      {packageDetails?.map((data, index) => (
        <Box
          key={index}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            loading={"lazy"}
          />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex
              mt="1"
              justifyContent="space-between"
              alignContent="center"
              direction="column"
            >
              <Box
                fontSize="2xl"
                as="h4"
                lineHeight="tight"
                isTruncated
                fontFamily="RacingSansOne-Regular"
              >
                {data.name}
              </Box>
              <Box fontSize="md" as="span" lineHeight="tight" class="pb-4 min-h-40">
                {data.description}
              </Box>
            </Flex>

            <Flex
              justifyContent="space-between"
              alignContent="center"
              direction="column"
              gap="1"
            >
              <Rating rating={data.rating} />
              <Box
                fontSize="2xl"
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $ &nbsp;
                </Box>
                {data.price.toFixed(2)}
              </Box>
              <Button
                variant="solid"
                bg={"#038aed"}
                color="white"
                _hover={{
                  bg: "#004aad",
                }}
              >
                Book Now
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default PackageGallery;
