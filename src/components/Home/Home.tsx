import Stack from "@mui/material/Stack";

import NameCard from "./NameCard";
import ImageCard from "./ImageCard";

export default function Home() {
  return (
    <Stack
      component="main"
      aria-label="Home section"
      id="home"
      minHeight="100vh"
      direction={{ lg: "row", xl: "row" }}
      paddingTop={{ xs: "2rem" }}
      paddingBottom={{ xs: "2rem", xl: "4rem" }}
      marginX={{ xs: "0.2rem", sm: "1rem", md: "2rem", lg: "4rem", xl: "6rem" }}
      marginBottom="6rem"
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NameCard />
      <ImageCard />
    </Stack>
  );
}
