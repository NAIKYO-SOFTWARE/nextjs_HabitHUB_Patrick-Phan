import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import global css that applies for all components in app
import "./globals.css";
import { StoreProvider } from "../redux/store/StoreProvider";
import Menu from "@/components/Menu";

// này chỉ là định nghĩa font thôi
const inter = Inter({ subsets: ["latin"] });

// strict rules của Metadata gồm có: object: { title: string, décription: string }
export const metadata: Metadata = {
  // title chính là title của toàn trang web, Metadata's rules thuộc về next thư viện
  title: "App của kiệt",
  description: "Naikyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
