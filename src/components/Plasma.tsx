import { Badge, Box, Divider, Grid } from "@chakra-ui/core";
import { useGetPlasmaQuery } from "../generated/graphql";
import { getTimeDistance } from "../utils/utils";
import { Footer } from "./Footer";

interface PlasmaProps {}

export const Plasma: React.FC<PlasmaProps> = ({}) => {
  const [{ data }] = useGetPlasmaQuery();

  return (
    <>
      <Grid ml={40} mt={10} mr={40} gap={6}>
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getPlasma.map((value) => (
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

                <Box lineHeight="tight" isTruncated>
                  {value.phone_no}
                </Box>

                <Box lineHeight="tight" isTruncated>
                  {value.mail_id}
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
                    <Badge borderRadius="full" variantColor="green" px="2">
                      Directions
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
                    {getTimeDistance(value.createdAt)}
                  </Box>
                </Box>

                <Divider></Divider>

                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" variantColor="red" px="5" py="3">
                    A +ve - 12
                  </Badge>
                  <Badge
                    ml={1}
                    borderRadius="full"
                    variantColor="red"
                    px="5"
                    py="3"
                  >
                    O +ve - 15
                  </Badge>
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
