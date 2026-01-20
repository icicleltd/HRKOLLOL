import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
