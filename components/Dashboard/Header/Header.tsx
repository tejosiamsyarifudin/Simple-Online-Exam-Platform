'use client'

import { Burger, Box, Group, Button, Drawer, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    return (
        <Box pb={120}>
            <header className={classes.header} data-testid="header">
                <Group justify="space-between" h="100%">
                    PORTAL
                    <Group visibleFrom="sm">
                        <Button variant="default" data-testid="logout">Log out</Button>
                    </Group>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="PORTAL"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log out</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}