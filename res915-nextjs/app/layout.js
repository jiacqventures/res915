import './globals.css';

export const metadata = {
  title: "RES915 – We Buy Houses / ¡Compramos Casas!",
  description: "Fast, no-obligation cash offers in English or Spanish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
