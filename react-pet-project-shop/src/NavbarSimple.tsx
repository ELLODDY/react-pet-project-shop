import { useState } from 'react';
import {
  IconDatabaseImport,
  IconFocus,
  IconHome,
  IconGitPullRequest,
  IconBrandHipchat,
} from '@tabler/icons-react';
import classes from './NavbarSimple.module.scss';
import { UserButton } from './UserButton';

const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Pull Requests', icon: IconGitPullRequest },
  { link: '', label: 'Open Isues', icon: IconFocus },
  { link: '', label: 'Discussions', icon: IconBrandHipchat },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}