// These styles apply to every route in the application
import { Navbar } from "../components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="forest" className="flex justify-center">
      <body className="h-screen max-w-screen-lg w-screen">
        <Navbar />
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
