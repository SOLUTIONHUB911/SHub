import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Work_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  variable: '--font-open-sans',
  display: 'swap',
  subsets: ['latin']
});

const work_sans = Work_Sans({
  variable: '--font-work-sans',
  display: 'swap',
  subsets: ['latin']
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${open_sans.variable} ${work_sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
