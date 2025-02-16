import { SiPython, SiCplusplus, SiC, SiTypescript } from "react-icons/si";

import SectionCards from "./SectionCards";

function Languages() {
  const title = "Languages";
  const icons = [
    { Icon: SiPython, label: "Python" },
    { Icon: SiCplusplus, label: "C++" },
    { Icon: SiC, label: "C" },
    { Icon: SiTypescript, label: "TypeScript" },
  ];

  return SectionCards({ title, icons });
}

export default Languages;
