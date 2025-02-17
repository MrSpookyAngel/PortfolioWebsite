import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  links: { key: string; Icon: React.ReactNode; href: string, ariaLabel: string }[];
}

export default function ProjectCard({
  title,
  description,
  image,
  links,
}: ProjectCardProps) {
  const actions = links.map(({ key, Icon, href, ariaLabel }) => {
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
      >
        {Icon}
      </Button>
    );
  });

  return (
    <Card sx={{ maxWidth: 400 }}>
      {image && (
        <CardMedia
          component="img"
          height="200px"
          image={image}
          alt={title + " showcase"}
          sx={{ objectFit: "fill" }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {actions.map((action, index) => (
          <Box component="span" key={index}>
            {action}
          </Box>
        ))}
      </CardActions>
    </Card>
  );
}
