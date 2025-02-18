import { SiDocker, SiMongodb, SiSqlite, SiGit } from "react-icons/si";

import SectionCards from "./SectionCards";

export default function Tools() {
  const title = "Tools & Technologies";
  const icons = [
    { Icon: SiDocker, label: "Docker" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: SiSqlite, label: "SQLite" },
    { Icon: SiGit, label: "Git" },
  ];

  return SectionCards({ title, icons });
}
