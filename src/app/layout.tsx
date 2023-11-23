import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ['latin'] })
import { Providers } from "@/Providers"
export const metadata: Metadata = {
  title: 'AMDB',
  description: 'Get information on your favorite anime',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>
          <Header />

          {/* <Navbar /> */}


          <SearchBox />
          {children}
        </Providers>
      </body>


    </html>
  )
}
