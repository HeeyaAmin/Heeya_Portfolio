import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="top" className="min-h-screen bg-white">
      <Navbar />
      {children}
    </main>
  );
}
