"use client";

import { Title, Text } from "@mantine/core";
import AppLayout from "@/components/AppLayout";

export default function ResultPage() {
  return (
    <AppLayout>
      <Title order={2}>Analysis Result</Title>
      <Text c="dimmed">Results will appear here.</Text>
    </AppLayout>
  );
}
