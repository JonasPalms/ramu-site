import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('homePage').title('Home page'),
      S.documentTypeListItem('aboutPage').title('About page'),
      S.documentTypeListItem('projectsPage').title('Projects page'),
      S.documentTypeListItem('contactPage').title('Contact page'),
      S.divider(),
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('project').title('Projects'),
    ])
