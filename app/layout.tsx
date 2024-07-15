import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Randall</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="FGI Guidelines - Hospital 2022 Co-pilot"
        />
        <meta property="og:title" content="FGI Guidelines Co Pilot" />
        <meta
          property="og:description"
          content="FGI Guidelines - Hospital 2022 Co-pilot"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FGI Guidelines - Hospital 2022 Co-pilot" />
        <meta
          name="twitter:description"
          content="FGI Guidelines - Hospital 2022 Co-pilot"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <Analytics />
          {/*<Navbar></Navbar>*/}
          {children}
        </div>
      </body>
    </html>
  );
}
