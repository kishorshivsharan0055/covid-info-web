import { Box, Divider, Grid } from "@chakra-ui/core";
import { Footer } from "./Footer";

interface RemProps {}

export const RemdesivirInfo: React.FC<RemProps> = ({}) => {
  return (
    <>
      <Grid ml={40} mt={10} mr={40} gap={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              style={{ flexFlow: "wrap" }}
            >
              A control room has been set up to facilitate the distribution of
              Remdesivir/Tocilizumab injections. If you need such injections,
              call <br /> 020-26123371 or 1077 toll free <br />
              <div style={{ color: "skyblue" }}>
                <a href="https://twitter.com/mohol_murlidhar/status/1381226555884544001">
                  @mohol_murlidhar
                </a>
              </div>
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              For Remdesivir injection
              <br />
              Cipla customer care : 8657311088; info.availability@cipla.com
              <br />
              Hetero Helpline : 18001034696; whatsapp : 9320985814;
              covifor@heterohealthcare.com <br />
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Hetero Healthcare (Mumbai)
              <br />
              Priorities
              <br />
              Mr Yogesh Patil -9322067716 yogeshpatil@heterohealthcare.com
              <br />
              Mr Pathik Shah -9769727771
              <br />
              Mr Vaibhav Khairnar -9272372811
              <br />
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Mr Bose 9347341757 bose@heterohealthcare.com
              <br />
              Mr Vijay thorat 9820748050
              <br />
              Mr Shastri 9820528432
              <br />
              Mr Shenoy – 93231 43036
              <br />
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Hetero International & Cipla
              <br />
              Mr Pankaj Thakur : +91 8433946055
              <br />
              Mr Bhavesh Shah : +91 9821044912
              <br />
              Mr Rudra : +91 9833809177
              <br />
              Mr Subhadeep Sinha : +91 9393922434
              <br />
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Distributors for Remdesivir
              <br />
              1. Nexus : +91 9664400575
              <br />
              2. Royal : +91 9820344456
              <br />
            </Box>

            <Divider />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Supply strictly to Hospitals / Patients only after verifying
              prescription.
              <br />
              - It's better to add their numbers on what's app and send
              following documents at first and than co-ordinate
              <br />
              <br />
              - MEDICAL REPORT
              <br />
              - DOCTOR'S Prescription
              <br />
              - Aadhar card
              <br />
              <br />
              Bank Details
              <br />
              HETERO HEALTHCARE LTD.
              <br />
              CC A/C DETAILS :<br />
              BANK NAME : AXIS BANK LTD.
              <br />
              A/C NO. 917030029025790
              <br />
              IFSC CODE : UTIB0001634
              <br />
              <br />
              Hetero healthcare Head Office in Mumbai
              <br />
              A / B – 201 / 202 Dipti Classic,
              <br />
              32 / 34, W.T. SUREN ROAD,
              <br />
              ANDHERI (E), MUMBAI – 400 093. INDIA.
              <br />
              <br />
              For ACTEMRA (tocilizumab) – Cipla Ltd
              <br />
              <br />
              S.K. Distributors
              <br />
              Unit no 1, Bombay industrial estate,
              <br />
              Narayan Nagar, Off LBS Marg,
              <br />
              NSS Road, Next to Union Bank of India, Ghatkopar West, Mumbai
              400086
              <br />
              email- hospitaldiv@sk1932.com
              <br />
              Mr Dhaval +919619861781
              <br />
              +919930220993
              <br />
              +918879142101
              <br />
              <br />
              BYCULLA PHARMACY & STORES ***
              <br />
              (PROP.FARMACROSS(I)PVT.LTD) ( MASINA HOSPITAL )<br />
              AT-MASINA HOSPITAL SANT SAVTA MARG
              <br />
              MASINA BYCULLA EAST
              <br />
              MUMBAI - 400027
              <br />
              MR.Altaf - 09870008051 Day time 9.00 Am to 9 Pm
              <br />
              Night shift : Mr Arun 02261313000/61313001
              <br />
              <br />
              CIPLA LTD
              <br />
              Customer care : 8657311088
              <br />
              info.availability@cipla.com
              <br />
              Mr Vinayagam – 99943 99990
              <br />
              Mr Dipendra – 75079 46363
              <br />
              Mr Apoorv – 96626 12576.
              <br />
            </Box>

            <img
              style={{
                justifyContent: "center",
                alignSelf: "center",
                margin: 40,
              }}
              src="https://covidpune.com/images/remdesivir-data-2.jpeg"
            />

            <img
              style={{
                justifyContent: "center",
                alignSelf: "center",
                margin: 40,
              }}
              src="https://covidpune.com/images/remedisvir-info-maha-times.jpeg"
            />
          </Box>
        </Box>
      </Grid>

      <Footer />
    </>
  );
};
