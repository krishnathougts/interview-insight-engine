"use client";

import { Stack, Title, Text, Card, List, Group, Button, Box, SimpleGrid } from "@mantine/core";
import Link from "next/link";
import { IconChartBar, IconTarget, IconBulb, IconCircleCheck } from "@tabler/icons-react";
import { useInterview } from "@/contexts/InterviewContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MOCK_AI_RESPONSE } from "@/lib/mockData";

export default function ResultPage() {
  const { currentResult, setResult } = useInterview();
  const router = useRouter();
  const data = currentResult || MOCK_AI_RESPONSE;

  useEffect(() => {
    if (!currentResult) {
      setResult(MOCK_AI_RESPONSE);
    }
  }, [currentResult, setResult]);

  return (
    <Stack maw={800} mx="auto">
      <Box mb="xl">
        <Title order={2} mb="xs">
          Your Analysis Results
        </Title>
        <Text c="dimmed">
          Here are your insights based on the interview feedback.
        </Text>
      </Box>

      <Card shadow="sm" withBorder radius="md" p={0}>
        <Box p="xl" style={{ backgroundColor: "var(--mantine-color-gray-0)" }}>
          <Group justify="space-between" align="flex-start" mb="md">
            <Box>
              <Title order={4}>Top Weaknesses</Title>
              <Text size="sm" c="dimmed" mt={4}>
                Areas that likely led to the rejection/feedback.
              </Text>
            </Box>
            <Box
              p="xs"
              style={{
                backgroundColor: "var(--mantine-color-red-0)",
                borderRadius: 8,
                color: "var(--mantine-color-red-7)",
              }}
            >
              <IconChartBar size={20} />
            </Box>
          </Group>
          <List spacing="xs">
            {data.weaknesses.map((w, i) => (
              <List.Item key={i}>
                <Text size="sm">{w}</Text>
              </List.Item>
            ))}
          </List>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 2 }} p="xl">
          <Box>
            <Group gap="xs" mb="md" c="orange.6">
              <IconTarget size={16} />
              <Text fw={600}>Skill Gaps</Text>
            </Group>
            <List spacing="xs" size="sm">
              {data.skillGaps.map((skill, i) => (
                <List.Item
                  key={i}
                  icon={
                    <Box
                      w={6}
                      h={6}
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "var(--mantine-color-orange-4)",
                      }}
                    />
                  }
                >
                  {skill}
                </List.Item>
              ))}
            </List>
          </Box>
          <Box>
            <Group gap="xs" mb="md" c="blue.6">
              <IconBulb size={16} />
              <Text fw={600}>Next Steps</Text>
            </Group>
            <List spacing="xs" size="sm">
              {data.nextSteps.map((step, i) => (
                <List.Item
                  key={i}
                  icon={
                    <IconCircleCheck
                      size={16}
                      color="var(--mantine-color-blue-5)"
                    />
                  }
                >
                  {step}
                </List.Item>
              ))}
            </List>
          </Box>
        </SimpleGrid>

        <Box
          p="xl"
          style={{
            borderTop: "1px solid var(--mantine-color-gray-1)",
            backgroundColor: "var(--mantine-color-gray-0)",
          }}
        >
          <Group justify="center">
            <Button component={Link} href="/dashboard" variant="light">
              Back to Dashboard
            </Button>
          </Group>
        </Box>
      </Card>
    </Stack>
  );
}
