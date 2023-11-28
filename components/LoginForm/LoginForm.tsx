'use client'

import { loginUser } from '@/app/api/auth/login';
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
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const router = useRouter()
  const form = useForm({
    initialValues: { username: 'eve.holt@reqres.in', password: 'cityslicka' },
    validate: {
      username: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid username'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email: form.values.username,
        password: form.values.password,
      });
      const token = response.token;
      localStorage.setItem('token', token);
      form.reset();
      console.log('Login successful');
      isLogin()

    } catch (error) {
      console.error(error);
      alert('Invalid username and password');
    }
  };

  const isLogin = async () => {
    const storedToken = localStorage.getItem('token');
    console.log(storedToken)
    if (storedToken) {
      router.push('/dashboard');
    }
  };

  useEffect(() => {
    isLogin()
  }, []);


  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Portal Sekolah
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleLogin)}>
          <Stack>
            <TextInput
              required
              label="Username"
              placeholder="eve.holt@reqres.in"
              radius="md"
              data-testid="username"
              value={form.values.username}
              onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
              error={form.errors.username && 'Invalid username'}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="cityslicka"
              radius="md"
              className="password"
              data-testid="password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
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