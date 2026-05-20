import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Card, CardGroup } from '@site/src/components/Card';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} — non-custodial crypto infrastructure`}
      description={siteConfig.tagline}
    >
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Fibo SaaS</p>
          <h1 className={styles.headline}>
            The everybody-wallet for your platform.
          </h1>
          <p className={styles.subhead}>
            Bitcoin, DeFi yield, cross-chain swaps — for your users, on your
            platform. Non-custodial by construction. As simple as a banking app.
          </p>
          <div className={styles.ctas}>
            <Link className={styles.ctaPrimary} to="/docs/quickstart">
              Get started
            </Link>
            <Link className={styles.ctaSecondary} to="/docs/introduction">
              Read the docs
            </Link>
          </div>

          <div className={styles.chainsRow}>
            <span className={styles.chainsLabel}>Supported today</span>
            <div className={styles.chainPills}>
              {[
                'Ethereum',
                'Polygon',
                'Base',
                'Optimism',
                'Arbitrum',
                'Avalanche',
                'Solana',
                'Bitcoin',
              ].map((chain) => (
                <span key={chain} className={styles.chainPill}>
                  {chain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Start here</h2>
            <CardGroup cols={2}>
              <Card title="Quickstart" icon="rocket" href="/docs/quickstart">
                Install the SDK, mint API keys, run a test swap — about 10
                minutes.
              </Card>
              <Card
                title="Architecture"
                icon="layer-group"
                href="/docs/concepts/architecture"
              >
                The "thin SDK, fat backend" model. Why the SDK is intentionally
                dumb and what that means for you.
              </Card>
              <Card title="Wallets" icon="wallet" href="/docs/concepts/wallets">
                Multi-chain embedded wallets via Privy. Same security model on
                EVM, Solana, and Bitcoin.
              </Card>
              <Card
                title="API reference"
                icon="terminal"
                href="/docs/api-reference/introduction"
              >
                REST endpoints, request shapes, response codes, and webhook
                payloads.
              </Card>
            </CardGroup>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2>What Fibo handles for you</h2>
            <ul className={styles.bullets}>
              <li>
                <strong>Embedded multi-chain wallets</strong> — Ethereum,
                Polygon, Base, Optimism, Arbitrum, Avalanche, Solana, Bitcoin.
                Keys in the user's TEE, never on your servers.
              </li>
              <li>
                <strong>Gasless transactions</strong> — Biconomy MEE
                super-transactions on EVM (EIP-7702), backend fee-payer on
                Solana. Users without ETH / SOL just transact.
              </li>
              <li>
                <strong>Cross-chain swaps</strong> — LiFi's 60+ bridge / DEX
                aggregator, abstracted behind a single quote/submit API.
              </li>
              <li>
                <strong>Yield</strong> — Aave (lending) and Beefy (auto-compound
                vaults) across all EVM chains.
              </li>
              <li>
                <strong>Ramping</strong> — opt-in connectors for Monerium (SEPA
                → EURe) and Transak (card / bank → 100+ tokens). You sign the
                provider contracts; we provide the integration glue.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
