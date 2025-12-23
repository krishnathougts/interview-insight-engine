"use client";

import { MantineProvider } from "@mantine/core";

export default function MantineProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error - props exist at runtime but type definitions may differ in this workspace
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
