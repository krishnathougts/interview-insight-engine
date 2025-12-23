"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Group,
  Image,
  Paper,
  AspectRatio,
} from "@mantine/core";
import Link from "next/link";

export function HeroSection() {
  return (
    <Container size="lg" py={80}>
      <Grid align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={1}>
            Turn your interview rejections into a roadmap for success.
          </Title>

          <Text c="dimmed" mt="md">
            Get clear insights on why you didn’t make it and how to improve for
            your next interview.
          </Text>

          <Group mt="xl">
            <Link href="/login">
              <Button size="md">Get Started</Button>
            </Link>

            <Button variant="subtle">Watch Demo</Button>
          </Group>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="sm" radius="md" p="md">
            <AspectRatio ratio={4 / 3} style={{ width: "100%" }}>
              <Image
                src="/hero.jpg"
                alt="Interview analysis illustration"
                fit="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </AspectRatio>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
