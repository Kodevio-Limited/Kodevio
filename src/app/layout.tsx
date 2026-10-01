import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kodevio — We Build Software That Moves Businesses Forward",
  description:
    "Kodevio builds software that moves businesses forward. Trusted by 200+ teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
