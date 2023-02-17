import React from 'react';
import { createStyles, Menu } from '@mantine/core';
import { NavLinkModel } from '../../../../routes/routes';
import { Link } from 'react-router-dom';

interface INavLinkProps {
  link: NavLinkModel;
}

export const DesktopNavItem: React.FC<INavLinkProps> = props => {
  const { link } = props;

  const { classes } = useStyles();

  //Render
  return (
    <Menu key={link.title}>
      <Menu.Target>
        <Link to={link.path}>
          <span className={classes.linkLabel}>{link.title}</span>
        </Link>
      </Menu.Target>
    </Menu>
  );
};

const useStyles = createStyles(theme => ({
  linkLabel: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
  },
}));
