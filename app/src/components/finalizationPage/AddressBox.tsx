import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Name } from "./addressBoxFields/Name";
import { Surname } from "./addressBoxFields/Surname";
import { Email } from "./addressBoxFields/Email";
import { PhoneNumber } from "./addressBoxFields/PhoneNumber";
import { Street } from "./addressBoxFields/Street";
import { HouseNumber } from "./addressBoxFields/HouseNumber";
import { ApartmentNumber } from "./addressBoxFields/ApartmentNumber";
import { ZipCode } from "./addressBoxFields/ZipCode";
import { City } from "./addressBoxFields/City";
import { FinalizationTitle } from "./FinalizationTitle";

export const AddressBox = React.memo(
  ({ errorEmptyAddressFields }: { errorEmptyAddressFields: string | null }) => {
    ////UI
    return (
      <>
        {/* ADDRESS */}
        <Paper
          sx={{
            margin: "90px 7px 0 0",
            padding: "20px",
          }}
        >
          <FinalizationTitle text={"1. Enter your shipping address:"} />
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Name />
            <Surname />
            <Email />
            <PhoneNumber />
            <Street />
            <Box sx={{ display: "flex", width: "100%" }}>
              <HouseNumber />
              <ApartmentNumber />
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>
              <ZipCode />
              <City />
            </Box>
            <Typography sx={{ color: "red" }}>
              {errorEmptyAddressFields}
            </Typography>
          </Box>
        </Paper>
      </>
    );
  }
);
