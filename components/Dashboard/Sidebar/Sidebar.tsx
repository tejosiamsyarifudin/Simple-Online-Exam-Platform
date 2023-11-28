'use client'

import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
    IconHome2,
} from '@tabler/icons-react';
import classes from './Sidebar.module.css';

interface SidebarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function SidebarLink({ icon: Icon, label, active, onClick }: SidebarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: 'Dashboard' },
];

export function Sidebar() {
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <SidebarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <nav className={classes.sidebar} data-testid="sidebar">
            <div className={classes.sidebarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>
        </nav>
    );

}