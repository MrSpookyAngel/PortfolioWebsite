import {
  SiPytorch,
  SiLightning,
  SiScikitlearn,
  SiOpencv,
  SiFlask,
  SiNumpy,
  SiFastapi,
  SiReact,
} from "react-icons/si";

import SectionCards from "./SectionCards";

function FrameworksLibraries() {
  const title = "Frameworks & Libraries";
  const icons = [
    { Icon: SiPytorch, label: "PyTorch" },
    { Icon: SiLightning, label: "Lightning" },
    { Icon: SiScikitlearn, label: "scikit-learn" },
    { Icon: SiOpencv, label: "OpenCV" },
    { Icon: SiFlask, label: "Flask" },
    { Icon: SiNumpy, label: "NumPy" },
    { Icon: SiFastapi, label: "FastAPI" },
    { Icon: SiReact, label: "React" },
  ];

  return SectionCards({ title, icons });
}

export default FrameworksLibraries;
