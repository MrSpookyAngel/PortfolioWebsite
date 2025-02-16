import { Grid2 as Grid, Stack, Typography } from "@mui/material";

import TestProject from "./TestProject";
import TestProject2 from "./TestProject2";
import LightPoverty from "./LightPoverty";

function Projects() {
  const projects = [
    TestProject,
    TestProject2,
    LightPoverty
  ];

  return (
    <Stack spacing={"2rem"} padding={"2rem"} sx={{ alignItems: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary">
        Projects
      </Typography>
      <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="center">
        {projects.map((Project, index) => (
          <Grid key={index}>
            <Project />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Projects;
