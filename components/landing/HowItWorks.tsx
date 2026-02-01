"use client";

import { Container, SimpleGrid, Title, Text, Paper, Box } from "@mantine/core";
import {
  IconMessageCircle,
  IconBrain,
  IconLayoutDashboard,
} from "@tabler/icons-react";

const steps = [
  {
    icon: IconMessageCircle,
    color: "blue",
    title: "1. Submit Details",
    description:
      "Enter the questions asked, your responses, and the job context into our secure dashboard.",
  },
  {
    icon: IconBrain,
    color: "indigo",
    title: "2. AI Analysis",
    description:
      "Our advanced AI compares your answers against industry standards to find gaps.",
  },
  {
    icon: IconLayoutDashboard,
    color: "teal",
    title: "3. Get Roadmap",
    description:
      "Receive a personalized report with specific resources to improve before your next round.",
  },
];

export function HowItWorksSection() {
  return (
    <Box
      id="how-it-works"
      py={80}
      style={{ backgroundColor: "var(--mantine-color-gray-0)" }}
    >
      <Container size="xl" px="md">
        <Box ta="center" mb={64}>
          <Title order={2} size="2.25rem" mb="md">
            How It Works
          </Title>
          <Text c="dimmed" size="lg" maw={600} mx="auto">
            Our intelligent engine breaks down your interview experience into
            actionable data points in just three simple steps.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {steps.map(({ icon: Icon, color, title, description }) => (
            <Box key={title} style={{ position: "relative" }}>
              <Paper
                shadow="sm"
                radius="lg"
                p="xl"
                h="100%"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  w={96}
                  h={96}
                  mb="lg"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 16,
                    boxShadow: "var(--mantine-shadow-md)",
                    border: "1px solid var(--mantine-color-gray-1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    size={40}
                    style={{ color: `var(--mantine-color-${color}-6)` }}
                  />
                </Box>
                <Title order={3} size="h4" mb="sm">
                  {title}
                </Title>
                <Text c="dimmed" lh={1.6}>
                  {description}
                </Text>
              </Paper>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
