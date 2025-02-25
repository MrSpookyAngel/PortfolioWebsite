import { SiGit } from "react-icons/si";

import ProjectCard from "./ProjectCard";

export default function TidalCord() {
  const title = "TidalCord";
  const description =
    "Developed a self-hostable Tidal music bot for Discord. " +
    "It is built with Python 3.8+ using the discord.py and tidalapi libraries. " +
    "It streams music from the Tidal music service by downloading songs to a cache and then streaming them to your Discord server. " +
    "It can also identify songs from YouTube links and map them to Tidal.";
  const image = "TidalCord.png";
  const links = [
    {
      key: "git-repo",
      Icon: <SiGit size="2rem" />,
      href: "https://git.villanuevauniverse.com/VillanuevaUniverse/TidalCord",
      ariaLabel: "Link to Git Repository",
    },
  ];

  return (
    <ProjectCard
      image={image}
      technologies={["Python", "Discord API", "Tidal API", "BeautifulSoup"]}
      title={title}
      description={description}
      links={links}
    />
  );
}
