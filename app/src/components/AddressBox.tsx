import { Box, Paper, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../types/addressTypes";

export const AddressBox = () => {
  //// DATA
  const {
    register,
    formState: { errors },
  } = useFormContext<Address>();

  ////UI
  return (
    <>
      <Box>
        {/* ADDRESS */}
        <Paper
          sx={{
            margin: "90px 7px 0 0",
          }}
        >
          <Typography variant="h5" sx={{ padding: "20px" }}>
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
            {/* NAME */}
            <TextField
              sx={{ width: "400px" }}
              label="Name"
              variant="outlined"
              margin="dense"
              {...register("name", {
                minLength: {
                  value: 2,
                  message: "Name must by at last 2 characters long",
                },
                required: "Name is required",
              })}
              error={!!errors.name}
              helperText={errors.name?.message?.toString()}
            />

            {/* SURNAME */}
            <TextField
              sx={{ width: "400px" }}
              label="Surname"
              variant="outlined"
              margin="dense"
              {...register("surname", {
                minLength: {
                  value: 2,
                  message: "Surname must by at last 2 characters long",
                },
                required: "Surname is required",
              })}
              error={!!errors.surname}
              helperText={errors.surname?.message?.toString()}
            />
            {/* EMAIL */}
            <TextField
              sx={{ width: "400px" }}
              type="email"
              label="Email"
              variant="outlined"
              margin="dense"
              {...register("email", {
                pattern: {
                  value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                  message: "Invalid email address",
                },
                required: "Email is required",
              })}
              error={!!errors.email}
              helperText={errors.email?.message?.toString()}
            />
            {/* PHONE */}
            <TextField
              type="tel"
              sx={{ width: "400px" }}
              label="Phone number"
              variant="outlined"
              margin="dense"
              {...register("phone", {
                minLength: {
                  value: 9,
                  message: "Phone number must have at last 9 characters",
                },
                required: "Phone is required",
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message?.toString()}
            />
            {/* STREET */}
            <TextField
              sx={{ width: "400px", marginTop: "30px" }}
              label="Street"
              variant="outlined"
              margin="dense"
              {...register("street", {
                minLength: {
                  value: 2,
                  message: " Street must by at last 2 characters long ",
                },
                required: "Street is required",
              })}
              error={!!errors.street}
              helperText={errors.street?.message?.toString()}
            />

            <Box>
              {" "}
              {/* HOUSE NUMBER */}
              <TextField
                type="number"
                sx={{ width: "190px" }}
                label="House number"
                variant="outlined"
                margin="dense"
                {...register("houseNumber", {
                  required: "House number is required",
                })}
                error={!!errors.houseNumber}
                helperText={errors.houseNumber?.message?.toString()}
              />
              {/* APARTMENT NUMBER */}
              <TextField
                type="number"
                sx={{ width: "190px", marginLeft: "20px" }}
                label="Apartment number"
                variant="outlined"
                margin="dense"
                {...register("apartmentNumber")}
                error={!!errors.apartmentNumber}
                helperText={errors.apartmentNumber?.message?.toString()}
              />
            </Box>
            <Box>
              {/* ZIP CODE */}
              <TextField
                sx={{ width: "190px" }}
                label="Zip-Code"
                variant="outlined"
                margin="dense"
                {...register("zipCode", {
                  pattern: {
                    value: /^([0-9]{2})(-[0-9]{3})?$/i,
                    message: "Invalid zip code",
                  },
                  required: "Zip code is required",
                })}
                error={!!errors.zipCode}
                helperText={errors.zipCode?.message?.toString()}
              />

              {/* CITY */}
              <TextField
                sx={{ width: "190px", marginLeft: "20px" }}
                label="City"
                variant="outlined"
                margin="dense"
                {...register("city", {
                  minLength: {
                    value: 2,
                    message: "Name must by at last 2 characters long",
                  },
                  required: "City is required",
                })}
                error={!!errors.city}
                helperText={errors.city?.message?.toString()}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
