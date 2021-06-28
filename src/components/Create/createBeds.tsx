import { Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { Footer } from "../../components/Footer";
import { InputField } from "../../components/InputField";
import {
  CreateBedsMutation,
  useCreateBedsMutation,
} from "../../generated/graphql";
import { Wrapper } from "../Wrapper";
import { useToast, Box } from "@chakra-ui/react";
import { OperationResult } from "urql";

interface bedProps {}

export const CreateBeds: React.FC<bedProps> = ({}) => {
  const [, createBeds] = useCreateBedsMutation();
  const toast = useToast();

  const addToast = (response: OperationResult<CreateBedsMutation>) => {
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
          Add Bed Details
        </div>
        <Formik
          initialValues={{
            hosp_Name: "",
            phone_no: "",
            address: "",
            with_oxygen: 0,
            without_oxygen: 0,
            icu: 0,
            icu_ventilator: 0,
            with_oxygen_left: 0,
            without_oxygen_left: 0,
            icu_left: 0,
            icu_ventilator_left: 0,
            location: "",
          }}
          onSubmit={async (input) => {
            const response = await createBeds({ input: input });
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
              <InputField
                name="with_oxygen"
                placeholder="Total With Oxygen"
                label="Total With Oxygen"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />
              <InputField
                name="with_oxygen_left"
                placeholder="With Oxygen left"
                label="With Oxygen left"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />
              <InputField
                name="without_oxygen"
                placeholder="Total Without Oxygen"
                label="Total Without Oxygen"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <InputField
                name="without_oxygen_left"
                placeholder="Total Without Oxygen"
                label="Total Without Oxygen"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <InputField
                name="icu"
                placeholder="Total ICU"
                label="Total ICU"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <InputField
                name="icu_left"
                placeholder="ICU left"
                label="ICU left"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <InputField
                name="icu_ventilator"
                placeholder="Total ICU Ventilator"
                label="Total ICU Ventilator"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <InputField
                name="icu_ventilator_left"
                placeholder="ICU Ventilator Left"
                label="ICU Ventilator Left"
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
