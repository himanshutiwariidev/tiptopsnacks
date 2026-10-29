import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://snacksmanufacturer.com'),

  title: 'TIP TOP Food Tech | Best Snacks Manufacturer in Delhi',

  description:
    'TIP TOP Food Tech is a trusted snacks manufacturer in Delhi with 35+ years of experience. Namkeen, chips, popcorn & private label snacks — nationwide delivery.',

  keywords: [
    'Snacks Manufacturer',
    'Snacks Manufacturer In Delhi',
    'Best Snacks Manufacturer in Delhi',
    'Top Snacks Manufacturer in Delhi',
  ],

  icons: {
    icon: '/assets/logo.webp',
  },

  verification: {
    google: 'isJ3qgZSlkbuPiJvpXI8BKod7udZG7_P3JTJyhZYvSQ',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}