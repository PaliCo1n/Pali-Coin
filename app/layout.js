import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "PALI Coin 🍉",
  description:
    "Empowering Palestinians Financial Ecosystem Through Blockchain Worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased h-full flex flex-col`}
      >
        <div className="flex flex-1 flex-col">
          <Navbar />
          <Head>
            <meta
              property="og:image"
              content="https://gateway.pinata.cloud/ipfs/bafybeibzl35swhnbifmtu56eypslb7atnboxxhkkgqgyjejpf44f6vnehy/pali-logo.png"
            />
            <meta property="og:title" content="PALI Coin 🍉" />
            <meta
              property="og:description"
              content="Empowering Palestinians Financial Ecosystem Through Blockchain Worldwide"
            />
            <meta property="og:url" content="https://palicoin.uk" />
          </Head>
          {/* Main content area */}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
