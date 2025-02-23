import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ContactInformation from "./Contact/ContactInformation";

export default function Footer() {
  const createdYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearRange =
    createdYear === currentYear
      ? `${currentYear}`
      : `${createdYear} - ${currentYear}`;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        p: "2rem",
      }}
    >
      <Stack sx={{ alignItems: "center" }}>
        <ContactInformation />

        <Typography variant="body2">
          © {yearRange} VillanuevaUniverse
        </Typography>
      </Stack>
    </Box>
  );
}
