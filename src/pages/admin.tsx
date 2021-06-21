import { Box, Button } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import { CreateBeds } from "../components/Create/createBeds";
import { CreatePlasma } from "../components/Create/createPlasma";
import { CreateRAT } from "../components/Create/createRAT";
import { CreateTiffin } from "../components/Create/createTiffin";
import { NavBar } from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";

const Admin = () => {
  const [Variant1, setVariant1] = useState("solid");
  const [Variant2, setVariant2] = useState("outline");
  const [Variant3, setVariant3] = useState("outline");
  const [Variant4, setVariant4] = useState("outline");

  const showInfo = (selectOptions: string) => {
    setVariant1("outline");
    setVariant2("outline");
    setVariant3("outline");
    setVariant4("outline");

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
        <Button m="2" variant={Variant1 as any} onClick={() => showInfo("1")}>
          Beds
        </Button>

        <Button m="2" variant={Variant2 as any} onClick={() => showInfo("2")}>
          Plasma
        </Button>

        <Button m="2" variant={Variant3 as any} onClick={() => showInfo("3")}>
          Rapid Antigen Test Centers
        </Button>

        <Button m="2" variant={Variant4 as any} onClick={() => showInfo("4")}>
          Tiffin/Food
        </Button>
      </Box>

      {Variant1 == "solid" && <CreateBeds />}

      {Variant2 == "solid" && <CreatePlasma />}

      {Variant3 == "solid" && <CreateRAT />}

      {Variant4 == "solid" && <CreateTiffin />}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Admin);
