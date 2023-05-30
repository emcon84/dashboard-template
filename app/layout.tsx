
import { Nav, Sidebar } from './components/molecules'
import { roboto } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Dahsboard',
  description: 'Panel de control de la aplicación',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <Nav />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
