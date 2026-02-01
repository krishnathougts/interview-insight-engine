"use client";

import {
  Container,
  SimpleGrid,
  Title,
  Text,
  Card,
  Group,
  Button,
  Box,
} from "@mantine/core";
import Link from "next/link";
import {
  IconBolt,
  IconTarget,
  IconTrendingUp,
  IconShield,
  IconFileText,
  IconChevronRight,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconBolt,
    color: "blue",
    title: "Instant Feedback",
    description:
      "No more waiting days for vague recruiter emails. Get detailed, actionable feedback within seconds of submission.",
  },
  {
    icon: IconTarget,
    color: "orange",
    title: "Skill Gap Identification",
    description:
      "Pinpoint exactly which technical concepts or behavioral traits are holding you back from the offer letter.",
  },
  {
    icon: IconTrendingUp,
    color: "teal",
    title: "Progress Tracking",
    description:
      "Visualize your improvement over time with detailed charts tracking your confidence and technical scores.",
  },
  {
    icon: IconShield,
    color: "violet",
    title: "Secure & Private",
    description:
      "Your interview data is sensitive. We use enterprise-grade encryption to ensure your career history stays private.",
  },
  {
    icon: IconFileText,
    color: "pink",
    title: "Role Specific Models",
    description:
      "Whether you are a developer, designer, or product manager, our AI adapts its criteria to your specific job role.",
  },
];

export function FeaturesSection() {
  return (
    <Box id="features" py={80}>
      <Container size="xl" px="md">
        <Group justify="space-between" align="flex-end" mb={64} wrap="wrap" gap="lg">
          <Box maw={600}>
            <Title order={2} size="2.25rem" mb="md">
              Powerful Features for Job Seekers
            </Title>
            <Text c="dimmed" size="lg">
              Everything you need to stop guessing and start improving your
              interview performance.
            </Text>
          </Box>
          <Button
            component={Link}
            href="/login"
            variant="subtle"
            color="blue"
            rightSection={<IconChevronRight size={20} />}
          >
            Start Analyzing Now
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
          {features.map(({ icon: Icon, color, title, description }) => (
            <Card
              key={title}
              shadow="sm"
              padding="xl"
              radius="lg"
              withBorder
              style={{
                transition: "all 0.3s",
                cursor: "default",
              }}
              className="feature-card"
            >
              <Box
                w={48}
                h={48}
                mb="lg"
                style={{
                  backgroundColor: `var(--mantine-color-${color}-1)`,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: `var(--mantine-color-${color}-6)`,
                }}
              >
                <Icon size={24} />
              </Box>
              <Title order={3} size="h4" mb="sm">
                {title}
              </Title>
              <Text c="dimmed" size="sm" lh={1.6}>
                {description}
              </Text>
            </Card>
          ))}

          <Card
            component={Link}
            href="/login"
            padding="xl"
            radius="lg"
            style={{
              backgroundColor: "var(--mantine-color-blue-6)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            <Title order={3} size="h4" mb="xs" c="white">
              Ready to improve?
            </Title>
            <Text c="blue.1" mb="lg" size="sm">
              Join thousands of candidates getting hired today.
            </Text>
            <Box
              w={48}
              h={48}
              style={{
                backgroundColor: "white",
                color: "var(--mantine-color-blue-6)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconChevronRight size={24} />
            </Box>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
