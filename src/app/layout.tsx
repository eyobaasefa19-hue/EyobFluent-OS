import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "EyobFluent OS",
  description: "A beautiful Fluent design operating system portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#1e1e1e] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
