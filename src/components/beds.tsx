import { Badge, Box, Divider, Grid } from "@chakra-ui/core";
import { useGetBedsQuery } from "../generated/graphql";
import { Footer } from "./Footer";
interface bedProps {}

export const Beds: React.FC<bedProps> = ({}) => {
  const [{ data }] = useGetBedsQuery();

  return (
    <>
      <Grid ml={20} mt={10} mr={20} templateColumns="repeat(1, 1fr)" gap={6}>
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getBeds.map((value) => (
            <Box
              key={value.id}
              mr={20}
              ml={20}
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

                <Box lineHeight="tight" isTruncated>
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

                <Box d="flex" alignItems="baseline">
                  <a
                    target="_blank"
                    href={value.location}
                    className="text-white text-small cursor-pointer"
                  >
                    <Badge borderRadius="full" variantColor="purple" px="2">
                      Direction
                    </Badge>
                  </a>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    8 Minutes ago
                  </Box>
                </Box>

                <Divider></Divider>

                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2">
                    PCM
                  </Badge>
                  <Badge ml={1} borderRadius="full" px="2">
                    Chargeable
                  </Badge>
                </Box>

                <Box d="flex" alignItems="baseline" mt="2">
                  <Box>
                    Without Oxygen
                    <Box d="flex" alignItems="baseline">
                      <Badge ml={1} variantColor="green" px="2">
                        {value.without_oxygen_left}
                      </Badge>
                      {"  "} / {value.without_oxygen}
                    </Box>
                  </Box>

                  <Box ml={"auto"}>
                    With Oxygen
                    <Box
                      d="flex"
                      alignItems="baseline"
                      style={{ marginLeft: 20 }}
                    >
                      <Badge ml={1} variantColor="green" px="2">
                        {value.with_oxygen_left}
                      </Badge>
                      {"  "} /{value.with_oxygen}
                    </Box>
                  </Box>
                </Box>

                <Box d="flex" mt={8} alignItems="baseline">
                  <Box>
                    ICU
                    <Box d="flex" alignItems="baseline">
                      <Badge ml={1} variantColor="green" px="2">
                        {value.icu_left}
                      </Badge>
                      {"  "} /{value.icu}
                    </Box>
                  </Box>

                  <Box ml={"auto"}>
                    ICU with Ventilator
                    <Box d="flex" alignItems="baseline" ml={60}>
                      <Badge ml={1} variantColor="green" px="2">
                        {value.icu_ventilator_left}
                      </Badge>
                      {"  "} /{value.icu_ventilator}
                    </Box>
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
