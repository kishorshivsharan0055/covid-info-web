import { Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import {
  CreateTiffinMutation,
  useCreateTiffinMutation,
} from "../../generated/graphql";
import { Footer } from "../Footer";
import { InputField } from "../InputField";
import { Wrapper } from "../Wrapper";
import { useToast, Box } from "@chakra-ui/react";
import { OperationResult } from "urql";

interface tiffinProps {}

export const CreateTiffin: React.FC<tiffinProps> = ({}) => {
  const [, createTiffin] = useCreateTiffinMutation();
  const toast = useToast();

  const addToast = (response: OperationResult<CreateTiffinMutation>) => {
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
          Add Tiffin Details
        </div>
        <Formik
          initialValues={{
            provider_name: "",
            phone_no: "",
            address: "",
            price: "",
            delivery: "",
            food: "",
          }}
          onSubmit={async (input) => {
            const response = await createTiffin({ input: input });
            addToast(response);
            input.provider_name = "";
            input.phone_no = "";
            input.address = "";
            input.price = "";
            input.delivery = "";
            input.food = "";
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="provider_name"
                placeholder="Provider"
                label="Provider"
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
                name="price"
                placeholder="Price"
                label="Price"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <InputField
                name="delivery"
                placeholder="Delivery"
                label="Delivery"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  marginBottom: 15,
                }}
              />

              <InputField
                name="food"
                placeholder="Food"
                label="Food"
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
