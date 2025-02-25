import { SiGit } from "react-icons/si";

import ProjectCard from "./ProjectCard";

export default function LightSettlementDetection() {
  const image = "LightSettlementDetection.png";
  const technologies = [
    "Python",
    "PyTorch",
    "PyLightning",
    "scikit-learn",
    "SciPy",
    "OpenCV",
    "NumPy",
    "Matplotlib",
    "Weights & Biases",
  ];
  const title = "Electricity and Settlement Detection in Sub-Saharan Africa";
  const description =
    "Developed machine learning models to identify human settlements without electricity using satellite imagery, addressing energy poverty in sub-Saharan Africa. " +
    "Implemented segmentation CNN, U-Net, ResNet-based architectures, and a UNet++ model with transfer learning.";
  const links = [
    {
      key: "git-repo",
      Icon: <SiGit size="2rem" />,
      href: "https://git.villanuevauniverse.com/VillanuevaUniverse/LightSettlementDetection",
      ariaLabel: "Link to Git Repository",
    },
  ];

  return (
    <ProjectCard
      image={image}
      technologies={technologies}
      title={title}
      description={description}
      links={links}
    />
  );
}
