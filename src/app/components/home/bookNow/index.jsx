"use client";
import { useState } from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Button,
  Input,
  Textarea,
  Select,
  useToast,
} from "@chakra-ui/react";
import packagesData from "../../../../../public/data/voyagePackages.json";

const BookNowSection = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function BookNow() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [destination, setDestination] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [description, setDescription] = useState("");
  const { voyagePackages } = packagesData;

  const toast = useToast();

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    // Clear the end date if it's before the new start date
    if (endDate && e.target.value > endDate) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handling form submission
    const formData = {
      destination: destination,
      peopleCount: peopleCount,
      startDate: startDate,
      endDate: endDate,
      description: description,
    };

    // Print as JSON
    console.log("Submitted Form--->", JSON.stringify(formData, null, 2));

    // Showing toast onSuccess
    toast({
      title: "Form Submitted!",
      description: "Your booking has been successfully submitted.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });

    setDestination("");
    setPeopleCount("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <Container maxW={"5xl"} py={12} id="book-section">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"Couple enjoying at the beach"}
            src={"/media/other/boookNowSecImage.jpg"}
            objectFit={"cover"}
            loading={"lazy"}
          />
        </Flex>
        <div class="p-7 border-solid border-2 rounded-md">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"blue.400"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("blue.50", "blue.900")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Plan Your Journey
              </Text>

              <FormControl id="whereTo">
                <FormLabel>Where To</FormLabel>
                <Select
                  placeholder="Select option"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required={true}
                >
                  {voyagePackages?.map((pkg) => {
                    return (
                      <option key={pkg.place} value={pkg.place}>
                        {pkg.place}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl id="howMany">
                <FormLabel>How Many People</FormLabel>
                <Input
                  placeholder="Number of person"
                  value={peopleCount}
                  type="number"
                  onChange={(e) => setPeopleCount(e.target.value)}
                  required={true}
                />
              </FormControl>

              <FormControl id="startDate">
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  min={new Date().toISOString().split("T")[0]} // Only future dates
                  value={startDate}
                  onChange={handleStartDateChange}
                  placeholder="Select Start Date"
                  required={true}
                />
              </FormControl>

              <FormControl id="endDate">
                <FormLabel>End Date</FormLabel>
                <Input
                  min={startDate || new Date().toISOString().split("T")[0]} // Must be after or same as the start date
                  value={endDate}
                  onChange={handleEndDateChange}
                  placeholder="Select End Date"
                  isDisabled={!startDate} // Disable until start date is selected
                  type="date"
                  required={true}
                />
              </FormControl>

              <FormControl id="description">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Enter at least 50 characters"
                  value={description}
                  minLength={50}
                  maxLength={500}
                  onChange={(e) => setDescription(e.target.value)}
                  required={true}
                />
              </FormControl>

              <FormControl id="name" float="right">
                <Button
                  type="submit"
                  variant="solid"
                  bg={"#038aed"}
                  color="white"
                  _hover={{
                    bg: "#004aad",
                  }}
                >
                  Book Now
                </Button>
              </FormControl>
            </Stack>
          </form>
        </div>
      </SimpleGrid>
    </Container>
  );
}
