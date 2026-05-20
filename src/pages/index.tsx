import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Scroll-reveal: add .in to .reveal elements when they enter the viewport.
    const revealEls = document.querySelectorAll<HTMLElement>(
      '.landing-v3 .reveal',
    );
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    revealEls.forEach((el) => {
      if (!el.classList.contains('in')) revealObserver.observe(el);
    });

    // Animated counters — tweens from 0 to data-target on first view.
    const counters = document.querySelectorAll<HTMLElement>(
      '.landing-v3 .counter',
    );
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.target || '0');
          const suffix = el.dataset.suffix || '';
          const duration = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const progress = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent =
              (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) +
              suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );
    counters.forEach((c) => counterObserver.observe(c));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} — non-custodial crypto infrastructure`}
      description={siteConfig.tagline}
    >
      <div className="landing-v3">
        {/* HERO ============================================== */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-orb o1"></div>
            <div className="hero-orb o2"></div>
            <div className="hero-orb o3"></div>
          </div>
          <div className="hero-grid"></div>
          <div className="container">
            <div className="hero-inner">
              <div className="hero-text reveal in">
                <span className="badge">
                  <span className="dot"></span>Embedded crypto for fintechs
                </span>
                <h1>
                  Plug into the{' '}
                  <span className="gradient-text">blockchain</span>
                  <br />
                  in 2 clicks.
                </h1>
                <p className="lead">
                  The turnkey crypto building block for your platform. Wallets,
                  swaps, and DeFi yield in a single SDK — drop it into your
                  product and you're live in days.
                </p>
                <div className="ctas">
                  <Link to="/docs/quickstart" className="btn btn-primary btn-lg">
                    Get started
                    <span className="btn-arrow">→</span>
                  </Link>
                  <Link
                    to="/docs/introduction"
                    className="btn btn-secondary btn-lg"
                  >
                    Read the docs
                  </Link>
                </div>
                <div className="micro">
                  <span>
                    <span className="check">✓</span> 5-day integration
                  </span>
                  <span>
                    <span className="check">✓</span> 5–6× cheaper than building
                    in-house
                  </span>
                  <span>
                    <span className="check">✓</span> No crypto team to hire
                  </span>
                </div>
              </div>

              <div className="hero-visual reveal reveal-delay-2 in">
                <svg
                  className="hero-illustration"
                  viewBox="0 0 520 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="orb-a" x1="0" y1="0" x2="1" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#c4b5fd"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#5B44F9"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                    <linearGradient id="orb-b" x1="0" y1="0" x2="1" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#a78bfa"
                        stopOpacity="0.5"
                      />
                      <stop
                        offset="100%"
                        stopColor="#3a25cf"
                        stopOpacity="0.15"
                      />
                    </linearGradient>
                    <linearGradient id="card-bg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#fafafa" />
                    </linearGradient>
                    <linearGradient id="yield-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#5B44F9" />
                      <stop offset="50%" stopColor="#7c5cf5" />
                      <stop offset="100%" stopColor="#4a35e0" />
                    </linearGradient>
                    <linearGradient id="brick-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#5B44F9" />
                    </linearGradient>
                    <filter
                      id="card-shadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="20"
                        stdDeviation="30"
                        floodColor="#5B44F9"
                        floodOpacity="0.18"
                      />
                    </filter>
                    <filter
                      id="brick-shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="8"
                        stdDeviation="12"
                        floodColor="#5B44F9"
                        floodOpacity="0.35"
                      />
                    </filter>
                  </defs>

                  {/* Background orbs */}
                  <circle cx="80" cy="100" r="60" fill="url(#orb-a)" opacity="0.7" />
                  <circle cx="450" cy="430" r="80" fill="url(#orb-b)" opacity="0.6" />
                  <circle cx="440" cy="80" r="40" fill="url(#orb-a)" opacity="0.5" />

                  {/* Floating geometric shapes */}
                  <rect x="40" y="280" width="36" height="36" rx="8" fill="url(#brick-grad)" opacity="0.25" transform="rotate(-15 58 298)" />
                  <rect x="450" y="240" width="28" height="28" rx="6" fill="url(#brick-grad)" opacity="0.3" transform="rotate(25 464 254)" />

                  {/* Main app card */}
                  <g filter="url(#card-shadow)">
                    <rect x="130" y="60" width="260" height="400" rx="32" fill="url(#card-bg)" />
                    <rect x="130" y="60" width="260" height="400" rx="32" stroke="#e2e8f0" strokeWidth="1" />
                  </g>

                  {/* Status bar */}
                  <rect x="155" y="86" width="80" height="8" rx="4" fill="#e2e8f0" />
                  <circle cx="370" cy="90" r="4" fill="#cbd5e1" />

                  {/* Brand title */}
                  <rect x="155" y="115" width="120" height="14" rx="4" fill="#0a0a0a" />

                  {/* Card 1 — Wallet */}
                  <rect x="155" y="150" width="210" height="80" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="170" y="174" fontFamily="Inter" fontSize="10" fill="#64748b" fontWeight="700" letterSpacing="1">BALANCE</text>
                  <text x="170" y="206" fontFamily="Inter" fontSize="22" fill="#0a0a0a" fontWeight="800" letterSpacing="-0.5">€1,250.00</text>
                  <g transform="translate(322 168)">
                    <rect x="0" y="2" width="28" height="22" rx="5" fill="none" stroke="#5B44F9" strokeWidth="2" />
                    <rect x="18" y="10" width="14" height="6" rx="3" fill="#5B44F9" />
                  </g>

                  {/* Card 2 — Swap */}
                  <rect x="155" y="246" width="210" height="80" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="170" y="270" fontFamily="Inter" fontSize="10" fill="#64748b" fontWeight="700" letterSpacing="1">SWAP</text>
                  <text x="170" y="298" fontFamily="Inter" fontSize="16" fill="#0a0a0a" fontWeight="700">100 USDC</text>
                  <text x="170" y="316" fontFamily="Inter" fontSize="13" fill="#64748b" fontWeight="500">= €92.40</text>
                  <g transform="translate(322 274)">
                    <path d="M0 4 L18 4 M14 0 L18 4 L14 8" stroke="#5B44F9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 18 L0 18 M4 14 L0 18 L4 22" stroke="#5B44F9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  {/* Card 3 — Yield (highlight) */}
                  <rect x="155" y="342" width="210" height="80" rx="14" fill="url(#yield-grad)" />
                  <text x="170" y="366" fontFamily="Inter" fontSize="10" fill="rgba(255,255,255,0.75)" fontWeight="700" letterSpacing="1">YIELD</text>
                  <text x="170" y="400" fontFamily="Inter" fontSize="24" fill="white" fontWeight="800" letterSpacing="-0.5">+4.20%</text>
                  <text x="244" y="400" fontFamily="Inter" fontSize="13" fill="rgba(255,255,255,0.85)" fontWeight="600">APY</text>
                  <g transform="translate(320 360)">
                    <path d="M0 22 L8 14 L16 18 L26 8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 8 L26 8 L26 14" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  {/* Floating "Fibo brick" */}
                  <g transform="translate(380 30)" filter="url(#brick-shadow)">
                    <rect x="0" y="0" width="84" height="84" rx="20" fill="url(#brick-grad)" />
                    <rect x="22" y="22" width="40" height="40" rx="10" fill="rgba(255,255,255,0.22)" />
                    <rect x="34" y="34" width="16" height="16" rx="4" fill="rgba(255,255,255,0.85)" />
                    <circle cx="42" cy="8" r="3" fill="rgba(255,255,255,0.5)" />
                    <circle cx="8" cy="42" r="3" fill="rgba(255,255,255,0.5)" />
                    <circle cx="76" cy="42" r="3" fill="rgba(255,255,255,0.5)" />
                    <circle cx="42" cy="76" r="3" fill="rgba(255,255,255,0.5)" />
                  </g>

                  {/* Connection line */}
                  <path d="M 410 110 Q 380 130 360 150" stroke="#5B44F9" strokeWidth="1.5" strokeDasharray="3 4" fill="none" opacity="0.5" />

                  {/* Floating "API" pill */}
                  <g transform="translate(40 380)">
                    <rect x="0" y="0" width="110" height="36" rx="18" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="url(#card-shadow)" />
                    <circle cx="18" cy="18" r="6" fill="#10b981" />
                    <text x="32" y="23" fontFamily="JetBrains Mono" fontSize="11" fill="#0a0a0a" fontWeight="600">api.fibo.io</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* TONE BAR ========================================== */}
        <section className="tone-bar">
          <div className="container">
            <p>
              Built for <strong>growing consumer fintechs</strong> that want to
              add crypto to their product — without turning their team into
              blockchain specialists.
            </p>
          </div>
        </section>

        {/* AUDIENCE / USE CASES ============================== */}
        <section id="audience">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Use cases</span>
              <h2>
                Built for consumer fintechs
                <br />
                in a <span className="gradient-text">race to differentiate</span>.
              </h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                If your users already manage their money or savings with you,
                they're ready to add crypto. Fibo makes that possible in days.
              </p>
            </div>

            <div className="audience-grid">
              <div className="audience reveal reveal-delay-1">
                <span className="audience-tag">Neobanks &amp; payment apps</span>
                <h3>A crypto pocket inside your banking app</h3>
                <p>
                  Add yield-bearing stablecoin savings, on-chain payments, or
                  Bitcoin exposure alongside your existing products — without
                  pulling your users out of the experience they already know.
                </p>
                <ul>
                  <li>Stablecoin savings with DeFi yield</li>
                  <li>Buy, hold, and sell BTC, ETH</li>
                  <li>Cross-border stablecoin payments</li>
                  <li>On-chain cashback and rewards</li>
                </ul>
              </div>

              <div className="audience reveal reveal-delay-2">
                <span className="audience-tag">Brokers &amp; wealth-tech</span>
                <h3>Crypto alongside your existing lineup</h3>
                <p>
                  Extend your stocks / ETF / fund offering with a credible
                  crypto line (BTC, ETH, DeFi yield) — without standing up a
                  dedicated department or changing your investor-facing
                  interface.
                </p>
                <ul>
                  <li>Bitcoin and Ethereum in the portfolio</li>
                  <li>DeFi yield on stablecoins</li>
                  <li>Reporting integrated into your dashboard</li>
                  <li>Reuse of your existing KYC</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STAT BANNER ======================================= */}
        <section className="stat-banner section-tight">
          <div className="container">
            <div className="grid grid-3">
              <div className="stat reveal">
                <div className="stat-num">
                  <span className="counter" data-target="5" data-suffix=" days">
                    5 days
                  </span>
                </div>
                <div className="stat-label">
                  average integration time — instead of 3 to 6 months in-house
                </div>
              </div>
              <div className="stat reveal reveal-delay-1">
                <div className="stat-num">5–6×</div>
                <div className="stat-label">
                  cheaper than building the stack in-house, starting year 1
                </div>
              </div>
              <div className="stat reveal reveal-delay-2">
                <div className="stat-num">1 API</div>
                <div className="stat-label">
                  instead of assembling a stack and signing five vendor contracts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VP1 : SPEED ======================================= */}
        <section id="product">
          <div className="container">
            <div className="vp-section">
              <div className="vp-text reveal">
                <span className="eyebrow">Speed</span>
                <h2>
                  5 days to integrate.
                  <br />
                  Not 6 months to build.
                </h2>
                <p>
                  Your developers integrate a React SDK and one webhook
                  endpoint. That's it. No cryptography to handle, no stack to
                  assemble, no vendors to learn.
                </p>
                <ul>
                  <li>Drop-in React SDK for the front end, strict TypeScript types</li>
                  <li>HMAC-signed webhooks for the backend, exponential retry built in</li>
                  <li>Testnet sandbox open from sign-up</li>
                  <li>Go live by flipping one API key</li>
                </ul>
              </div>
              <div className="vp-visual reveal reveal-delay-1">
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-dot r"></span>
                    <span className="code-dot y"></span>
                    <span className="code-dot g"></span>
                    <span className="code-file">App.tsx</span>
                  </div>
                  <pre>
                    <span className="c">{`// 1. Install\n// $ npm install @fibo/react-sdk\n\n`}</span>
                    <span className="k">import</span>
                    {` { `}
                    <span className="v">FiboProvider</span>
                    {`, `}
                    <span className="v">FiboWalletCard</span>
                    {`,\n         `}
                    <span className="v">FiboSwapWidget</span>
                    {`, `}
                    <span className="v">FiboYieldWidget</span>
                    {` } `}
                    <span className="k">from</span>
                    {` `}
                    <span className="s">'@fibo/react-sdk'</span>
                    {`;\n\n`}
                    <span className="k">export function</span>
                    {` `}
                    <span className="t">App</span>
                    {`() {\n  `}
                    <span className="k">return</span>
                    {` (\n    <`}
                    <span className="t">FiboProvider</span>
                    {` apiKey={`}
                    <span className="v">process</span>
                    {`.env.`}
                    <span className="v">FIBO_KEY</span>
                    {`}>\n      <`}
                    <span className="t">FiboWalletCard</span>
                    {` />\n      <`}
                    <span className="t">FiboSwapWidget</span>
                    {` />\n      <`}
                    <span className="t">FiboYieldWidget</span>
                    {` />\n    </`}
                    <span className="t">FiboProvider</span>
                    {`>\n  );\n}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VP2 : REVENUE ===================================== */}
        <section
          style={{
            background:
              'linear-gradient(180deg, white 0%, var(--landing-slate-50) 100%)',
          }}
        >
          <div className="container">
            <div className="vp-section vp-reverse">
              <div className="vp-text reveal">
                <span className="eyebrow">New revenue</span>
                <h2>
                  A new revenue line.
                  <br />
                  Without standing up a department.
                </h2>
                <p>
                  To ship crypto in-house today, you need a compliance team, a
                  regulatory team, capital reserves, crypto engineers who barely
                  exist on the market, and the blockchain infrastructure that
                  costs a fortune to build. That's a seven-figure project over
                  18 months.
                </p>
                <p>
                  With Fibo, you launch the crypto line next week, for the price
                  of one senior engineer — and you keep the full margin on the
                  products you offer to your users.
                </p>
              </div>
              <div className="vp-visual reveal reveal-delay-1">
                <div className="roi-card">
                  <h4>Year 1 cost — side by side</h4>
                  <div className="roi-row">
                    <div className="roi-label">In-house crypto team</div>
                    <div className="roi-bad">≈ €200k</div>
                    <div className="roi-good">€0</div>
                  </div>
                  <div className="roi-row">
                    <div className="roi-label">Compliance + regulatory</div>
                    <div className="roi-bad">≈ €60k</div>
                    <div className="roi-good">Included</div>
                  </div>
                  <div className="roi-row">
                    <div className="roi-label">Blockchain infrastructure</div>
                    <div className="roi-bad">≈ €50k</div>
                    <div className="roi-good">Included</div>
                  </div>
                  <div className="roi-row">
                    <div className="roi-label">Fibo Growth platform</div>
                    <div className="roi-bad">—</div>
                    <div className="roi-good">~ €54k</div>
                  </div>
                  <div className="roi-summary">
                    <span className="roi-summary-label">Total year 1 cost</span>
                    <span className="roi-summary-value">−83%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VP3 : NATIVE UX =================================== */}
        <section>
          <div className="container">
            <div className="vp-section">
              <div className="vp-text reveal">
                <span className="eyebrow">Native experience</span>
                <h2>
                  Your users never see the word
                  <br />
                  <em>
                    <span className="gradient-text">"crypto"</span>
                  </em>
                  .
                </h2>
                <p>
                  No seed phrase to memorize, no ETH to buy to cover gas, no
                  external wallet to install, no third-party app to download.
                  Your users see euros, savings products, transfers — exactly
                  what they already use with you.
                </p>
                <ul>
                  <li>Gas-free transactions (sponsored by Fibo)</li>
                  <li>Embedded wallets inside your app, behind your branding</li>
                  <li>Full white-label (CSS variables, logo, copy)</li>
                  <li>One-step onboarding through your existing auth</li>
                </ul>
              </div>
              <div className="vp-visual reveal reveal-delay-1">
                <div className="flow-card">
                  <div className="flow-header">
                    <div className="flow-header-cell">What the user sees</div>
                    <div className="flow-header-cell">What actually happens</div>
                  </div>
                  <div className="flow-step">
                    <div className="flow-user">Open a Savings+ account</div>
                    <div className="flow-tech">
                      <span className="accent">→</span> On-chain wallet created
                      <br />
                      auth delegated to your backend
                    </div>
                  </div>
                  <div className="flow-step">
                    <div className="flow-user">Deposit €1,000</div>
                    <div className="flow-tech">
                      <span className="accent">→</span> SEPA → USDC stablecoin
                      <br />
                      routed via Fibo
                    </div>
                  </div>
                  <div className="flow-step">
                    <div className="flow-user">My balance earning 4%</div>
                    <div className="flow-tech">
                      <span className="accent">→</span> DeFi yield allocation
                      <br />
                      orchestrated in the background
                    </div>
                  </div>
                  <div className="flow-step">
                    <div className="flow-user">Withdraw €500</div>
                    <div className="flow-tech">
                      <span className="accent">→</span> Withdraw + swap + off-ramp
                      <br />
                      gas fees absorbed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS ====================================== */}
        <section className="integration">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">How it works</span>
              <h2>
                Three steps.
                <br />
                <span className="gradient-text">One week.</span>
              </h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Your developers integrate Fibo the way they'd integrate any
                modern API. No stack to learn, no cryptography to handle.
              </p>
            </div>

            <div className="integration-steps">
              <div className="int-step reveal">
                <div className="int-step-num">1</div>
                <h4>Frontend</h4>
                <p>
                  Install the React SDK, add the Provider and drop-in components
                  to your app. Three components are enough to ship wallets,
                  swaps, and yield.
                </p>
                <span className="int-step-time">⏱ &lt; 2 hours</span>
              </div>
              <div className="int-step reveal reveal-delay-1">
                <div className="int-step-num">2</div>
                <h4>Backend</h4>
                <p>
                  One webhook endpoint listening for three events: wallet
                  created, transaction confirmed, deposit received. You update
                  your database. Done.
                </p>
                <span className="int-step-time">⏱ &lt; 4 hours</span>
              </div>
              <div className="int-step reveal reveal-delay-2">
                <div className="int-step-num">3</div>
                <h4>Go live</h4>
                <p>
                  Validate in the testnet sandbox, then flip the API key to{' '}
                  <code>pk_live_</code>. Real-time dashboard for monitoring.
                </p>
                <span className="int-step-time">⏱ 1–2 days of validation</span>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON ======================================== */}
        <section className="comparison">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Build or integrate</span>
              <h2>
                The <span className="gradient-text">real math</span>.
              </h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Assumption: a consumer fintech generating €1M of monthly crypto
                transaction volume.
              </p>
            </div>

            <div className="compare-table reveal">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Build in-house</th>
                    <th className="fibo">Fibo (Growth)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time-to-market</td>
                    <td>3 to 6 months</td>
                    <td className="fibo-col">
                      <span className="yes">≈ 5 days</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Year 1 cost</td>
                    <td>≈ €310k</td>
                    <td className="fibo-col">
                      <span className="yes">≈ €54k</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Recurring cost (year 2+)</td>
                    <td>≈ €180k/year</td>
                    <td className="fibo-col">
                      <span className="yes">≈ €54k/year, all included</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Team to hire</td>
                    <td>2 crypto engineers + compliance + regulatory</td>
                    <td className="fibo-col">
                      <span className="yes">0</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Capital reserves / gas tank</td>
                    <td>≈ €100k in locked stablecoins</td>
                    <td className="fibo-col">
                      <span className="yes">€0</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Maintenance + new chains</td>
                    <td>Your team, continuously</td>
                    <td className="fibo-col">
                      <span className="yes">Included, automatic</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Cash-flow positive on feature</td>
                    <td>Month 9 to 12</td>
                    <td className="fibo-col">
                      <span className="yes">Month 2</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PRICING =========================================== */}
        <section id="pricing">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Pricing</span>
              <h2>
                You pay when
                <br />
                your users <span className="gradient-text">transact</span>.
              </h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                A predictable subscription plus a percentage on the volume you
                actually process. No annual commitment on Starter and Growth.
              </p>
            </div>

            <div className="pricing-grid">
              <div className="tier reveal">
                <div className="tier-name">Starter</div>
                <div className="tier-target">
                  For early-stage fintechs testing the crypto feature.
                </div>
                <div className="tier-price">
                  <div className="tier-price-main">
                    €500
                    <span
                      style={{
                        fontSize: 18,
                        color: 'var(--landing-slate-500)',
                        fontWeight: 500,
                      }}
                    >
                      /month
                    </span>
                  </div>
                  <div className="tier-price-period">
                    + 0.30% on transaction volume
                  </div>
                </div>
                <hr className="tier-divider" />
                <ul className="tier-features">
                  <li>Multi-chain wallets</li>
                  <li>Gas-free transactions</li>
                  <li>Cross-chain swaps</li>
                  <li>DeFi yield (stablecoins, ETH)</li>
                  <li>SDK + sandbox + docs</li>
                  <li>Email support</li>
                  <li>Up to 1,000 active users</li>
                </ul>
                <div className="tier-cta">
                  <a
                    href="mailto:hello@fibo.io?subject=Starter%20plan"
                    className="btn btn-secondary"
                  >
                    Get started
                  </a>
                </div>
              </div>

              <div className="tier tier-featured reveal reveal-delay-1">
                <div className="tier-badge">Recommended</div>
                <div className="tier-name">Growth</div>
                <div className="tier-target">
                  For scale-ups in a product differentiation race.
                </div>
                <div className="tier-price">
                  <div className="tier-price-main">
                    €2,500
                    <span
                      style={{
                        fontSize: 18,
                        color: 'var(--landing-slate-500)',
                        fontWeight: 500,
                      }}
                    >
                      /month
                    </span>
                  </div>
                  <div className="tier-price-period">
                    + 0.20% on transaction volume
                  </div>
                </div>
                <hr className="tier-divider" />
                <ul className="tier-features">
                  <li>Everything in Starter</li>
                  <li>EUR ↔ stablecoin ramping</li>
                  <li>KYC bridge to your vendor</li>
                  <li>Full white-label (CSS variables)</li>
                  <li>Priority support (shared Slack)</li>
                  <li>Up to 10,000 active users</li>
                  <li>Advanced dashboard + analytics</li>
                </ul>
                <div className="tier-cta">
                  <a
                    href="mailto:hello@fibo.io?subject=Growth%20plan"
                    className="btn btn-primary"
                  >
                    Book a demo
                  </a>
                </div>
              </div>

              <div className="tier reveal reveal-delay-2">
                <div className="tier-name">Enterprise</div>
                <div className="tier-target">
                  For established players with high volume and custom
                  requirements.
                </div>
                <div className="tier-price">
                  <div className="tier-price-main">Custom</div>
                  <div className="tier-price-period">
                    Pricing negotiated on volume and features
                  </div>
                </div>
                <hr className="tier-divider" />
                <ul className="tier-features">
                  <li>Everything in Growth</li>
                  <li>Contractual SLAs</li>
                  <li>Dedicated account manager</li>
                  <li>Custom integrations</li>
                  <li>Volume-based discounts</li>
                  <li>Unlimited active users</li>
                  <li>Shared security audit</li>
                </ul>
                <div className="tier-cta">
                  <a
                    href="mailto:hello@fibo.io?subject=Enterprise%20inquiry"
                    className="btn btn-secondary"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ =============================================== */}
        <section
          id="faq"
          style={{ background: 'var(--landing-slate-50)' }}
        >
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">FAQ</span>
              <h2>
                Questions we <span className="gradient-text">get asked</span>.
              </h2>
            </div>

            <div className="faq-list">
              <details className="faq-item reveal" open>
                <summary>Who is Fibo built for — and who isn't it for?</summary>
                <div className="faq-body">
                  Fibo is built for <strong>consumer fintechs</strong> that want
                  to add a crypto layer to an existing product — typically
                  neobanks, payment apps, brokers, wealth-tech. It is{' '}
                  <strong>not</strong> for custodial exchanges (Binance,
                  Coinbase-style), nor for platforms that want to hold their
                  customers' funds — by design, we don't enable that.
                </div>
              </details>

              <details className="faq-item reveal">
                <summary>How long to get started?</summary>
                <div className="faq-body">
                  Demo: 30 minutes. Sandbox accessible right after. Full
                  integration: roughly 5 days on your side, sandbox validation
                  included. Go live: flip one API key. We support your team on
                  Slack throughout the entire integration phase (Growth and
                  Enterprise plans).
                </div>
              </details>

              <details className="faq-item reveal">
                <summary>How does Fibo fit into our current regulatory framework?</summary>
                <div className="faq-body">
                  Fibo's architecture is designed{' '}
                  <strong>not to alter your existing regulatory perimeter</strong>.
                  Your users control their own private keys — you never hold
                  their assets. You remain a software distributor; you don't
                  operate an asset custody service. We support your legal team
                  in qualifying your specific case if needed.
                </div>
              </details>

              <details className="faq-item reveal">
                <summary>Do you handle our users' KYC?</summary>
                <div className="faq-body">
                  No, and that's by design. You keep control over your
                  customers' KYC (likely already managed by a vendor you use for
                  your other asset classes). When you turn on our EUR ramping
                  connector, we automatically bridge your existing KYC over to
                  the ramp partners — zero double-KYC for the end user.
                </div>
              </details>

              <details className="faq-item reveal">
                <summary>Who pays the blockchain gas?</summary>
                <div className="faq-body">
                  Nobody pays native gas on the user side (no ETH or SOL to buy
                  to sign a transaction). Fibo absorbs the gas fees and charges
                  them back in stablecoin on the final transaction. On your
                  P&amp;L, these fees are already included in our pricing (% on
                  volume).
                </div>
              </details>

              <details className="faq-item reveal">
                <summary>What happens if Fibo disappears?</summary>
                <div className="faq-body">
                  Your users keep their keys and their funds — by design, that's
                  what non-custodial means. They can export their seed phrase
                  from your app at any time and migrate to any other wallet.
                  You, on your side, lose our orchestration layer (API, gasless,
                  swap routing). It's the opposite of the custodial model: your
                  risk is operational, never existential.
                </div>
              </details>

              <details className="faq-item reveal">
                <summary>Which SDKs and languages do you support?</summary>
                <div className="faq-body">
                  <strong>Frontend</strong>: <code>@fibo/react-sdk</code> (React
                  18+, Next.js, Vite). React Native SDK on the roadmap.{' '}
                  <strong>Backend</strong>: <code>@fibo/node-sdk</code> (Node.js,
                  TypeScript-first). If your backend runs Python, Go, Ruby or
                  another language, our public REST API works directly. Full
                  documentation at <code>docs.fibo.io</code>.
                </div>
              </details>

              <details className="faq-item reveal">
                <summary>How big is your team?</summary>
                <div className="faq-body">
                  Small and focused. We operated a consumer crypto application
                  in production for 24 months before turning that infrastructure
                  into a SaaS. The technical stack at the core of Fibo has been
                  battle-tested by thousands of real transactions — that's the
                  proven infrastructure you're buying today.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA ========================================= */}
        <section className="cta-banner">
          <div className="container">
            <h2 className="reveal">
              Your competitors have already shipped.
              <br />
              Catch up in a week.
            </h2>
            <p className="reveal reveal-delay-1">
              A 30-minute demo. We'll show you exactly how Fibo plugs into your
              stack — and what it costs for your volume.
            </p>
            <div className="ctas reveal reveal-delay-2">
              <a
                href="mailto:hello@fibo.io?subject=Demo%20request"
                className="btn btn-primary btn-lg"
              >
                Book a demo
                <span className="btn-arrow">→</span>
              </a>
              <Link
                to="/docs/introduction"
                className="btn btn-secondary btn-lg"
              >
                Read the docs
              </Link>
            </div>
            <p className="cta-micro reveal reveal-delay-3">
              No commitment · Testnet sandbox open immediately
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
