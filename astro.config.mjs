import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "React-Shadcn Extented",
    customCss: ['./src/tailwind.css'],
    social: {
      discord: 'https://astro.build/chat',
      github: 'https://github.com/withastro/starlight',
    },
    sidebar: [
      {
        label: 'Introduction', link: '/'
      },
      {
        label: 'Components',
        autogenerate: { directory: 'components' },
      },
    ]
  }), tailwind({
    applyBaseStyles: false
  }), react()]
});