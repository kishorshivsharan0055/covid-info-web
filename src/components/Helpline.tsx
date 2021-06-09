import { Box, Divider, Grid } from "@chakra-ui/core";
import { Footer } from "./Footer";

interface ambulanceProps {}

export const Helpline: React.FC<ambulanceProps> = ({}) => {
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
              <a href="tel:108">Ambulance - 108</a>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Pune Zp Control Room
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:02026138082">020-2613-8082/83</a>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              PMC Control Room
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:02025502110">020-2550-2110</a>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              PCMC Control Room
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:02067331151">020-6733-1151/52</a>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Kolhapur Control Room
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:02312659232">0231-265-9232</a>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Sangli Control Room
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:02332373032">0233-237-3032</a>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Solapur Control Room
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:18002335044">1800-233-5044</a>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:02172310745">0217-231-0745</a>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Satara Control Room
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <a href="tel:02162233025">02162-233025</a>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Footer />
    </>
  );
};
