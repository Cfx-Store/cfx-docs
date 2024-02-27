import React from 'react'
import Image from 'next/image'

import { DocsThemeConfig } from 'nextra-theme-docs'

import Logo from "./public/cfx.png";

const config: DocsThemeConfig = {
	logo: <span className="text-red-500">CFXStore</span>,
	project: {
		link: 'https://github.com/Cfx-Store',
	},
	chat: {
		link: 'https://discord.gg/ux5FFqZC',
	},
	docsRepositoryBase: 'https://github.com/thoo0224/cfx-docs',
	footer: {
		text: 'CFX Store Documentation',
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s - CFX Store Docs",
			description: "CFX Store Documentation",
		}
	}
}

export default config
