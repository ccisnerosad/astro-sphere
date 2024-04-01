import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Dynamicalnet",
  DESCRIPTION: "Esta es una página de preparación para el desarrollo de un sitio web personal.",
  AUTHOR: "Carlos Cisneros",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  }, 
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  }

  /*,
  { 
    TEXT: "Work", 
    HREF: "/work", 
  }
 ,*/
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "ccisneros@dynamicalnet.cloud",
    HREF: "mailto:ccisneros@dynamicalnet.cloud",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "ccisnerosad",
    HREF: "https://github.com/ccisnerosad/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Carlos Cisneros",
    HREF: "https://www.linkedin.com/in/ccisnerosad/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Carlos Cisneros",
    HREF: "https://twitter.com/ccisnerosad",
  },
]

