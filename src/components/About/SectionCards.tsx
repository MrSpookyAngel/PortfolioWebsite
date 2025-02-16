import { Box, Grid2 as Grid, Typography, useTheme } from "@mui/material";
import { IconType } from "react-icons";

interface SectionCardsProps {
  title: string;
  icons: { Icon: IconType; label: string }[];
}

function SectionCards({ title, icons }: SectionCardsProps) {
  const theme = useTheme();

  return (
    <Box component="section" py="2rem">
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        color="primary"
        mb={6}
      >
        {title}
      </Typography>
      <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="center">
        {icons.map(({ Icon, label }) => (
          <Grid key={label}>
            <Box
              aria-label={label}
              role="img"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              border={2}
              borderColor="primary.main"
              borderRadius={2}
              p={4}
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
                fontWeight="medium"
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

export default SectionCards;
