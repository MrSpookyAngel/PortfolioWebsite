import { Stack, Typography } from "@mui/material";

function Me() {
  return (
    <Stack spacing={4}>
      <Typography variant="h5" fontWeight={600} color="primary">
        Who I Am
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Hi, I am{" "}
        <Typography component="span" fontWeight="bold" color="special.name">
          Luis Angel Villanueva
        </Typography>{" "}
        from{" "}
        <Typography component="span" fontWeight="bold" color="special.county">
          Orange County, California
        </Typography>
        .
      </Typography>

      <Typography variant="body1" color="text.secondary">
        I completed my Bachelor of Science in Computer Science at the{" "}
        <Typography component="span" fontWeight="bold" color="special.school">
          University of California, Irvine
        </Typography>
        .
      </Typography>

      <Typography variant="body1" color="text.secondary">
        I am passionate about software engineering and have experience with a
        variety of programming languages and technologies.
      </Typography>

      <Typography variant="body1" color="text.secondary">
        I believe that a software engineer is defined not by the tools they use,
        but by their ability to solve problems.
      </Typography>

      <Typography variant="body1" color="text.secondary">
        In my free time, I explore new technologies and work on personal
        projects to develop my skills.
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Outside of coding, I enjoy spending time with family, watching movies,
        and working out.
      </Typography>
    </Stack>
  );
}

export default Me;
