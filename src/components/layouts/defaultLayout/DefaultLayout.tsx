import { ActionIcon, Button, Container, createStyles, Group, Header as MantineHeader } from '@mantine/core';
import { BrandReact, Plus } from 'tabler-icons-react';
import { ColorSchemeButton } from '../../ColorSchemeButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavLinks, Routes } from '../../../routes/routes';
import { useAllMQ } from '../../../base/hooks/useAllMQ';
import { MobileNavItem } from './components/MobileNavItem';
import { DesktopNavItem } from './components/DesktopNavItem';

const DefaultLayout = (props: { children: JSX.Element }) => {
  const { classes } = useStyles();

  const navigate = useNavigate();
  const location = useLocation();

  const { isMD } = useAllMQ();

  //Handlers
  const handleUserButton = () => {
    navigate(Routes.profile);
  };

  //Renders
  const renderDesktopMenu = () => {
    return (
      <MantineHeader height={55} fixed={true}>
        <Container size={'xl'} className={classes.inner}>
          <Group align={'stretch'}>
            <ActionIcon size={'xl'}>
              <BrandReact size={40} />
            </ActionIcon>
            {renderDesktopNavList()}
          </Group>
          <Group position={'right'}>
            {location.pathname !== Routes.auth && (
              <Button variant={'subtle'} onClick={handleUserButton}>
                Профиль
              </Button>
            )}
            <ColorSchemeButton />
          </Group>
        </Container>
      </MantineHeader>
    );
  };

  const renderDesktopNavList = () => {
    return (
      <Group align={'center'} pt={2} pl={8}>
        {NavLinks.map(link => {
          return <DesktopNavItem link={link} />;
        })}
      </Group>
    );
  };

  const renderMobileMenu = () => {
    return (
      <MantineHeader height={60} fixed={true} position={{ bottom: -1, left: 0, right: 0 }}>
        <Group grow>
          {NavLinks.map(link => {
            return <MobileNavItem link={link} />;
          })}
          <Link
            style={{ position: 'absolute', height: '75px', width: '75px', bottom: '3px', right: '7vw' }}
            to={Routes.main}
          >
            <ActionIcon radius="xl" style={{ height: '70px', width: '70px' }} variant="filled">
              <Plus size={30} />
            </ActionIcon>
          </Link>
        </Group>
      </MantineHeader>
    );
  };

  return (
    <>
      {isMD ? renderDesktopMenu() : renderMobileMenu()}
      <Container size={'xl'} py={70}>
        {props.children}
      </Container>
    </>
  );
};
export default DefaultLayout;

const useStyles = createStyles(theme => ({
  inner: {
    height: 55,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkLabel: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
  },
}));
