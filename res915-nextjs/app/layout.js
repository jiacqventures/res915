import './globals.css';

export const metadata = {
  title: 'res915',
  description: 'Real Estate Solutions 915',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

