// import GitHubIcon from "@mui/icons-material/GitHub";

import ProjectCard from "./ProjectCard";

export default function SkillEstimation() {
  const image = "SkillEstimation.png";
  const technologies = [
    "Python",
    "NumPy",
    "Matplotlib",
    "Jupyter Notebook",
    "PyStan",
  ];
  const title = "Star Craft II: Skill Estimation";
  const description =
    "Developed and calibrated skill estimation models using Starcraft II match data to predict player win probabilities. " +
    "Implemented models based on Poisson distribution and explored alternative approaches which included Beta and Bernoulli distributions. " +
    "Conducted extensive evaluation using training and validation data to measure performance, achieving low mean squared errors for offline and online match predictions.";
  // const links = [
  //   {
  //     key: "github",
  //     Icon: <GitHubIcon sx={{ width: "2rem", height: "2rem" }} />,
  //     href: "http://github.com",
  //     ariaLabel: "Link to GitHub Repository",
  //   },
  // ];

  return (
    <ProjectCard
      image={image}
      technologies={technologies}
      title={title}
      description={description}
      // links={links}
    />
  );
}
