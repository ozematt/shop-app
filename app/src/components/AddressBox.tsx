import { Box, Paper, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../lib/types/addressTypes";
import React from "react";
import { Name } from "./addressFields/Name";
import { Surname } from "./addressFields/Surname";
import { Email } from "./addressFields/Email";
import { PhoneNumber } from "./addressFields/PhoneNumber";
import { Street } from "./addressFields/Street";
import { HouseNumber } from "./addressFields/HouseNumber";
import { ApartmentNumber } from "./addressFields/ApartmentNumber";
import { ZipCode } from "./addressFields/ZipCode";
import { City } from "./addressFields/City";

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
          <Typography variant="h5" sx={{ padding: "10px" }}>
            1. Enter your shipping address:
          </Typography>

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
            <Box>
              <HouseNumber />
              <ApartmentNumber />
            </Box>
            <Box>
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
