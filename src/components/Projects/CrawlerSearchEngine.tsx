import { SiGit } from "react-icons/si";

import ProjectCard from "./ProjectCard";

export default function CrawlerSearchEngine() {
  const image = "CrawlerSearchEngine.png";
  const technologies = ["Python", "Flask", "Requests", "BeautifulSoup", "NLTK"];
  const title = "Crawler & Search Engine";
  const description =
    "Developed a web crawler that scraped my school's domain. " +
    "Used the collected data to build a TF-IDF search engine using Flask. " +
    "It handled tens of thousands of documents (or Web pages) with a query response time under 150ms. ";
  const links = [
    {
      key: "git-repo",
      Icon: <SiGit size="2rem" />,
      href: "https://git.villanuevauniverse.com/VillanuevaUniverse/CrawlerSearchEngine",
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
