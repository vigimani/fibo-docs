import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './Card.module.css';

type CardGroupProps = {
  cols?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
};

export function CardGroup({ cols = 2, children }: CardGroupProps) {
  return (
    <div
      className={styles.group}
      style={{ '--card-cols': cols } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

type CardProps = {
  title: string;
  icon?: string;
  href?: string;
  children?: React.ReactNode;
};

const ICONS: Record<string, string> = {
  rocket: '🚀',
  'layer-group': '🧱',
  wallet: '💳',
  terminal: '⌨',
  'arrow-right-arrow-left': '⇄',
  webhook: '🔔',
  'building-columns': '🏛',
  bolt: '⚡',
  key: '🔑',
  shield: '🛡',
  link: '🔗',
  book: '📘',
};

export function Card({ title, icon, href, children }: CardProps) {
  const inner = (
    <>
      {icon && <span className={styles.icon}>{ICONS[icon] ?? '◆'}</span>}
      <h3 className={styles.title}>{title}</h3>
      {children && <p className={styles.description}>{children}</p>}
    </>
  );

  if (href) {
    return (
      <Link className={clsx(styles.card, styles.cardLink)} to={href}>
        {inner}
      </Link>
    );
  }
  return <div className={styles.card}>{inner}</div>;
}
