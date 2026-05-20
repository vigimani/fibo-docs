// Make our custom <Card> / <CardGroup> available globally in MDX without
// requiring a per-file import. Imports from @theme-original are the
// canonical way to extend the default theme; see
// https://docusaurus.io/docs/markdown-features/react#mdx-component-scope
import MDXComponents from '@theme-original/MDXComponents';
import { Card, CardGroup } from '@site/src/components/Card';

export default {
  ...MDXComponents,
  Card,
  CardGroup,
};
