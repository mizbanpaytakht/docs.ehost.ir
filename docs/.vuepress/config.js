module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'fa-IR',
      title: 'راهنما میزبان پایتخت',
      description: 'به دنیای راهنمای میزبان پایتخت خوش آمدید'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `https://www.ehost.ir/wp-content/themes/ehost/assets/img/favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: `https://www.zarinpal.com/templates/resellerhub/template/img/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: 'https://www.resellerhub.ir/templates/resellerhub/template/img/icons/icon_dark.svg', color: '#01204a' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'mizbanpaytakht/docs.ehost.ir',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'فارسی',
        selectText: 'زبان‌ها',
        editLinkText: 'ویرایش و اصلاح متن',
        nav: [
          {
            text: 'میزبان پایتخت',
            link: 'https://www.ehost.ir/',
          },
          {
            text: 'پرتال کاربران',
            link: 'https://www.ehost.ir/billing/clientarea.php'
          },
        ],
        sidebar: {
          '/guide/': genSidebarConfig('راهنمایی')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-webservice',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
