import classes from './LoginForm.module.css';
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Stack,
  Container,
  Title,
} from '@mantine/core';

export function LoginForm() {

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Portal Sekolah
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form>
          <Stack>
            <TextInput
              required
              label="Username"
              placeholder="tejosiam@gmail.com"
              radius="md"
              data-testid="username"
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Visi123##"
              radius="md"
              className="password"
              data-testid="password"
            />
          </Stack>
          <Group justify="space-between" mt="xs">
            <Button type="submit" radius="xl" data-testid="login" fullWidth mt="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>

  );
}