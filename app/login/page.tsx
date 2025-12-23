import { Container, Title, TextInput, Button, Stack } from "@mantine/core";

export default function LoginPage() {
  return (
    <Container size="xs" mt={120}>
      <Stack>
        <Title order={3}>Login</Title>
        <TextInput label="Email" placeholder="you@example.com" />
        <TextInput label="Password" type="password" />
        <Button fullWidth>Login</Button>
      </Stack>
    </Container>
  );
}
