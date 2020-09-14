export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5ece9e598fe1c4c497daa8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-21kiz369',
                  apiId: '3644b26b-56da-4fde-8d76-51ee9deb82ae'
                },
                {
                  buildHookId: '5f5ece9ec3abcb0651cbb506',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xyv79qa8',
                  apiId: '59d1d200-7c1c-436d-a608-464f5ca5801a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salvatoredangelo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xyv79qa8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
