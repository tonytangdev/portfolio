// These styles apply to every route in the application
import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="h-screen bg-bg">
        <nav>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
