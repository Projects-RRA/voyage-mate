"use client";
import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          className="items-center"
        >
          <Image
            src="/media/logo/logo.png"
            alt="Logo"
            width={200}
            height={100}
            loading="lazy"
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/* Disabled the theme switch option */}
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button> */}
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"#038aed"}
            href={"#"}
            _hover={{
              bg: "#004aad",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  //*  The line `const { isOpen, onToggle } = useDisclosure();` is using the `useDisclosure` hook from  Chakra UI to manage the state of a disclosure component.

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <React.Fragment>
            {navItem.children && navItem.children.length > 0 ? (
              // Render Popover only if there are children
              <Popover
                trigger="hover"
                isOpen={isOpen}
                onOpen={onToggle}
                onClose={onToggle}
              >
                <PopoverTrigger>
                  <div className="cursor-pointer">
                    {navItem.label}
                    <Icon
                      as={ChevronDownIcon}
                      transition={"all .25s ease-in-out"}
                      transform={isOpen ? "rotate(180deg)" : ""}
                      w={5}
                      h={5}
                    />
                  </div>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              </Popover>
            ) : (
              // If no children, render the nav item without Popover
              <Link href={navItem.href}>{navItem.label}</Link>
            )}
          </React.Fragment>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#004aad", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "var(--chakra-colors-white)" }}
            fontWeight={500}
          >
            {label}
          </Text>
          {/* If the Childern has subLabel*/}
          {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            color={"var(--chakra-colors-white)"}
            w={5}
            h={5}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        className="flex flex-row w-20"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text color={useColorModeValue("gray.600", "gray.200")}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Book",
    href: "#",
  },
  {
    label: "Packages",
    children: [
      {
        label: "India",
        // subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "United States",
        href: "#",
      },
      {
        label: "France",
        href: "#",
      },
      {
        label: "Germany",
        href: "#",
      },
    ],
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Gallery",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
];
