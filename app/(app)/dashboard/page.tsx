"use client";

import {
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  Box,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";
import {
  IconPlus,
  IconFileText,
  IconTrendingUp,
  IconAlertCircle,
  IconChartBar,
  IconTarget,
  IconChevronRight,
  IconClock,
} from "@tabler/icons-react";
import { useInterview } from "@/contexts/InterviewContext";
import { MOCK_AI_RESPONSE } from "@/lib/mockData";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { history, setResult } = useInterview();
  const router = useRouter();

  const rejectedCount = history.filter((h) => h.status === "Rejected").length;
  const avgScore =
    history.length > 0
      ? Math.round(
          history.reduce((acc, curr) => acc + (curr.score || 0), 0) /
            history.length
        )
      : 0;

  return (
    <Stack gap={{ base: "md", sm: "xl" }}>
      <Group justify="space-between" wrap="wrap" gap={{ base: "xs", sm: "md" }}>
        <Box>
          <Title order={2}>Dashboard Overview</Title>
          <Text c="dimmed" size="sm" mt={4}>
            Track your interview performance and improvements over time.
          </Text>
        </Box>
        <Button
          component={Link}
          href="/dashboard/analyze"
          leftSection={<IconPlus size={20} />}
        >
          New Analysis
        </Button>
      </Group>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        <Card shadow="sm" withBorder radius="md" p="lg">
          <Group justify="space-between">
            <Box>
              <Text size="sm" c="dimmed" fw={500}>
                Total Analyses
              </Text>
              <Title order={2}>{history.length}</Title>
            </Box>
            <Box
              p="md"
              style={{
                backgroundColor: "var(--mantine-color-blue-0)",
                borderRadius: 8,
                color: "var(--mantine-color-blue-6)",
              }}
            >
              <IconFileText size={24} />
            </Box>
          </Group>
        </Card>
        <Card shadow="sm" withBorder radius="md" p="lg">
          <Group justify="space-between">
            <Box>
              <Text size="sm" c="dimmed" fw={500}>
                Average Score
              </Text>
              <Title order={2}>{avgScore}/100</Title>
            </Box>
            <Box
              p="md"
              style={{
                backgroundColor: "var(--mantine-color-green-0)",
                borderRadius: 8,
                color: "var(--mantine-color-green-6)",
              }}
            >
              <IconTrendingUp size={24} />
            </Box>
          </Group>
        </Card>
        <Card shadow="sm" withBorder radius="md" p="lg">
          <Group justify="space-between">
            <Box>
              <Text size="sm" c="dimmed" fw={500}>
                Rejections Analyzed
              </Text>
              <Title order={2}>{rejectedCount}</Title>
            </Box>
            <Box
              p="md"
              style={{
                backgroundColor: "var(--mantine-color-orange-0)",
                borderRadius: 8,
                color: "var(--mantine-color-orange-6)",
              }}
            >
              <IconAlertCircle size={24} />
            </Box>
          </Group>
        </Card>
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="lg">
        <Card shadow="sm" withBorder radius="md" p="lg" span={{ lg: 2 }}>
          <Group gap="xs" mb="lg">
            <IconChartBar size={20} color="var(--mantine-color-blue-5)" />
            <Title order={4}>Performance History</Title>
          </Group>
          <Group
            align="flex-end"
            justify="space-between"
            gap="xs"
            style={{ minHeight: 200, paddingBottom: 8 }}
          >
            {history.slice(0, 7).reverse().map((item, idx) => (
              <Box
                key={item.id}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Box
                  w="100%"
                  maw={40}
                  style={{
                    height: `${Math.max(item.score, 10)}%`,
                    backgroundColor:
                      item.score > 60
                        ? "var(--mantine-color-blue-5)"
                        : "var(--mantine-color-gray-3)",
                    borderRadius: "8px 8px 0 0",
                  }}
                />
                <Text size="xs" c="dimmed" truncate maw={60} ta="center">
                  {item.role.split(" ")[0]}
                </Text>
              </Box>
            ))}
          </Group>
        </Card>
        <Card shadow="sm" withBorder radius="md" p="lg">
          <Group gap="xs" mb="lg">
            <IconTarget size={20} color="var(--mantine-color-red-5)" />
            <Title order={4}>Common Weaknesses</Title>
          </Group>
          <Stack gap="md">
            {[
              { label: "System Design", val: 75, color: "red" },
              { label: "DSA Problems", val: 60, color: "orange" },
              { label: "Communication", val: 40, color: "yellow" },
              { label: "Cultural Fit", val: 20, color: "green" },
            ].map((stat) => (
              <Box key={stat.label}>
                <Group justify="space-between" mb={4}>
                  <Text size="sm" fw={500}>
                    {stat.label}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {stat.val}%
                  </Text>
                </Group>
                <Box
                  h={8}
                  style={{
                    backgroundColor: "var(--mantine-color-gray-1)",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    h="100%"
                    w={`${stat.val}%`}
                    bg={`${stat.color}.5`}
                    style={{ borderRadius: 4 }}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Card>
      </SimpleGrid>

      <Card shadow="sm" withBorder radius="md" p={0}>
        <Group justify="space-between" p="lg" style={{ backgroundColor: "var(--mantine-color-gray-0)" }}>
          <Title order={4}>Recent Analysis</Title>
          <Button
            component={Link}
            href="/dashboard/history"
            variant="subtle"
            size="sm"
            rightSection={<IconChevronRight size={16} />}
          >
            View Full History
          </Button>
        </Group>
        <Stack gap={0}>
          {history.slice(0, 5).map((item) => (
            <Group
              key={item.id}
              justify="space-between"
              p="lg"
              wrap="nowrap"
              style={{ borderTop: "1px solid var(--mantine-color-gray-1)" }}
            >
              <Group gap="md">
                <Box
                  w={40}
                  h={40}
                  style={{
                    borderRadius: "50%",
                    backgroundColor:
                      item.score > 60
                        ? "var(--mantine-color-green-0)"
                        : "var(--mantine-color-red-0)",
                    border:
                      item.score > 60
                        ? "1px solid var(--mantine-color-green-2)"
                        : "1px solid var(--mantine-color-red-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14,
                    color:
                      item.score > 60
                        ? "var(--mantine-color-green-7)"
                        : "var(--mantine-color-red-7)",
                  }}
                >
                  {item.score}
                </Box>
                <Box>
                  <Group gap="sm" mb={4}>
                    <Text fw={600}>{item.role}</Text>
                    <Box
                      px="xs"
                      py={2}
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        borderRadius: 4,
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
                  </Group>
                  <Text size="sm" c="dimmed">
                    {item.company} • {item.date}
                  </Text>
                </Box>
              </Group>
              <Button
                variant="light"
                size="sm"
                onClick={() => {
                setResult(MOCK_AI_RESPONSE);
                router.push("/dashboard/result");
              }}
              >
                Details
              </Button>
            </Group>
          ))}
        </Stack>
      </Card>
    </Stack>
  );
}
