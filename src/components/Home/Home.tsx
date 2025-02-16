import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  const theme = useTheme();

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container sx={{ minHeight: "100vh", flexDirection: "row" }}>
        {/* Left Panel - Content */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 4, md: 8 },
              py: 8,
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                lineHeight: 1.2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hi, I'm Luis Angel Villanueva
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="text.secondary"
              sx={{ fontWeight: 500, mb: 4 }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="text.secondary"
              sx={{ fontSize: "1.2rem", maxWidth: "600px", mb: 4 }}
            >
              Building software
            </Typography>
            <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                size="large"
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
                variant="outlined"
                size="large"
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
          </Box>
        </Grid>

        {/* Right Panel - Image */}
        <Grid sx={{ flexGrow: 1, xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              position: "relative",
              overflow: "hidden",
              backgroundColor: theme.palette.primary.dark,
            }}
          >
            <Box
              component="img"
              src="v-universe.png"
              alt="Luis Angel Villanueva"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
