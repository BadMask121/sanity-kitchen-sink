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
                  buildHookId: '5f8f26c484a2b721fac153f1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-omk5imw2',
                  apiId: '1ac0ee4e-0aa1-41e0-a0e4-0f8cc4145a4e'
                },
                {
                  buildHookId: '5f8f26c3bb49581ba324fedb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d756pptx',
                  apiId: '022d9825-60dc-4b04-b2e0-d21091db5759'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BadMask121/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d756pptx.netlify.app', category: 'apps'}
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
