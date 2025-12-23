"use client";

import { Title, Text, Stack } from "@mantine/core";
import AppLayout from "@/components/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <Stack>
        <Title order={2}>Dashboard</Title>
        <Text c="dimmed">
          Your interview analyses will appear here.
        </Text>
      </Stack>
    </AppLayout>
  );
}
