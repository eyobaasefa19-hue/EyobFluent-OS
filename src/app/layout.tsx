import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EyobFluent OS",
  description: "AI-Powered English Fluency Operating System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
