import { Box } from "@mui/material";

export default function ImageCard() {
  return (
    <Box
      component="img"
      src="Me.png"
      alt="Luis Angel Villanueva Profile Picture"
      mx="auto"
      sx={{
        width: { xs: "79%", sm: "65%", md: "60%", lg: "55%", xl: "35%" },
        height: { xs: "70%", sm: "65%", md: "60%", lg: "55%", xl: "35%" },
        objectFit: "fill",
        objectPosition: "center",
        borderRadius: "50%",
        border: "0.2rem solid",
        borderColor: "primary.main",
        transform: {
          xs: "translateY(10%)",
          sm: "translateY(10%)",
          md: "translateY(10%)",
          lg: "translateY(10%)",
          xl: "translateY(0%)",
        },
      }}
    />
  );
}
