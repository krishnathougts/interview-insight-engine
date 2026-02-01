"use client";

import { Container, Group, Avatar, Text } from "@mantine/core";

export function SocialProof() {
  return (
    <Container size="xl" py={40} px="md">
      <Group gap="lg">
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
        <Text size="sm" c="dimmed" fw={500}>
          Trusted by 10,000+ Job Seekers
        </Text>
      </Group>
    </Container>
  );
}
