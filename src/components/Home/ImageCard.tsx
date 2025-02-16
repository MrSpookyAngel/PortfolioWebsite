import { Box } from "@mui/material";

function ImageCard() {
  return (
    <Box
      component="img"
      src="v-universe.png"
      alt="Luis Angel Villanueva"
      mx={"auto"}
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

export default ImageCard;
