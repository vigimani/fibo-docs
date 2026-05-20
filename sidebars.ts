import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      items: ['introduction', 'quickstart', 'status'],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/architecture',
        'concepts/wallets',
        'concepts/gasless',
        'concepts/chains',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'authentication/api-keys',
        'authentication/webhook-signatures',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: ['webhooks/overview', 'webhooks/events'],
    },
    'security',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/first-swap',
        'guides/handling-webhooks',
        'guides/ramping',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      items: ['sdk/installation'],
    },
    {
      type: 'category',
      label: 'API reference',
      items: [
        'api-reference/introduction',
        {
          type: 'category',
          label: 'API keys',
          items: [
            'api-reference/api-keys/create',
            'api-reference/api-keys/list',
            'api-reference/api-keys/revoke',
            'api-reference/api-keys/rotate',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
