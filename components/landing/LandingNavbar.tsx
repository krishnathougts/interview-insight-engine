"use client";

import { useState } from "react";
import { Group, Button, Container, Text, Box, Burger, Drawer, Stack } from "@mantine/core";
import Link from "next/link";
import {
  IconBrain,
  IconLayoutDashboard,
  IconHistory,
  IconLogout,
} from "@tabler/icons-react";
import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function LandingNavbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [drawerOpened, setDrawerOpened] = useState(false);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      setDrawerOpened(false);
      if (pathname !== "/") {
        window.location.href = `/#${sectionId}`;
      } else {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [pathname]
  );

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = ["how-it-works", "features"];
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) current = section;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <Box
        component="nav"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--mantine-color-default-border)",
        }}
      >
        <Container size="xl" py="md">
          <Group justify="space-between" wrap="nowrap" gap="xs">
            <Group
              component={Link}
              href={isLoggedIn ? "/dashboard" : "/"}
              gap="xs"
              style={{ cursor: "pointer", textDecoration: "none", color: "inherit", flexShrink: 0 }}
            >
              <Box
                p={4}
                style={{
                  backgroundColor: "var(--mantine-color-blue-6)",
                  borderRadius: 8,
                }}
              >
                <IconBrain size={24} color="white" />
              </Box>
              <Text fw={700} size="lg" truncate>
                Interview Insight
              </Text>
            </Group>

            {/* Desktop nav */}
            <Group visibleFrom="md" gap="xl" style={{ flexShrink: 0 }}>
              {!isLoggedIn ? (
                <>
                  <Button
                    variant="subtle"
                    color="gray"
                    onClick={() => scrollToSection("how-it-works")}
                    fw={activeSection === "how-it-works" ? 600 : 500}
                    c={activeSection === "how-it-works" ? "blue.6" : "gray.7"}
                  >
                    How it Works
                  </Button>
                  <Button
                    variant="subtle"
                    color="gray"
                    onClick={() => scrollToSection("features")}
                    fw={activeSection === "features" ? 600 : 500}
                    c={activeSection === "features" ? "blue.6" : "gray.7"}
                  >
                    Features
                  </Button>
                  <Group
                    ml="md"
                    gap="sm"
                    style={{ borderLeft: "1px solid var(--mantine-color-gray-3)", paddingLeft: 16 }}
                  >
                    <Button component={Link} href="/login" variant="subtle" color="gray">
                      Log In
                    </Button>
                    <Button component={Link} href="/login">
                      Get Started
                    </Button>
                  </Group>
                </>
              ) : (
                <>
                  <Group gap="lg">
                    <Button
                      component={Link}
                      href="/dashboard"
                      variant="subtle"
                      color="gray"
                      leftSection={<IconLayoutDashboard size={16} />}
                    >
                      Dashboard
                    </Button>
                    <Button
                      component={Link}
                      href="/dashboard/history"
                      variant="subtle"
                      color="gray"
                      leftSection={<IconHistory size={16} />}
                    >
                      All History
                    </Button>
                  </Group>
                  <Group
                    ml="md"
                    gap="md"
                    style={{ borderLeft: "1px solid var(--mantine-color-gray-3)", paddingLeft: 24 }}
                  >
                    <Group gap="xs">
                      <Box
                        w={32}
                        h={32}
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "var(--mantine-color-blue-1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: 12,
                          color: "var(--mantine-color-blue-7)",
                        }}
                      >
                        {user?.name?.charAt(0) || "U"}
                      </Box>
                      <Text size="sm" fw={500} visibleFrom="lg">
                        {user?.name || "User"}
                      </Text>
                    </Group>
                    <Button
                      variant="subtle"
                      color="gray"
                      onClick={() => {
                        logout();
                        window.location.href = "/";
                      }}
                      title="Sign Out"
                    >
                      <IconLogout size={20} />
                    </Button>
                  </Group>
                </>
              )}
            </Group>

            {/* Mobile: burger menu */}
            <Burger
              opened={drawerOpened}
              onClick={() => setDrawerOpened((o) => !o)}
              size="sm"
              aria-label="Toggle menu"
              hiddenFrom="md"
            />
          </Group>
        </Container>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Menu"
        position="right"
        size="sm"
        hiddenFrom="md"
      >
        <Stack gap="xs">
          {!isLoggedIn ? (
            <>
              <Button
                variant="subtle"
                fullWidth
                onClick={() => scrollToSection("how-it-works")}
              >
                How it Works
              </Button>
              <Button
                variant="subtle"
                fullWidth
                onClick={() => scrollToSection("features")}
              >
                Features
              </Button>
              <Button component={Link} href="/login" variant="subtle" fullWidth>
                Log In
              </Button>
              <Button component={Link} href="/login" fullWidth>
                Get Started
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                href="/dashboard"
                variant="subtle"
                fullWidth
                leftSection={<IconLayoutDashboard size={18} />}
                onClick={() => setDrawerOpened(false)}
              >
                Dashboard
              </Button>
              <Button
                component={Link}
                href="/dashboard/history"
                variant="subtle"
                fullWidth
                leftSection={<IconHistory size={18} />}
                onClick={() => setDrawerOpened(false)}
              >
                All History
              </Button>
              <Button
                variant="subtle"
                color="red"
                fullWidth
                leftSection={<IconLogout size={18} />}
                onClick={() => {
                  logout();
                  window.location.href = "/";
                }}
              >
                Sign Out
              </Button>
            </>
          )}
        </Stack>
      </Drawer>
    </>
  );
}
