"use client";

import {
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { IconUser, IconMail, IconLock, IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      password: (value) =>
        value.length > 0 ? null : "Password is required",
      name: (value) =>
        !isLogin && value.length === 0 ? "Name is required" : null,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      login({
        name: values.name || "Alex Johnson",
        email: values.email,
      });
      router.push("/dashboard");
    }, 1000);
  });

  return (
    <Box
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--mantine-color-gray-0)",
      }}
      p="md"
    >
      <Paper
        shadow="xl"
        radius="lg"
        p="xl"
        w="100%"
        maw={420}
        withBorder
      >
        <Stack align="center" gap="md" mb="xl">
          <Box
            p="md"
            style={{
              backgroundColor: "var(--mantine-color-blue-0)",
              borderRadius: 12,
              color: "var(--mantine-color-blue-6)",
            }}
          >
            <IconUser size={32} />
          </Box>
          <Title order={2}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </Title>
          <Text c="dimmed" ta="center" size="sm">
            {isLogin
              ? "Enter your credentials to access your insights."
              : "Start your journey to interview success today."}
          </Text>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            {!isLogin && (
              <TextInput
                label="Full Name"
                placeholder="e.g. Alex Johnson"
                leftSection={<IconUser size={16} />}
                {...form.getInputProps("name")}
              />
            )}

            <TextInput
              label="Email Address"
              placeholder="name@company.com"
              leftSection={<IconMail size={16} />}
              {...form.getInputProps("email")}
            />

            <PasswordInput
              label="Password"
              placeholder="••••••••"
              leftSection={<IconLock size={16} />}
              {...form.getInputProps("password")}
            />

            {error && (
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "var(--mantine-color-red-0)",
                  color: "var(--mantine-color-red-7)",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <IconAlertCircle size={16} />
                <Text size="sm">{error}</Text>
              </Box>
            )}

            <Button
              type="submit"
              fullWidth
              size="md"
              loading={loading}
              mt="md"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </Stack>
        </form>

        <Text ta="center" size="sm" c="dimmed" mt="lg">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Text
            component="button"
            type="button"
            variant="link"
            fw={600}
            c="blue.6"
            onClick={() => {
              setIsLogin(!isLogin);
              form.reset();
              setError("");
            }}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Text>
        </Text>
      </Paper>
    </Box>
  );
}
