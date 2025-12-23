"use client";

import { Container, SimpleGrid, Card, Text, Title } from "@mantine/core";

const features = [
  {
    title: "Analyze Your Performance",
    description:
      "Understand how your answers were evaluated and where you lost points.",
  },
  { 
    title: "Identify Your Weaknesses",
    description:
      "Find skill gaps, communication issues, and technical blind spots.",
  },
  {
    title: "Get Actionable Advice",
    description:
      "Receive clear next steps to improve before your next interview.",
  },
];

export function FeaturesSection() {
  return (
    <Container size="lg" py={60}>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {features.map((feature) => (
          <Card key={feature.title} shadow="sm" padding="lg" withBorder>
            <Title order={4}>{feature.title}</Title>
            <Text c="dimmed" mt="sm">
              {feature.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
