import React from "react";
import Image from "next/image";

import { DocsThemeConfig } from "nextra-theme-docs";

import Logo from "./public/logo.png";

const config: DocsThemeConfig = {
  logo: (
    <span className="flex items-center gap-2 font-semibold">
      <Image {...Logo} width={50} height={50} alt="CFX Store" />
      CFXStore
    </span>
  ),
  project: {
    link: "https://github.com/Cfx-Store",
  },
  chat: {
    link: "https://discord.gg/cfxstore",
  },
  docsRepositoryBase: "https://github.com/Cfx-Store/cfx-docs",
  footer: {
    text: "CFX Store Documentation",
  },
  primaryHue: 350,
  useNextSeoProps() {
    return {
      titleTemplate: "CFX Store Docs - %s",
      description: "CFX Store Documentation",
      themeColor: "#ff0000",
    };
  },
};

export default config;
