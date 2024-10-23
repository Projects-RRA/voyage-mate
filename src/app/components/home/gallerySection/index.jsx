"use client";
import React from "react";
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";

export default function ImageGallery() {
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
        id="gallery-section"
      >
        Gallery
      </Text>
      <div className="flex flex-col md:flex-row max-w-7xl m-auto p-8">
        <Box className="w-full md:w-1/3 p-2">
          <Image
            src="/media/packages/goa.jpg"
            alt="Boat on Calm Water"
            className="rounded-lg shadow-md mb-4 transform transition-transform hover:scale-105"
          />
          <Image
            src="/media/packages/mountain1.webp"
            alt="Wintry Mountain Landscape"
            className="rounded-lg shadow-md transform transition-transform hover:scale-105"
          />
        </Box>

        <Box className="w-full md:w-1/3 p-2">
          <Image
            src="/media/packages/mountain2.webp"
            alt="Mountains in the Clouds"
            className="rounded-lg shadow-md mb-4 transform transition-transform hover:scale-105"
          />
          <Image
            src="/media/packages/andaman.jpg"
            alt="Boat on Calm Water"
            className="rounded-lg shadow-md transform transition-transform hover:scale-105"
          />
        </Box>

        <Box className="w-full md:w-1/3 p-2">
          <Image
            src="/media/packages/natureBeach.webp"
            alt="Waves at Sea"
            className="rounded-lg shadow-md mb-4 transform transition-transform hover:scale-105"
          />
          <Image
            src="/media/packages/mountain3.webp"
            alt="Yosemite National Park"
            className="rounded-lg shadow-md transform transition-transform hover:scale-105"
          />
        </Box>
      </div>
    </>
  );
}
