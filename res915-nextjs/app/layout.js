import './globals.css';

export const metadata = {
  title: 'RES915',
  description: 'Real estate solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
