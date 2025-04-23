
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles/globals.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
