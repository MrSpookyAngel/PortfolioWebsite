import { Box, Stack, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

export default function Contact() {
  return (
    <Stack spacing="2rem" padding="2rem" sx={{ alignItems: "center" }}>
      <Typography variant="h3" fontWeight="bold" color="primary">
        Contact
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <ContactForm />
        <ContactInformation />
      </Box>
    </Stack>
  );
}
