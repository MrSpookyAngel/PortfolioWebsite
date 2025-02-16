import { Stack } from "@mui/material";
import NameCard from "./NameCard";
import ImageCard from "./ImageCard";

function Home() {
  return (
    <Stack
      component="main"
      aria-label="Home section"
      id="home"
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
      direction={{ lg: "column", xl: "row" }}
      paddingTop={{ lg: "2rem", xl: "4rem" }}
    >
      <NameCard />
      <ImageCard />
    </Stack>
  );
}

export default Home;
