import { Stack } from "@mui/material";
import Me from "./Me";
import Languages from "./Languages";
import FrameworksLibraries from "./FrameworksLibraries";
import Tools from "./Tools";

export default function About() {
  return (
    <Stack
      component="main"
      aria-label="About section"
      id="about"
      spacing="2rem"
      sx={{
        alignItems: "center",
        textAlign: "center",
        paddingX: { xs: "0.2rem" },
      }}
    >
      <Me />
      <Languages />
      <FrameworksLibraries />
      <Tools />
    </Stack>
  );
}
