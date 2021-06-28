import { Badge, Box, Button, Divider, Grid } from "@chakra-ui/core";
import { useState } from "react";
import { useGetBedsQuery } from "../generated/graphql";
import { getTimeDistance } from "../utils/utils";
import { Footer } from "./Footer";
interface bedProps {}

export const Beds: React.FC<bedProps> = ({}) => {
  const [{ data }] = useGetBedsQuery();

  const [Variant1, setVariant1] = useState("solid");
  const [Variant3, setVariant3] = useState("outline");
  const [Variant4, setVariant4] = useState("outline");
  const [Variant5, setVariant5] = useState("outline");
  const [Variant6, setVariant6] = useState("outline");

  const showInfo = (selectOptions: string) => {
    setVariant1("outline");
    setVariant3("outline");
    setVariant4("outline");
    setVariant5("outline");
    setVariant6("outline");

    switch (selectOptions) {
      case "1":
        setVariant1("solid");
        break;

      case "3":
        setVariant3("solid");
        break;

      case "4":
        setVariant4("solid");
        break;

      case "5":
        setVariant5("solid");
        break;

      case "6":
        setVariant6("solid");
        break;

      default:
        break;
    }
  };

  const available = () => {
    return (
      <Grid ml={20} mt={10} mr={20} templateColumns="repeat(1, 1fr)">
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getBeds.map((value) => <div>{bedBox(value)}</div>)
        )}
      </Grid>
    );
  };

  const withOxygenFilter = () => {
    return (
      <Grid ml={20} mt={10} mr={20} templateColumns="repeat(1, 1fr)">
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getBeds.map((value) => (
            <div>{value.with_oxygen_left > 0 && bedBox(value)}</div>
          ))
        )}
      </Grid>
    );
  };

  const withoutOxygenFilter = () => {
    return (
      <Grid ml={20} mt={10} mr={20} templateColumns="repeat(1, 1fr)">
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getBeds.map((value) => (
            <div>{value.without_oxygen_left > 0 && bedBox(value)}</div>
          ))
        )}
      </Grid>
    );
  };

  const icuFilter = () => {
    return (
      <Grid ml={20} mt={10} mr={20} templateColumns="repeat(1, 1fr)">
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getBeds.map((value) => (
            <div>{value.icu_left > 0 && bedBox(value)}</div>
          ))
        )}
      </Grid>
    );
  };

  const icuVentilatorFilter = () => {
    return (
      <Grid ml={20} mt={10} mr={20} templateColumns="repeat(1, 1fr)">
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.getBeds.map((value) => (
            <>{value.icu_ventilator_left > 0 && bedBox(value)}</>
          ))
        )}
      </Grid>
    );
  };

  const bedBox = (value: any) => {
    return (
      <Box
        key={value.id}
        mr={20}
        ml={20}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt={5}
        mb={5}
      >
        {console.log(value.hosp_Name)}
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
              {getTimeDistance(value.createdAt)}
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
              <Box d="flex" alignItems="baseline" style={{ marginLeft: 20 }}>
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
    );
  };

  return (
    <>
      <div>
        <Box
          ml="20"
          mr="20"
          flex="1"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="2"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          textAlign="center"
        >
          <div style={{ fontSize: 20, fontWeight: "bold" }}>Filters</div>
          <div>
            <Button
              m="2"
              borderRadius={25}
              variant={Variant1 as any}
              onClick={() => showInfo("1")}
            >
              Available Only
            </Button>

            <Button
              m="2"
              borderRadius={25}
              variant={Variant3 as any}
              onClick={() => showInfo("3")}
            >
              With Oxygen
            </Button>

            <Button
              m="2"
              borderRadius={25}
              variant={Variant4 as any}
              onClick={() => showInfo("4")}
            >
              Without Oxygen
            </Button>

            <Button
              m="2"
              borderRadius={25}
              variant={Variant5 as any}
              onClick={() => showInfo("5")}
            >
              ICU
            </Button>

            <Button
              m="2"
              borderRadius={25}
              variant={Variant6 as any}
              onClick={() => showInfo("6")}
            >
              ICU with Ventilator
            </Button>
          </div>
        </Box>
      </div>

      {Variant1 == "solid" && available()}

      {Variant3 == "solid" && withOxygenFilter()}

      {Variant4 == "solid" && withoutOxygenFilter()}

      {Variant5 == "solid" && icuFilter()}

      {Variant6 == "solid" && icuVentilatorFilter()}

      <Footer />
    </>
  );
};
