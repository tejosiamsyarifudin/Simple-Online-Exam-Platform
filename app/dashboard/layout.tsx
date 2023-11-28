import { Box, Container } from "@mantine/core"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

    return (
        <Container size="responsive" p={20} fluid bg="var(--mantine-color-blue-light)">
            <Box style={{
                margin: 'auto',
            }}>
                {children}
            </Box>
        </Container >
    )
}