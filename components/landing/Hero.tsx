"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Group,
  Paper,
  Box,
  Avatar,
} from "@mantine/core";
import Link from "next/link";
import { IconTarget, IconCircleCheck } from "@tabler/icons-react";
import { useAuth } from "@/contexts/AuthContext";

export function HeroSection() {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      py={80}
      style={{
        borderBottom: "1px solid var(--mantine-color-gray-1)",
      }}
    >
      <Container size="xl" px="md">
        <Grid align="center" gutter="xl">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Title
              order={1}
              size="3.5rem"
              fw={800}
              lh={1.1}
              style={{ letterSpacing: "-0.02em" }}
            >
              Turn your interview rejections into a{" "}
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "blue", to: "indigo", deg: 90 }}
              >
                roadmap for success.
              </Text>
            </Title>

            <Text c="dimmed" size="xl" mt="xl" maw={480} lh={1.6}>
              Don&apos;t guess why you failed. Our AI analyzes your interview
              experience to highlight strengths, weaknesses, and provide a
              personalized study plan.
            </Text>

            <Group mt="xl" gap="md">
              <Button
                component={Link}
                href={isLoggedIn ? "/dashboard" : "/login"}
                size="lg"
                radius="xl"
              >
                Start Your Analysis
              </Button>
              <Button
                variant="outline"
                color="gray"
                size="lg"
                radius="xl"
                leftSection={
                  <Box
                    w={24}
                    h={24}
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "var(--mantine-color-gray-3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "4px solid transparent",
                        borderLeft: "6px solid var(--mantine-color-gray-6)",
                        borderBottom: "4px solid transparent",
                        marginLeft: 2,
                      }}
                    />
                  </Box>
                }
              >
                Watch Demo
              </Button>
            </Group>

            <Group mt="xl" gap="lg" c="dimmed">
              <Avatar.Group>
                {[1, 2, 3, 4].map((i) => (
                  <Avatar
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                    radius="xl"
                    size="sm"
                  />
                ))}
              </Avatar.Group>
              <Text size="sm" fw={500}>
                Trusted by 10,000+ Job Seekers
              </Text>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              pos="relative"
              style={{
                minHeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                pos="absolute"
                top="50%"
                left="50%"
                style={{
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background: "linear-gradient(to top right, var(--mantine-color-blue-1) 50%, var(--mantine-color-indigo-1) 30%, white)",
                  borderRadius: "50%",
                  filter: "blur(40px)",
                  opacity: 0.5,
                  zIndex: 0,
                }}
              />
              <Paper
                shadow="xl"
                radius="lg"
                p="lg"
                pos="relative"
                style={{ maxWidth: 420, zIndex: 1 }}
              >
                <Box
                  mb="md"
                  py="sm"
                  px="md"
                  style={{
                    backgroundColor: "var(--mantine-color-gray-0)",
                    borderBottom: "1px solid var(--mantine-color-gray-1)",
                    borderRadius: 8,
                  }}
                >
                  <Group gap="xs" mb="xs">
                    <Box w={12} h={12} style={{ borderRadius: "50%", backgroundColor: "var(--mantine-color-red-4)" }} />
                    <Box w={12} h={12} style={{ borderRadius: "50%", backgroundColor: "var(--mantine-color-yellow-4)" }} />
                    <Box w={12} h={12} style={{ borderRadius: "50%", backgroundColor: "var(--mantine-color-green-4)" }} />
                  </Group>
                  <Text size="xs" c="dimmed" ta="center" ff="monospace">
                    interview-insight.ai/dashboard
                  </Text>
                </Box>
                <Box>
                  <Group justify="space-between" mb="md">
                    <Box>
                      <Box
                        w={120}
                        h={24}
                        mb="xs"
                        style={{
                          backgroundColor: "var(--mantine-color-dark-7)",
                          borderRadius: 8,
                        }}
                      />
                      <Box
                        w={180}
                        h={16}
                        style={{
                          backgroundColor: "var(--mantine-color-gray-3)",
                          borderRadius: 4,
                        }}
                      />
                    </Box>
                    <Box
                      w={40}
                      h={40}
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "var(--mantine-color-blue-1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--mantine-color-blue-6)",
                      }}
                    >
                      <IconTarget size={20} />
                    </Box>
                  </Group>
                  <Group
                    align="flex-end"
                    gap="xs"
                    mb="md"
                    style={{ height: 120, borderBottom: "1px solid var(--mantine-color-gray-1)" }}
                  >
                    {[40, 60, 30, 85, 50].map((h, i) => (
                      <Box
                        key={i}
                        flex={1}
                        h={`${h}%`}
                        style={{
                          backgroundColor: i === 3 ? "var(--mantine-color-blue-5)" : `var(--mantine-color-blue-${3 - Math.floor(i / 2)})`,
                          borderRadius: "8px 8px 0 0",
                        }}
                      />
                    ))}
                  </Group>
                  <Group gap="md">
                    <Paper p="md" radius="md" bg="orange.0" style={{ border: "1px solid var(--mantine-color-orange-1)" }}>
                      <Text size="xs" fw={700} c="orange.6" tt="uppercase">
                        Feedback
                      </Text>
                      <Text size="sm" fw={600}>
                        Work on System Design
                      </Text>
                    </Paper>
                    <Paper p="md" radius="md" bg="green.0" style={{ border: "1px solid var(--mantine-color-green-1)" }}>
                      <Text size="xs" fw={700} c="green.6" tt="uppercase">
                        Strength
                      </Text>
                      <Text size="sm" fw={600}>
                        React Proficiency
                      </Text>
                    </Paper>
                  </Group>
                </Box>
              </Paper>
              <Paper
                pos="absolute"
                left={-32}
                bottom={48}
                shadow="xl"
                p="md"
                radius="md"
              >
                <Group gap="sm">
                  <Box
                    p="xs"
                    style={{
                      backgroundColor: "var(--mantine-color-green-1)",
                      borderRadius: 8,
                      color: "var(--mantine-color-green-6)",
                    }}
                  >
                    <IconCircleCheck size={20} />
                  </Box>
                  <Box>
                    <Text size="xs" c="dimmed" fw={500}>
                      Confidence Score
                    </Text>
                    <Text fw={700}>+15% Increased</Text>
                  </Box>
                </Group>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
