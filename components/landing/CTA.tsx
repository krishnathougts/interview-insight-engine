"use client";

import { Container, Title, Text, Button, Stack } from "@mantine/core";
import Link from "next/link";

export function CTA() {
  return (
    <Container size="md" py={100} ta="center">
      <Stack gap="lg">
        <Title order={2} size="2rem">
          Stop guessing why you&apos;re getting rejected.
        </Title>

        <Text c="dimmed" size="lg">
          Upload your interview experience and get instant AI-powered insights.
        </Text>

        <Button component={Link} href="/login" size="lg" radius="md">
          Start Free Analysis
        </Button>
      </Stack>
    </Container>
  );
}
