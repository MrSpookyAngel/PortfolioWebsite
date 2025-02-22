import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

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
          <LocationOnIcon color="primary" />
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
          <PhoneIcon color="primary" />
          <Typography>+1 (714) 770-1336</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <EmailIcon color="primary" />
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
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/luis-a-villanueva/"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          href="https://github.com/MrSpookyAngel"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
