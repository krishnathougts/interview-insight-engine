"use client";

import { AppShell, Group, Button, Text } from "@mantine/core";
import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text fw={700}>Interview Insight Engine</Text>

          <Group>
            <Link href="/dashboard">
              <Button variant="light">Dashboard</Button>
            </Link>

            <Link href="/analyze">
              <Button>New Analysis</Button>
            </Link>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
