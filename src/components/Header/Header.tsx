import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import classes from './Header.module.css';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <Box>      
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <Group className={classes.logo}>
            <div className={classes.logoImage}>
              <img 
              src="\twdlogo.png" 
              alt="White Dove logo" 
              className={classes.logoImageIn}
            />
            </div>
            
          </Group>
          <Text className={classes.logoText}>
              The White Doves Kindergarten
          </Text>
          <Group
            align="right"
            h="100%"
            gap={2}
            visibleFrom="md"
            className={classes.navLinks}
          >
            <a
              href="/"
              className={`${classes.link} ${pathname === '/' ? classes.active : ''}`}
            >
              Home
            </a>
            <a
              href="/programs"
              className={`${classes.link} ${pathname === '/programs' ? classes.active : ''}`}
            >
              Programs
            </a>
            <a
              href="/admission"
              className={`${classes.link} ${pathname === '/admission' ? classes.active : ''}`}
            >
              Join Us 
            </a>
            <a
              href="/gallery"
              className={`${classes.link} ${pathname === '/gallery' ? classes.active : ''}`}
            >
              Gallery
            </a>
          </Group>

          <Burger 
            opened={drawerOpened} 
            onClick={toggleDrawer} 
            hiddenFrom="md"
            className={classes.hamburger}
            color='white'
          />
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="16px"
        title="The White Doves Kindergarten"
        hiddenFrom="md"
        zIndex={100}
        styles={{
          content: {
            backgroundColor: '#1e5fb3',
          },
          header: {
            backgroundColor: '#1e5fb3',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          },
          title: {
            color: 'white',
            fontWeight: 700,
          }
        }}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-16px" className={classes.drawerContent}>
          <Divider my="12px" color="rgba(255, 255, 255, 0.1)" />

          <div style={{ padding: '0 16px' }}>
            <a 
              href="/" 
              className={`${classes.drawerLink} ${pathname === '/' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              Home
            </a>
            <a 
              href="/programs" 
              className={`${classes.drawerLink} ${pathname === '/programs' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              Programs
            </a>
            <a 
              href="/admission" 
              className={`${classes.drawerLink} ${pathname === '/admission' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              Join Us
            </a>
            <a 
              href="/gallery" 
              className={`${classes.drawerLink} ${pathname === '/gallery' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              Gallery
            </a>
          </div>

          <Divider my="12px" color="rgba(255, 255, 255, 0.1)" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}