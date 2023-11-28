'use client'

import {
    AppShell,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Content } from './Content/Content';

export function Dashboard() {
    const [opened] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            data-testid="dashboard"
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>

            <AppShell.Navbar>
                <Sidebar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Content />
            </AppShell.Main>
        </AppShell>
    );

}