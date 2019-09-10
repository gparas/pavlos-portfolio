import React from 'react';
import { withRouter } from 'next/router';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from './Link';

const styles = theme => ({
  brand: {
    flexGrow: 1,
    fontWeight: theme.typography.fontWeightBold,
  },
  link: {
    position: 'relative',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    '&:after': {
      content: '""',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 0,
      height: 2,
      transition: 'width .3s',
    },
    '&$active, &:hover': {
      '&:after': {
        width: '100%',
      },
    },
  },
  active: {},
});

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

function Header(props) {
  const { router, classes } = props;
  return (
    <AppBar color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.brand}>
          Pavlos Vos
        </Typography>
        {links.map(({ key, href, label }) => (
          <Link
            key={key}
            href={href}
            underline="none"
            className={clsx(classes.link, {
              [classes.active]: router.pathname === href,
            })}
          >
            {label}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(withStyles(styles, { name: 'Header' })(Header));
