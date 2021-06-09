import { Badge, Box, Grid } from "@chakra-ui/core";
import { useGetRatCentersQuery } from "../generated/graphql";
import { Footer } from "./Footer";

interface PlasmaProps {}

export const RATCenters: React.FC<PlasmaProps> = ({}) => {
  const [{ data }] = useGetRatCentersQuery();

  return (
    <>
      <Grid ml={40} mt={10} mr={40} gap={6}>
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getRATCenter.map((value) => (
            <Box
              key={value.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {value.hosp_Name}
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

                <Box d="flex" mt={1} alignItems="baseline">
                  <a
                    target="_blank"
                    href={value.location}
                    className="text-white text-small cursor-pointer"
                  >
                    <Badge
                      borderRadius="full"
                      variantColor="green"
                      px="2"
                      py="1"
                    >
                      Directions
                    </Badge>
                  </a>
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
