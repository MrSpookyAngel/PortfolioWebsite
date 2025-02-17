import GitHubIcon from "@mui/icons-material/GitHub";

import ProjectCard from "./ProjectCard";

export default function LightSettlementDetection() {
  const title = "Electricity and Settlement Detection in Sub-Saharan Africa";
  const description =
    "Developed machine learning models to identify human settlements without electricity using satellite " +
    "imagery, addressing energy poverty in sub-Saharan Africa. Implemented segmentation CNN, U-Net, " +
    "ResNet-based architectures, and a UNet++ model with transfer learning.";
  const image = "LightSettlementDetection.png";
  const links = [
    {
      key: "github",
      Icon: <GitHubIcon sx={{ width: "2rem", height: "2rem" }} />,
      href: "http://github.com",
      ariaLabel: "Link to GitHub Repository",
    },
  ];

  return (
    <ProjectCard
      title={title}
      description={description}
      image={image}
      links={links}
    />
  );
}
