import { Playfair_Display, Inter } from "next/font/google"
import ScrollToTop from "./scrollToTop"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "./footer/page"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "700",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-offwhite">
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}