import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'
import { Cormorant_Garamond } from 'next/font/google'

const coro = Cormorant_Garamond({ subsets: ['latin'],
weight:["600"]
 })

export const metadata = {
  title: 'Uidex',
  description: 'Uidex e-learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={coro.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
