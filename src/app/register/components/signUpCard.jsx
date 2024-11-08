"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
  RadioGroup,
  Radio,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    gender: "1",
    dob: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (isValid) {
      console.log("Data--->", JSON.stringify(formData, null, 2));

      // Showing toast onSuccess
      toast({
        title: "Form Submitted!",
        description: "Your Registration request been successfully submitted.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        gender: "1",
        dob: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <Stack
      minH={"100vh"}
      bg={useColorModeValue("gray.50", "gray.800")}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign Up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to join Voyage Mate family ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl
                    id="firstName"
                    isRequired
                    isInvalid={errors.firstName}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="contact" isRequired isInvalid={errors.contact}>
                <FormLabel>Contact</FormLabel>
                <Input
                  type="text"
                  value={formData.contact}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.contact}</FormErrorMessage>
              </FormControl>
              <FormControl id="gender" isRequired isInvalid={errors.gender}>
                <RadioGroup
                  value={formData.gender}
                  onChange={(value) =>
                    setFormData({ ...formData, gender: value })
                  }
                >
                  <Stack spacing={5} direction="row">
                    <p>Gender:</p>
                    <Radio colorScheme="blue" value="1">
                      Male
                    </Radio>
                    <Radio colorScheme="pink" value="2">
                      Female
                    </Radio>
                  </Stack>
                </RadioGroup>
                <FormErrorMessage>{errors.gender}</FormErrorMessage>
              </FormControl>
              <FormControl id="dob" isRequired isInvalid={errors.dob}>
                <FormLabel>Date Of Birth</FormLabel>
                <Input
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.dob}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isRequired isInvalid={errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isRequired isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"} href="/login">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "/media/other/registerBanner.jpg"
          }
        />
      </Flex>
    </Stack>
  );
}
