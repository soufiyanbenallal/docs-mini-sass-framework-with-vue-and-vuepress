const { description } = require('../../package')
module.exports = {
  // title: 'Leventures doc',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
   extend: '@vuepress/theme-default',
   plugins: [
     ['@vuepress/active-header-links', false],
     ['@vuepress/search', false],
     ['@vuepress/plugin-nprogress', false],
     ['smooth-scroll', false]    
   ],
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#fe3b31' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

 
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/images/logo.svg',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Get Started',
          collapsable: true,
          children: [
            '',
            'using-vue',
            'icons',
            'colors',
          ]
        },
        {
          title: 'Helpers',
          collapsable: true,
          children: [
            'helpers/clearfix',
            'helpers/flex',
          ]
        },
        {
          title: 'Layout',
          collapsable: true,
          children: [
            'layouts/container',
            'layouts/grid',
          ]
        },
        {
          title: 'Form',
          collapsable: true,
          children: [
            'forms/buttons',
            'forms/inputs',
            'forms/selects',
            
          ]
        },
        {
          title: 'Components',
          collapsable: true,
          children: [
            'components/breadcrumb',
            'components/card',
            'components/modal',
            'components/navbar',
            'components/popover',
            'components/spinner',
            'components/tabs',
            'components/tooltip',
          ]
        },
       
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  //  {
  //   align: 'top',
  //   color: "#eee",
  //   backgroundColor: "#000",
  //    // selector: String,
  //    // backgroundTransition: Boolean,
  
  //    successText: "String"
  //   }
  plugins: [
    'tabs',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ["vuepress-plugin-code-copy", { backgroundColor: "#000000"}]
  ]
}
