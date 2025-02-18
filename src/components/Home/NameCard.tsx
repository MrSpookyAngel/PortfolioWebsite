import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function NameCard() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      mx="auto"
    >
      <Stack spacing="2rem">
        {/* Text */}
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={800}
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Luis Angel Villanueva
        </Typography>

        <Typography variant="h5" component="h3" color="text.secondary">
          {" "}
          Building Software Solutions
        </Typography>

        {/* Buttons */}
        <Box display="flex" gap="1rem" justifyContent="center">
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            size="large"
            color="primary"
            sx={{
              borderRadius: "2rem",
              padding: "1rem 2rem",
              textTransform: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "secondary.main",
                bgcolor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            View My Work
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            color="secondary"
            sx={{
              borderRadius: "2rem",
              padding: "1rem 2rem",
              textTransform: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "secondary.main",
                bgcolor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            Let's Connect
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
