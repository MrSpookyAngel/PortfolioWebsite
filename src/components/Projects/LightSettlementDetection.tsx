// import GitHubIcon from "@mui/icons-material/GitHub";

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
