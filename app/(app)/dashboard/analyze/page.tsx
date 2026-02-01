"use client";

import {
  Stack,
  Title,
  Text,
  Card,
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { IconBrain } from "@tabler/icons-react";
import { useState } from "react";
import { useInterview } from "@/contexts/InterviewContext";

export default function AnalyzePage() {
  const router = useRouter();
  const { addEntry } = useInterview();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      role: "",
      type: "Startup",
      questions: "",
      answers: "",
      outcome: "Rejected",
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    setLoading(true);
    setTimeout(() => {
      addEntry({
        role: values.role || "Software Engineer",
        company: "New Company",
        status: values.outcome,
        score: Math.floor(Math.random() * 40) + 40,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      });
      setLoading(false);
      router.push("/dashboard/result");
    }, 2000);
  });

  return (
    <Stack maw={700} mx="auto">
      <Box mb="xl">
        <Group gap="xs" mb="xs">
          <IconBrain size={24} color="var(--mantine-color-blue-6)" />
          <Title order={2}>Interview Analysis</Title>
        </Group>
        <Text c="dimmed">
          Tell us about your last interview to generate insights.
        </Text>
      </Box>

      <Card shadow="sm" withBorder radius="md" p="xl">
        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            <Group grow align="flex-start">
              <TextInput
                label="Job Role Applied For"
                placeholder="e.g. Frontend Developer"
                {...form.getInputProps("role")}
              />
              <Select
                label="Company Type"
                data={[
                  "Startup",
                  "MNC / Corporate",
                  "Service Based",
                  "Product Based",
                ]}
                {...form.getInputProps("type")}
              />
            </Group>

            <Textarea
              label="Questions Asked"
              placeholder="List technical or behavioral questions..."
              minRows={4}
              {...form.getInputProps("questions")}
            />

            <Textarea
              label="Your Answers"
              placeholder="Briefly describe your responses..."
              minRows={4}
              {...form.getInputProps("answers")}
            />

            <Select
              label="Outcome"
              data={["Rejected", "In Progress", "Offer"]}
              {...form.getInputProps("outcome")}
            />

            <Group justify="flex-end" gap="sm" mt="md">
              <Button
                variant="subtle"
                color="gray"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit" loading={loading}>
                Analyze My Interview
              </Button>
            </Group>
          </Stack>
        </form>
      </Card>
    </Stack>
  );
}
