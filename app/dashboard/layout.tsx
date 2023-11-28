import { Box, Container } from "@mantine/core"

export default function LoginLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <Container size="responsive" fluid bg="var(--mantine-color-blue-light)">
            <Box style={{
                margin: 'auto',
            }}>
                {children}
            </Box>
        </Container >
    )
}