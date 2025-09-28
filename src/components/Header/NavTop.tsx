import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconInfoCircle,
  IconNotification,
  IconCalendar,
  IconUser,
  IconHome,
  IconLibraryPhoto,
  IconEye,
  IconTrophy
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavTop.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémons cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargles tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shells rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

const electionsDropdownData = [
  {
    icon: IconEye,
    title: 'View Live Election',
    description: 'Monitor ongoing elections in real-time',
    href: '/elections/live'
  },
  {
    icon: IconTrophy,
    title: 'View Results',
    description: 'Check completed election results',
    href: '/elections'
  }
];

export function NavTop() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [electionsOpened, { toggle: toggleElections }] = useDisclosure(false);
  const [electionsHovered, { open: openElections, close: closeElections }] = useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const electionsDropdownLinks = electionsDropdownData.map((item) => (
    <UnstyledButton
      className={classes.electionsSubLink}
      key={item.title}
      component="a"
      href={item.href}
    >
      <Group wrap="nowrap" align="flex-start">
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const handleElectionsClick = () => {
    if (electionsHovered) {
      closeElections();
    } else {
      openElections();
    }
  };

  return (
    <Box pb={10}>
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <a href="/" className={classes.logo}>
            <img 
              src="\esomeloicon.png" 
              alt="Esomelo Primary School Logo" 
              className={classes.logoImage}
            />
            <Text className={classes.logoText}>
              Esomelo Primary School
            </Text>
          </a>
          
          <Group
            align="center"
            h="100%"
            gap={0}
            visibleFrom="md"
            className={`${classes.navLinks} nav-links`}
          >
            <a
              href="/"
              className={`${classes.link} ${pathname === '/' ? classes.active : ''}`}
            >
              Home
            </a>
            <a
              href="/aboutus"
              className={`${classes.link} ${pathname === '/aboutus' ? classes.active : ''}`}
            >
              About Us
            </a>
            <a
              href="/events"
              className={`${classes.link} ${pathname === '/events' ? classes.active : ''}`}
            >
              Events
            </a>
            <a
              href="/apply"
              className={`${classes.link} ${pathname === '/apply' ? classes.active : ''}`}
            >
              Apply
            </a>
            <a
              href="/media"
              className={`${classes.link} ${pathname === '/media' ? classes.active : ''}`}
            >
              Gallery
            </a>
            
            <HoverCard
              width={300}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
              onOpen={openElections}
              onClose={closeElections}
            >
              <HoverCard.Target>
                <UnstyledButton
                  className={`${classes.link} ${pathname.startsWith('/elections') ? classes.active : ''}`}
                  onClick={handleElectionsClick}
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Elections
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </UnstyledButton>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <SimpleGrid cols={1} spacing={0}>
                  {electionsDropdownLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <Button
              variant="default"
              component="a"
              href="https://online.bodapro.app/extensions/esomelo"
              target="_blank"
              rel="noopener noreferrer"
              c="white"
              bg={theme.colors.blue[6]}
              className={classes.navButton}
            >
              <IconUser size={16} />
              Log in
            </Button>
          </Group>

          <Burger 
            opened={drawerOpened} 
            onClick={toggleDrawer} 
            hiddenFrom="md"
            color="white"
            className={classes.hamburger}
          />
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="16px"
        title="Navigation"
        hiddenFrom="md"
        zIndex={100}
        styles={{
          content: {
            backgroundColor: '#228be6',
          },
          header: {
            backgroundColor: '#228be6',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          },
          title: {
            color: 'white',
            fontWeight: 700,
          }}}
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
              href="/aboutus" 
              className={`${classes.drawerLink} ${pathname === '/aboutus' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              About Us
            </a>
            <a 
              href="/events" 
              className={`${classes.drawerLink} ${pathname === '/events' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              Events
            </a>
            <a 
              href="/apply" 
              className={`${classes.drawerLink} ${pathname === '/apply' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              Apply
            </a>
            <a 
              href="/media" 
              className={`${classes.drawerLink} ${pathname === '/media' ? classes.drawerLinkActive : ''}`}
              onClick={closeDrawer}
            >
              Gallery
            </a>
            
            <UnstyledButton
              className={`${classes.drawerLink} ${pathname.startsWith('/elections') ? classes.drawerLinkActive : ''}`}
              onClick={toggleElections}
            >
              <Group justify="space-between">
                <span>Elections</span>
                <IconChevronDown
                  size={16}
                  style={{
                    transform: electionsOpened ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </Group>
            </UnstyledButton>

            <Collapse in={electionsOpened}>
              <div className={classes.mobileSubMenu}>
                <a 
                  href="/elections/live" 
                  className={`${classes.drawerSubLink} ${pathname === '/elections/live' ? classes.drawerLinkActive : ''}`}
                  onClick={closeDrawer}
                >
                  <Group>
                    <span>View Live Election</span>
                  </Group>
                </a>
                <a 
                  href="/elections" 
                  className={`${classes.drawerSubLink} ${pathname === '/elections' ? classes.drawerLinkActive : ''}`}
                  onClick={closeDrawer}
                >
                  <Group>
                    <span>View Results</span>
                  </Group>
                </a>
              </div>
            </Collapse>
          </div>

          <Collapse in={linksOpened}>{links}</Collapse>

          <Divider my="12px" color="rgba(255, 255, 255, 0.1)" />

          <Group justify="center" grow pb="24px" px="16px">
            <Button 
              variant="default"
              component="a"
              href="https://online.bodapro.app/extensions/esomelo"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.drawerButton}
              onClick={closeDrawer}
            >
              <IconUser size={16} />
              Log in
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}