import type { Metadata } from 'next'
import './globals.css'
import { Lora } from "next/font/google"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: 'App Eli',
  description: 'Creado para eli',
  generator: 'Si',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  )
}
