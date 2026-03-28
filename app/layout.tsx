import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RIDA",
  description: "RIDA ride-hailing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
