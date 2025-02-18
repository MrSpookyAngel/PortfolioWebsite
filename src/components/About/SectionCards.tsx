import { Box, Grid2 as Grid, Typography, useTheme } from "@mui/material";
import { IconType } from "react-icons";

interface SectionCardsProps {
  title: string;
  icons: { Icon: IconType; label: string }[];
}

export default function SectionCards({ title, icons }: SectionCardsProps) {
  const theme = useTheme();

  return (
    <Box component="section" py="2rem">
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        color="primary"
        mb="2rem"
      >
        {title}
      </Typography>
      <Grid
        container
        spacing={{ xs: "2rem", md: "4rem" }}
        justifyContent="center"
      >
        {icons.map(({ Icon, label }) => (
          <Grid key={label}>
            <Box
              aria-label={label}
              role="img"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              border="0.1rem solid"
              borderColor="primary.main"
              borderRadius="1rem"
              p="2rem"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "secondary.main",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              <Icon size="5rem" color={theme.palette.primary.main} />
              <Typography
                variant="subtitle1"
                component="div"
                mt="1rem"
                color="text.secondary"
                fontWeight="bold"
              >
                {label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
