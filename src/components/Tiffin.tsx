import { Box, Divider, Grid } from "@chakra-ui/core";
import { useGetTiffinQuery } from "../generated/graphql";
import { Footer } from "./Footer";

interface tiffinProps {}

export const Tiffin: React.FC<tiffinProps> = ({}) => {
  const [{ data }] = useGetTiffinQuery();

  return (
    <>
      <Grid ml={40} mt={10} mr={40} gap={6}>
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getTiffin.map((value) => (
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {value.provider_name}
                </Box>

                <Box lineHeight="tight" fontSize={15} isTruncated>
                  {value.phone_no}
                </Box>

                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  {value.address}
                </Box>

                <Box fontSize="sm" mt={2}>
                  Price:
                  <Box as="span" color="gray.400" ml={1} fontSize="sm">
                    {value.price}
                  </Box>
                </Box>

                <Divider />

                <Box fontSize="sm">
                  Delivery:
                  <Box as="span" color="gray.400" ml={1} fontSize="sm">
                    {value.delivery}
                  </Box>
                </Box>

                <Divider />

                <Box fontSize="sm">
                  Food:
                  <Box as="span" color="gray.400" ml={1} fontSize="sm">
                    {value.food}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Grid>

      <Footer />
    </>
  );
};
