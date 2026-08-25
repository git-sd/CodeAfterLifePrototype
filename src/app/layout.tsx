import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backburner",
  description:
    "The things you meant to learn, learned while your phone sleeps — and handed back to you the moment before you open Instagram.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
