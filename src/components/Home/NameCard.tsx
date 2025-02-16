import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

function NameCard() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap="2rem"
      mx={"auto"}
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

        {/* <Typography
          variant="h4"
          gutterBottom
          color="text.secondary"
          fontWeight={500}
        >
          Full Stack Developer
        </Typography> */}

        <Typography variant="h5" component="h3" color="text.secondary">
          {" "}
          {/* h6 */}
          Building Software Solutions
        </Typography>

        {/* Buttons */}
        <Box display={"flex"} gap="1rem" justifyContent="center">
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            size="large"
            color="primary"
            sx={{
              borderRadius: "50px",
              padding: "12px 32px",
              textTransform: "none",
              fontWeight: 600,
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
              borderRadius: "50px",
              padding: "12px 32px",
              textTransform: "none",
              fontWeight: 600,
              borderWidth: 2,
              "&:hover": { borderWidth: 2 },
            }}
          >
            Let's Connect
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default NameCard;
