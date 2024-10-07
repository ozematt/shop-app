import { Box, Container, CssBaseline } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { AddressBox } from "../components/finalizationPage/AddressBox";
import { PaymentMethod } from "../components/finalizationPage/PaymentMethodBox";
import { Summary } from "../components/finalizationPageSummary/Summary";
import { ConfirmInfoBox } from "../components/finalizationPage/ConfirmInfoBox";
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
