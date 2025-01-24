"use client";

const { default: Header } = require("@/components/header/Header");

export default function AppLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
