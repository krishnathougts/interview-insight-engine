"use client";

import { Container, Group, Text, Button} from "@mantine/core";
import Link from "next/link";

export function LandingNavbar() {
  return (
    <Container size="lg" py="md" >
      <Group justify="space-between">
        <Text fw={700}>Interview Insight Engine</Text>
        <Group>
          <Text size="sm">Meet</Text>
          <Text size="sm">Features</Text>
          <Text size="sm">Apps</Text>

          <Link href="/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </Group>
      </Group>
    </Container>
  );
}
