import { Box, Button, Flex, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useCheckMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useCheckMeQuery({
    pause: isServer(),
  });

  let body = null;

  if (fetching) {
    body = null;
  } else if (!data?.checkMe) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.checkMe.username}</Box>
        <Button
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex bg="black" position="sticky" top="0" p={4} ml={"auto"} height={80}>
      <div style={{ fontSize: 30, fontWeight: "bold" }}>Pune Covid Info</div>
      <Box ml={"auto"} justifyContent="center">
        {body}
      </Box>
    </Flex>
  );
};
