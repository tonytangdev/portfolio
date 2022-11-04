// These styles apply to every route in the application
import { Navbar } from "../components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" className="flex justify-center">
      <body className="">
        <Navbar />
        <div className="w-screen">{children}</div>
      </body>
    </html>
  );
}
