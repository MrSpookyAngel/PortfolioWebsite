import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

export default function Contact() {
  return (
    <Stack
      spacing="2rem"
      padding="2rem"
      minHeight="100vh"
      marginBottom="6rem"
      sx={{ alignItems: "center" }}
    >
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
