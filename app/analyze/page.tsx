"use client";

import {
  TextInput,
  Textarea,
  Button,
  Card,
  Stack,
  Select,
} from "@mantine/core";
import AppLayout from "@/components/AppLayout";

export default function AnalyzePage() {
  return (
    <AppLayout>
      <Card withBorder radius="md" shadow="sm" maw={600} mx="auto">
        <Stack>
          <TextInput label="Job Role" placeholder="Frontend Developer" />

          <Select
            label="Company Type"
            data={["Startup", "MNC", "Product Company"]}
          />

          <Textarea
            label="Questions Asked"
            minRows={3}
            placeholder="Explain React hooks..."
          />

          <Textarea
            label="Your Answers"
            minRows={4}
            placeholder="I explained useEffect..."
          />

          <Button>Analyze Interview</Button>
        </Stack>
      </Card>
    </AppLayout>
  );
}
