// assets
import { IconBrandChrome, IconHelp, IconSitemap } from "@tabler/icons";

// constant
const icons = {
  IconBrandChrome: IconBrandChrome,
  IconHelp: IconHelp,
  IconSitemap: IconSitemap,
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

export const other = {
  id: "sample-docs-roadmap",
  type: "group",
  title: "Others",
  children: [
    {
      id: "other",
      title: "Sample Page",
      type: "item",
      url: "/sample-page",
      icon: icons["IconBrandChrome"],
      breadcrumbs: false,
    },
    {
      id: "documentation",
      title: "Documentation",
      type: "item",
      url: "https://codedthemes.gitbook.io/berry/",
      icon: icons["IconHelp"],
      external: true,
      target: true,
    },
    {
      id: "icons",
      title: "Icons",
      type: "collapse",
      icon: icons["IconBrandChrome"],
      children: [
        {
          id: "tabler-icons",
          title: "Tabler Icons",
          type: "item",
          url: "/icons/tabler-icons",
          breadcrumbs: false,
        },
        {
          id: "material-icons",
          title: "Material Icons",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
      ],
    },
  ],
};
