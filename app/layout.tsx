import Navbar from './components/Navbar'
import './globals.css'
import { Poppins } from '@next/font/google'

export const metadata = {
  title: 'Wiki Yard App',
  description: 'Search for any info on Wikipedia',
}

const poppins = Poppins({
  variable: "--display-poppins",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className='bg-slate-500 min-h-screen'>
        <Navbar/>
        <div className='px-2 md:px-16 lg:px-24 py-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
