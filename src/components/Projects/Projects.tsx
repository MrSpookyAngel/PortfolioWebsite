import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Portfolio from "./Portfolio";
import LightSettlementDetection from "./LightSettlementDetection";
import TidalCord from "./TidalCord";
import SkillEstimation from "./SkillEstimation";
import CrawlerSearchEngine from "./CrawlerSearchEngine";

export default function Projects() {
  const projects = [
    LightSettlementDetection,
    TidalCord,
    SkillEstimation,
    CrawlerSearchEngine,
    Portfolio,
  ];

  return (
    <Stack spacing="2rem" padding="2rem" sx={{ alignItems: "center" }}>
      <Typography variant="h3" fontWeight="bold" color="primary">
        Projects
      </Typography>
      <Grid container spacing={{ xs: "2rem", md: "4rem" }} justifyContent="center">
        {projects.map((Project, index) => (
          <Grid key={index}>
            <Project />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
