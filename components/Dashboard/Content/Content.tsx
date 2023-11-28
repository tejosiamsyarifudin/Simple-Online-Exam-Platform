import {
    Card,
    Image,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
    rem,
    useMantineTheme,
} from "@mantine/core";
import { IconPlayerPlay } from '@tabler/icons-react';
import classes from './Content.module.css';

export function Content() {
    const theme = useMantineTheme();

    return (
        <Card withBorder padding="lg" radius="md" className={classes.card} data-testid="content">
            <Card.Section mb="sm">
                <Image
                    src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    alt="Top 50 underrated plants for house decoration"
                    height={180} />
            </Card.Section>

            <Badge w="fit-content" variant="light">
                Bahasa Indonesia
            </Badge>

            <Text fw={700} className={classes.title} mt="xs">
                Ujian Harian XX1
            </Text>

            <Group mt="lg">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                    radius="sm" />
                <div>
                    <Text fw={500}>Elsa Gardenowl</Text>
                    <Text fz="xs" c="dimmed">
                        telah diposting 35 menit lalu
                    </Text>
                </div>
            </Group>

            <Card.Section className={classes.footer}>
                <Group justify="space-between">
                    <Text fz="xs" c="dimmed">
                        39 pelajar sedang dalam ruangan
                    </Text>
                    <Group gap={0}>
                        <ActionIcon variant="subtle" color="gray">
                            <IconPlayerPlay
                                style={{ width: rem(20), height: rem(20) }}
                                color={theme.colors.blue[6]}
                                stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    );
}