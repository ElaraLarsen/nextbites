import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover delicious recipes from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <a href="/" className="logo">NextBites.</a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/#recipes">Recipes</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
