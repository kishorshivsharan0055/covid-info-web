import { Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import {
  CreatePlasmaMutation,
  useCreatePlasmaMutation,
} from "../../generated/graphql";
import { Footer } from "../Footer";
import { InputField } from "../InputField";
import { Wrapper } from "../Wrapper";
import { useToast, Box } from "@chakra-ui/react";
import { OperationResult } from "urql";

interface PlasmaProps {}

export const CreatePlasma: React.FC<PlasmaProps> = ({}) => {
  const [, createPlasma] = useCreatePlasmaMutation();
  const toast = useToast();

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
            <div>Error occued while saving data</div>
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
          }}
          onSubmit={async (input) => {
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
