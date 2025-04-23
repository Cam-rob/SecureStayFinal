import '../styles/globals.css'; 

export const metadata = {
  title: 'Secure Stay Certification',
  description: 'Verified safety for short-term rentals',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
