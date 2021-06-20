import { Box, Grid } from "@chakra-ui/core";
import { Stack } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./Copyright";
import { Logo } from "./Logo";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    width="100%"
    position="absolute"
    bottom="0"
    py="12"
    mt="20"
    backgroundColor="black"
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
      </Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
  </Box>
);

interface ambulanceProps {}

export const Ambulance: React.FC<ambulanceProps> = ({}) => {
  const property = {
    title: "HelpNow",
    discription:
      "24x7 ambulance service with trained paramedics for any medical emergency",
    phone: "8822288222",
  };

  return (
    <>
      <Grid ml={40} mt={10} mr={40} gap={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box lineHeight="tight" fontSize={15} isTruncated>
              <a href="tel:8822288222">{property.phone}</a>
            </Box>

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {property.discription}
            </Box>
          </Box>
        </Box>
      </Grid>

      <Footer />
    </>
  );
};
