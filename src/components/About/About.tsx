import { Stack } from "@mui/material";
import Me from "./Me";
import Languages from "./Languages";
import FrameworksLibraries from "./FrameworksLibraries";
import Tools from "./Tools";

function About() {
  return (
    <Stack
      component="main"
      aria-label="About section"
      id="about"
      spacing={4}
      sx={{
        px: { xs: 2, md: 4 },
        py: 8,
        alignItems: "center",
        textAlign: { xs: "left", md: "center" },
      }}
    >
      <Me />
      <Languages />
      <FrameworksLibraries />
      <Tools />
    </Stack>
  );
}

export default About;
