import FrameworkIcon from "./frameworkIcon";
import GithubLink from "./githubLink";

export default interface Project {
  title: String,
  imageUrl: String,
  link?: String,
  icons: FrameworkIcon[],
  description: String,
  githubLink?: GithubLink
}