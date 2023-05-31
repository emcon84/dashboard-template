
import { Nav, Sidebar } from './components/organisms'
import { roboto } from './fonts'

import './styles/barrel.scss'

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
        <div className="content">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
