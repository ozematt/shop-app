import { Box, Button, Paper, TextField, Typography } from "@mui/material";

// import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Address } from "../pages/Finalization";
import { useState } from "react";

export const AddressBox = () => {
  const [addressSummary, setAddressSummary] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext<Address>();

  // const [paymentMethod, setPaymentMethod] = useState<string>("");
  const hasErrors = Object.keys(errors).length > 0;

  const handleAddress = () => {
    const values: Address = getValues() as Address;
    const requiredFields: (keyof Address)[] = [
      "name",
      "surname",
      "email",
      "phone",
      "street",
      "houseNumber",
      "zipCode",
      "city",
    ];

    const allFieldsFilled = requiredFields.every((field) => {
      const value = values[field];

      return value && (typeof value === "string" ? value.trim() !== "" : true);
    });

    if (!hasErrors && allFieldsFilled) {
      setAddressSummary(true);
    }
    console.log(getValues());
  };

  const handleAddressEdit = () => {
    setAddressSummary(!addressSummary);
  };
  console.log(hasErrors);

  return (
    <>
      <Paper
        sx={{
          marginTop: "20px",
          width: "100%",
        }}
      >
        <Typography variant="h5" sx={{ marginLeft: "15px", padding: "5px" }}>
          Enter your shipping address:
        </Typography>
      </Paper>
      {/* ADDRESS */}
      <Paper
        sx={{
          margin: "14px 7px 0 0",
          //   height: "100vh",
        }}
      >
        {!addressSummary ? (
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
            <Button
              variant="contained"
              sx={{ marginTop: "20px", width: "250px" }}
              onClick={handleAddress}
            >
              Save Address
            </Button>
          </Box>
        ) : (
          <Box sx={{ padding: "20px" }}>
            <Box sx={{ marginTop: "15px" }}>
              <p> Name and surname:</p>
              <Typography variant="h5">
                {" "}
                {getValues().name} {getValues().surname}
              </Typography>
            </Box>

            <Box sx={{ marginTop: "15px" }}>
              <p>Delivery address:</p>{" "}
              <Typography variant="h5">
                {getValues().street} {getValues().houseNumber}
                {getValues().apartmentNumber &&
                  "/" + getValues().apartmentNumber}
              </Typography>
              <Typography variant="h5">
                {" "}
                {getValues().zipCode} {getValues().city}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px", display: "flex", gap: "30px" }}>
              <Box>
                <p>Email:</p>{" "}
                <Typography variant="h5">{getValues().email}</Typography>
              </Box>
              <Box>
                <p>Phone number:</p>
                <Typography variant="h5"> {getValues().phone}</Typography>
              </Box>
            </Box>
            <Button
              onClick={handleAddressEdit}
              variant="outlined"
              sx={{ marginTop: "30px" }}
            >
              Edit
            </Button>
          </Box>
        )}
      </Paper>
    </>
  );
};
