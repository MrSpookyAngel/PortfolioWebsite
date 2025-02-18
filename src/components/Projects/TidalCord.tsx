import GitHubIcon from "@mui/icons-material/GitHub";

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
      key: "github",
      Icon: <GitHubIcon sx={{ width: "2rem", height: "2rem" }} />,
      href: "http://github.com",
      ariaLabel: "Link to GitHub Repository",
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
