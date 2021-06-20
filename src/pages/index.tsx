import { Box, Button } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import { Ambulance } from "../components/Ambulance";
import { Beds } from "../components/beds";
import { Helpline } from "../components/Helpline";
import { NavBar } from "../components/NavBar";
import { Plasma } from "../components/Plasma";
import { RATCenters } from "../components/RATCenters";
import { Tiffin } from "../components/Tiffin";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [Variant1, setVariant1] = useState("solid");
  const [Variant2, setVariant2] = useState("outline");
  const [Variant3, setVariant3] = useState("outline");
  const [Variant4, setVariant4] = useState("outline");
  const [Variant5, setVariant5] = useState("outline");
  const [Variant6, setVariant6] = useState("outline");
  const [Variant7, setVariant7] = useState("outline");

  const showInfo = (selectOptions: string) => {
    setVariant1("outline");
    setVariant2("outline");
    setVariant3("outline");
    setVariant4("outline");
    setVariant5("outline");
    setVariant6("outline");
    setVariant7("outline");

    switch (selectOptions) {
      case "1":
        setVariant1("solid");
        break;

      case "2":
        setVariant2("solid");
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

      case "7":
        setVariant7("solid");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <NavBar />

      <Box
        ml="20"
        mr="20"
        mt="5"
        flex="1"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="5"
      >
        <Button m="2" variant={Variant1} onClick={() => showInfo("1")}>
          Beds
        </Button>

        <Button m="2" variant={Variant2} onClick={() => showInfo("2")}>
          Plasma
        </Button>

        <Button m="2" variant={Variant3} onClick={() => showInfo("3")}>
          Rapid Antigen Test Centers
        </Button>

        <Button m="2" variant={Variant4} onClick={() => showInfo("4")}>
          Ambulance
        </Button>

        <Button m="2" variant={Variant5} onClick={() => showInfo("5")}>
          24x7 Helpline
        </Button>

        <Button m="2" variant={Variant6} onClick={() => showInfo("6")}>
          Remdesivir Information
        </Button>

        <Button m="2" variant={Variant7} onClick={() => showInfo("7")}>
          Tiffin/Food
        </Button>
      </Box>

      {Variant1 == "solid" && <Beds />}

      {Variant2 == "solid" && <Plasma />}

      {Variant3 == "solid" && <RATCenters />}

      {Variant4 == "solid" && <Ambulance />}

      {Variant5 == "solid" && <Helpline />}

      {Variant6 == "solid" && <Beds />}

      {Variant7 == "solid" && <Tiffin />}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
