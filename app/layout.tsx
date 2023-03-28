import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Wiki Search App',
  description: 'Search for any info on Wikipedia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-500 min-h-screen'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
