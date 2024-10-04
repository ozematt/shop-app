import { Box, Container, CssBaseline } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { AddressBox } from "../components/AddressBox";
import { PaymentMethod } from "../components/PaymentMethodBox";
import { Summary } from "../components/Summary";
import { ConfirmInfoBox } from "../components/ConfirmInfoBox";
import { useFinalization } from "../lib/hooks/useFinalization";

export const Finalization = () => {
  //
  ////DATA
  const {
    methods,
    summaryView,
    onSubmit,
    errorEmptyAddressFields,
    handleConfirmButton,
    handleSummaryView,
  } = useFinalization();

  ////UI
  return (
    <>
      <FormProvider {...methods}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
            {!summaryView ? (
              <>
                <AddressBox errorEmptyAddressFields={errorEmptyAddressFields} />
                <PaymentMethod />
                <ConfirmInfoBox handleConfirmButton={handleConfirmButton} />
              </>
            ) : (
              <Summary handleSummaryView={handleSummaryView} />
            )}
          </Box>
        </Container>
      </FormProvider>
    </>
  );
};
