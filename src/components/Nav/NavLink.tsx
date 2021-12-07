import React from 'react';
import Link from 'next/link';

export default function NavLink({ name, href }: { name: string; href?: string }): JSX.Element {
  return (
    <li className={`nav__link nav__link--${name}`}>
      <Link href={href ?? `/${name}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
    </li>
  );
}
