import LandingNavbar  from "@/components/landing/LandingNavbar";
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LandingNavbar />
      {children}
    </>
  );
}
