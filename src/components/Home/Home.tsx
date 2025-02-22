import Stack from "@mui/material/Stack";

import NameCard from "./NameCard";
import ImageCard from "./ImageCard";

export default function Home() {
  return (
    <Stack
      component="main"
      aria-label="Home section"
      id="home"
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
      direction={{ lg: "row", xl: "row" }}
      paddingTop={{ xs: "2rem", xl: "4rem" }}
      marginX={{ xs: "0.2rem" }}
    >
      <NameCard />
      <ImageCard />
    </Stack>
  );
}
