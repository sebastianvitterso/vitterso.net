export type FrameworkIcon = {
  class: string
  title: string
}
export type GithubLink = {
  link: string
  title: string
  iconClass: string
}
export type Project = {
  title: string
  imageUrl: string
  link?: string
  icons: FrameworkIcon[]
  description: string
  githubLink?: GithubLink
}
