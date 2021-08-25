// assets
import { IconSitemap } from "@tabler/icons";

// constant
const icons = {
  IconSitemap: IconSitemap,
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

export const principal = {
  id: "sample-docs-roadmap",
  type: "group",
  title: "Principal",
  children: [
    {
      id: "sample-page",
      title: "Principal",
      type: "item",
      url: "/",
      icon: icons["IconSitemap"],
      breadcrumbs: false,
    },
  ],
};
