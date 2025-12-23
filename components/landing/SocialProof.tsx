"use client";

import { Container, Group, Avatar, Text } from "@mantine/core";

export function SocialProof() {
  return (
    <Container size="lg" py={40}>
      <Group>
        <Avatar.Group>
          <Avatar src="https://i.pravatar.cc/40?img=1" />
          <Avatar src="https://i.pravatar.cc/40?img=2" />
          <Avatar src="https://i.pravatar.cc/40?img=3" />
        </Avatar.Group>

        <Text size="sm" c="dimmed">
          Trusted by job seekers preparing for top companies
        </Text>
      </Group>
    </Container>
  );
}
