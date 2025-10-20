import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://kentknowsme.com',
  base: '/docs-portfolio',
  integrations: [
    starlight({
      title: 'Kent Schaeffer',
      description: 'Technical Writing Portfolio - API Documentation, Tutorials, and Integration Guides',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ne0crank' },
        {icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kentmschaeffer'},
      ],
      logo: {
        // light: './src/assets/logo-light.svg',
        // dark: './src/assets/logo-dark.svg',
        light: './src/assets/kent-knows-me-logo.svg',
        dark: './src/assets/kent-knows-me-logo.svg',
        replacesTitle: false,
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'About This Portfolio',
          items: [
            { label: 'Introduction', link: '/intro/' },
            { label: 'About Kent Schaeffer', link: '/about/' },
          ],
        },
        {
          label: 'Writing Samples',
          items: [
            { label: 'Overview', link: '/samples/' },
          ],
        },
        {
          label: 'API Documentation',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/api/overview/' },
            { label: 'Authentication', link: '/api/authentication/' },
            { label: 'Users API', link: '/api/users/' },
            { label: 'Rate Limiting', link: '/api/rate-limiting/' },
            { label: 'Error Handling', link: '/api/errors/' },
            { label: 'Best Practices', link: '/api/best-practices/' },
          ],
        },
        {
          label: 'Developer Tutorials',
          collapsed: false,
          items: [
            { label: 'Webhook Integration', link: '/tutorials/webhooks/' },
            { label: 'Setting Up Environment', link: '/tutorials/webhooks/setup/' },
            { label: 'Creating Endpoints', link: '/tutorials/webhooks/endpoints/' },
            { label: 'Security & Verification', link: '/tutorials/webhooks/security/' },
            { label: 'Testing & Deployment', link: '/tutorials/webhooks/deployment/' },
          ],
        },
        {
          label: 'Integration Guides',
          collapsed: false,
          items: [
            { label: 'SSO Integration', link: '/guides/sso/' },
            { label: 'Prerequisites', link: '/guides/sso/prerequisites/' },
            { label: 'Configure Identity Provider', link: '/guides/sso/configure-idp/' },
            { label: 'Configure Platform', link: '/guides/sso/configure-platform/' },
            { label: 'Testing', link: '/guides/sso/testing/' },
            { label: 'Troubleshooting', link: '/guides/sso/troubleshooting/' },
          ],
        },
        {
          label: 'Quick References',
          collapsed: false,
          items: [
            { label: 'HTTP Status Codes', link: '/reference/http-status-codes/' },
            { label: 'Common Patterns', link: '/reference/http-patterns/' },
            { label: 'Code Examples', link: '/reference/code-examples/' },
          ],
        },
        {
          label: 'Contact',
          items: [
            { label: 'Get in Touch', link: '/contact/' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/kentschaeffer/docs-portfolio/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'Kent Schaeffer - Technical Writing Portfolio',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'Professional technical writing samples including API documentation, developer tutorials, and integration guides.',
          },
        },
      ],
    }),
  ],
});