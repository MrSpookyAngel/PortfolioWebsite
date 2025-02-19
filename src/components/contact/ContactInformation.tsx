import { Box, Divider, IconButton, Typography } from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

export default function ContactInformation() {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        p: "2rem",
        borderRadius: "1rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Information
      </Typography>

      <Box sx={{ mb: "1.5rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "1rem",
            gap: "1rem",
          }}
        >
          <LocationOn color="primary" />
          <Typography>
            Fullerton, California 92832,
            <br />
            United States
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "1rem",
            gap: "1rem",
          }}
        >
          <Phone color="primary" />
          <Typography>+1 (714) 770-1336</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Email color="primary" />
          <Typography>luis.angel.villanueva@outlook.com</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: "1.5rem" }} />

      <Typography
        variant="h6"
        component="div"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Socials
      </Typography>

      <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <IconButton aria-label="LinkedIn" color="primary">
          <LinkedIn />
        </IconButton>
        <IconButton aria-label="GitHub" color="primary">
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
}
