"use client";

import AppNavbar from "@/components/app/AppNavbar";
import { AppShell } from "@mantine/core";
import AuthGuard from "@/components/AuthGuard";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <AppShell
        header={{ height: { base: 56, sm: 60 } }}
        padding={{ base: 8, sm: "md" }}
        withBorder={false}
        styles={{
          header: {
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "var(--mantine-color-body)",
            borderBottom: "1px solid var(--mantine-color-default-border)",
          },
        }}
      >
        <AppShell.Header>
          <AppNavbar />
        </AppShell.Header>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </AuthGuard>
  );
}
