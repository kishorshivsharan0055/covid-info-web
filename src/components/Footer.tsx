import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { Copyright } from "./Copyright";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    bottom="0"
    py="12"
    mt="20"
    bgColor="black"
    p="40"
    px={{ base: "4", md: "8" }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <div style={{ flex: "1" }}>
          <Logo />
          <div style={{ fontSize: 30, fontWeight: "bold" }}>
            Pune Covid Info
          </div>
        </div>

        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
  </Box>
);
