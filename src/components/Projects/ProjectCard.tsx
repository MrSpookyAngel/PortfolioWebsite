import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";

interface ProjectCardProps {
  image?: string;
  technologies?: string[];
  title: string;
  description: string;
  links?: {
    key: string;
    Icon: React.ReactNode;
    href: string;
    ariaLabel: string;
  }[];
}

export default function ProjectCard({
  title,
  description,
  image,
  links,
  technologies,
}: ProjectCardProps) {
  const actions = links?.map(({ key, Icon, href, ariaLabel }) => {
    const isExternalLink =
      href.startsWith("https://") || href.startsWith("http://");
    return (
      <Button
        key={key}
        size="small"
        href={href}
        target={isExternalLink ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        sx={{ color: "primary.main" }}
      >
        {Icon}
      </Button>
    );
  });

  return (
    <Card
      sx={{
        width: "25rem",
        height: "35rem",
        border: "0.1rem solid",
        borderRadius: "1rem",
        borderColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        transition: "all 0.3s ease",
        bgcolor: "rgba(255, 255, 255, 0.00)",
        "&:hover": {
          transform: "scale(1.05)",
          borderColor: "secondary.main",
          bgcolor: "rgba(255, 255, 255, 0.08)",
        },
      }}
    >
      {/* Image */}
      {image ? (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={`${title} showcase`}
          sx={{
            objectFit: "fill",
            borderRadius: "1rem",
          }}
        />
      ) : (
        <Box sx={{ height: "200" }} />
      )}

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.3rem",
            justifyContent: "center",
          }}
        >
          {technologies.map((tech, idx) => (
            <Chip key={idx} label={tech} size="small" />
          ))}
        </Box>
      )}

      {/* Title */}
      <Typography
        variant="h6"
        component="div"
        textAlign="center"
        color="primary"
        fontWeight="bold"
      >
        {title}
      </Typography>

      <Divider />

      {/* Description */}
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>

      {/* Links */}
      <CardActions
        sx={{
          padding: "0.5rem 1rem 1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {actions}
      </CardActions>
    </Card>
  );
}
