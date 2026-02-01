"use client";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "@/contexts/AuthContext";
import { InterviewProvider } from "@/contexts/InterviewContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <AuthProvider>
            <InterviewProvider>{children}</InterviewProvider>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
