import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Watch Ultra 3",
  description: "Explore os detalhes.",
  icons: {
    icon: "../assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
