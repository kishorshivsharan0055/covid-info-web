import { Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import {
  CreatePlasmaMutation,
  useCreatePlasmaMutation,
} from "../../generated/graphql";
import { Footer } from "../Footer";
import { InputField } from "../InputField";
import { Wrapper } from "../Wrapper";
import { useToast, Box, Input } from "@chakra-ui/react";
import { OperationResult } from "urql";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { motion, AnimatePresence } from "framer-motion";

interface PlasmaProps {}

export const CreatePlasma: React.FC<PlasmaProps> = ({}) => {
  const [, createPlasma] = useCreatePlasmaMutation();
  const toast = useToast();
  const [bloodGrp, setBloodGrp] = useState<Array<string>>(["", ""]);
  const [selected, setSelected] = useState("");

  const addBloodGrp = () => {
    setBloodGrp([...bloodGrp, ""]);
    bloodGrp.map((el, index) => {
      console.log(el, index);
    });
  };
  const deleteBloodGrp = () =>
    setBloodGrp(bloodGrp.slice(0, bloodGrp.length - 1));
  const insertBloodGrp = (e: ChangeEvent<HTMLInputElement>, index: number) =>
    setBloodGrp(
      bloodGrp.map((el, i) =>
        i === index ? selected + " - " + e.target.value : el
      )
    );

  const bloodGrpOptions = [
    "A+VE",
    "A-VE",
    "O+VE",
    "O-VE",
    "B+VE",
    "B-VE",
    "AB+VE",
    "AB-VE",
  ];

  const addToast = (response: OperationResult<CreatePlasmaMutation>) => {
    if (response.error?.message) {
      toast({
        position: "bottom",
        render: () => (
          <Box
            style={{ flex: 1 }}
            borderRadius={5}
            color="white"
            mb={50}
            p={8}
            bg="#ff4444"
          >
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Error</div>
            <div>Error occured while saving data</div>
          </Box>
        ),
      });
    } else {
      toast({
        position: "bottom",
        render: () => (
          <Box
            style={{ flex: 1 }}
            borderRadius={5}
            color="white"
            mb={50}
            p={8}
            bg="#5cb85c"
          >
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Done</div>
            <div>Data has been successfully saved</div>
          </Box>
        ),
      });
    }
  };

  return (
    <>
      <Wrapper varient="regular">
        <div style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
          Add Plasma Details
        </div>
        <Formik
          initialValues={{
            hosp_Name: "",
            phone_no: "",
            mail_id: "",
            address: "",
            location: "",
            blood_grp: [""],
          }}
          onSubmit={async (input) => {
            input.blood_grp = bloodGrp;
            const response = await createPlasma({ input: input });
            addToast(response);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="hosp_Name"
                placeholder="Hospital Name2"
                label="Hospital Name"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />
              <InputField
                name="phone_no"
                placeholder="Phone No"
                label="Phone No"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />
              <InputField
                name="mail_id"
                placeholder="Mail ID"
                label="Mail ID"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />
              <InputField
                name="address"
                placeholder="Address"
                label="Address"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />
              <InputField
                name="location"
                placeholder="Location"
                label="Location"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <div style={{ fontSize: 18 }}>Blood group</div>
              <AnimatePresence>
                {bloodGrp.map((_el, index) => (
                  <motion.div
                    initial={{
                      y: -32,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -32,
                      opacity: 0,
                    }}
                    transition={{
                      bounce: 0.25,
                      duration: 0.2,
                    }}
                    key={index}
                    style={{
                      flexDirection: "row",
                      margin: 4,
                      alignItems: "center",
                    }}
                  >
                    <Box d="flex" flexDirection="row" alignItems="center">
                      <Box marginRight={20}>
                        <Dropdown
                          options={bloodGrpOptions}
                          onChange={(text) => {
                            setSelected(text.value);
                          }}
                        />
                      </Box>

                      <Input
                        name="quantity"
                        placeholder="Quantity"
                        width={75}
                        color="grey"
                        onChange={(e) => insertBloodGrp(e, index)}
                        _placeholder={{ color: "grey", padding: 5 }}
                        height={40}
                      />

                      {index === bloodGrp.length - 1 && (
                        <Box d="flex" flexDirection="row">
                          <img
                            style={{ margin: 5, marginLeft: 5 }}
                            onClick={addBloodGrp}
                            width={30}
                            height={30}
                            src="/add.png"
                            alt="Add "
                            className="h-6"
                          />

                          {index !== 0 && (
                            <img
                              style={{ margin: 5 }}
                              onClick={deleteBloodGrp}
                              width={30}
                              height={30}
                              src="/delete.png"
                              alt="Delete "
                              className="h-3"
                            />
                          )}
                        </Box>
                      )}
                    </Box>
                  </motion.div>
                ))}
              </AnimatePresence>
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                variantColor="teal"
              >
                Save Details
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>

      <Footer />
    </>
  );
};
