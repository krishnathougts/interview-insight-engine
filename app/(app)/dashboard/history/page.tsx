"use client";

import {
  Stack,
  Title,
  Select,
  Group,
  Card,
  Text,
  Button,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { useInterview } from "@/contexts/InterviewContext";
import { useRouter } from "next/navigation";
import { MOCK_AI_RESPONSE } from "@/lib/mockData";

export default function HistoryPage() {
  const { history, setResult } = useInterview();
  const router = useRouter();

  return (
    <Stack maw={900} mx="auto">
      <Group justify="space-between" wrap="wrap" gap="md" mb="xl">
        <Title order={2}>Complete Interview History</Title>
        <Group gap="xs">
          <Select
            placeholder="All Outcomes"
            data={["All Outcomes", "Rejected", "Offers"]}
            w={140}
          />
          <Select
            placeholder="Newest First"
            data={["Newest First", "Oldest First"]}
            w={140}
          />
        </Group>
      </Group>

      <Card shadow="sm" withBorder radius="md" p={0}>
        <Stack gap={0}>
          {history.map((item) => (
            <Group
              key={item.id}
              justify="space-between"
              p="lg"
              wrap="wrap"
              align="center"
              style={{
                borderBottom:
                  "1px solid var(--mantine-color-gray-1)",
              }}
            >
              <Group gap="md">
                <Box
                  w={48}
                  h={48}
                  style={{
                    borderRadius: 12,
                    backgroundColor:
                      item.score > 60
                        ? "var(--mantine-color-green-0)"
                        : "var(--mantine-color-red-0)",
                    border:
                      item.score > 60
                        ? "1px solid var(--mantine-color-green-2)"
                        : "1px solid var(--mantine-color-red-2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                    color:
                      item.score > 60
                        ? "var(--mantine-color-green-7)"
                        : "var(--mantine-color-red-7)",
                  }}
                >
                  {item.score}
                  <Text size="xs" fw={500} c="dimmed" style={{ fontSize: 9 }}>
                    Score
                  </Text>
                </Box>
                <Box>
                  <Title order={4}>{item.role}</Title>
                  <Text size="sm" c="dimmed">
                    {item.company} • {item.date}
                  </Text>
                </Box>
              </Group>

              <Group gap="md">
                <Box
                  px="sm"
                  py={4}
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    borderRadius: 8,
                    backgroundColor:
                      item.status === "Rejected"
                        ? "var(--mantine-color-red-0)"
                        : "var(--mantine-color-blue-0)",
                    color:
                      item.status === "Rejected"
                        ? "var(--mantine-color-red-6)"
                        : "var(--mantine-color-blue-6)",
                  }}
                >
                  {item.status}
                </Box>
                <Button
                  variant="light"
                  size="sm"
                  onClick={() => {
                    setResult(MOCK_AI_RESPONSE);
                    router.push("/dashboard/result");
                  }}
                >
                  View Report
                </Button>
              </Group>
            </Group>
          ))}
        </Stack>
      </Card>
    </Stack>
  );
}
