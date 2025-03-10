import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'de-tools',
  description: 'a tools website',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'Directive',
        items: [
          { text: 'Drag Directive', link: '/directive/v-drag' },
        ],
      },
      {
        text: 'Function',
        items: [
          { text: 'Debounce Function', link: '/func/debounce' },
          { text: 'Throttle Function', link: '/func/throttle' },
          { text: 'AdaptClientSize Function', link: '/func/adaptClientSize' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'SeamlessScroll', link: '/components/seamlessScroll' },
          { text: 'SignBoard', link: '/components/signBoard' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
