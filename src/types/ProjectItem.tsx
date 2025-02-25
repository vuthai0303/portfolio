export interface Linkitem {
  text: string
  href: string
}

export interface ProjectItem {
  imageHref: string
  videoHref: string
  title: string
  desciption: string
  links: Linkitem[]
  tags: string[]
}
