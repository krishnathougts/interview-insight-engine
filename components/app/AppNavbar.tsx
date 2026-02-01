"use client";

import { useState } from "react";
import { Group, Button, Text, Box, Burger, Drawer, Stack } from "@mantine/core";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  IconBrain,
  IconLayoutDashboard,
  IconHistory,
  IconPlus,
  IconLogout,
} from "@tabler/icons-react";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: IconLayoutDashboard },
  { href: "/dashboard/analyze", label: "New Interview", icon: IconPlus },
  { href: "/dashboard/history", label: "History", icon: IconHistory },
] as const;

export default function AppNavbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleLogout = () => {
    setDrawerOpened(false);
    logout();
    router.push("/");
  };

  const NavLinks = ({ stacked = false }: { stacked?: boolean }) => (
    <>
      {navLinks.map(({ href, label, icon: Icon }) => (
        <Button
          key={href}
          component={Link}
          href={href}
          variant={pathname === href ? "light" : href.includes("analyze") ? "filled" : "outline"}
          leftSection={<Icon size={16} />}
          fullWidth={stacked}
          onClick={() => stacked && setDrawerOpened(false)}
        >
          {label}
        </Button>
      ))}
    </>
  );

  return (
    <>
      <Group h="100%" px="md" justify="space-between" wrap="nowrap" gap="xs">
        <Group
          component={Link}
          href="/dashboard"
          gap="xs"
          style={{ textDecoration: "none", color: "inherit", flexShrink: 0 }}
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
          <Text fw={700} size="sm" visibleFrom="sm" truncate>
            Interview Insight
          </Text>
        </Group>

        {/* Desktop nav - hidden on mobile */}
        <Group gap="xs" visibleFrom="md" style={{ flexShrink: 0 }}>
          <NavLinks />
          {isLoggedIn && (
            <Group
              ml="sm"
              gap="xs"
              style={{
                borderLeft: "1px solid var(--mantine-color-gray-3)",
                paddingLeft: 12,
              }}
            >
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
              <Text size="sm" fw={500}>
                {user?.name || "User"}
              </Text>
              <Button
                variant="subtle"
                color="gray"
                onClick={handleLogout}
                title="Sign Out"
              >
                <IconLogout size={20} />
              </Button>
            </Group>
          )}
        </Group>

        {/* Mobile: user avatar + burger */}
        <Group gap="xs" hiddenFrom="md" style={{ flexShrink: 0 }}>
          {isLoggedIn && (
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
          )}
          <Burger
            opened={drawerOpened}
            onClick={() => setDrawerOpened((o) => !o)}
            size="sm"
            aria-label="Toggle navigation"
          />
        </Group>
      </Group>

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
          <NavLinks stacked />
          {isLoggedIn && (
            <Button
              variant="subtle"
              color="red"
              leftSection={<IconLogout size={18} />}
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          )}
        </Stack>
      </Drawer>
    </>
  );
}
