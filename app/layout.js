import '../src/styles/globals.css'
import { Navigation } from './components/Navigation'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Ecommerce</title>
      </head>
      <body>

        <Navigation />
        <div className='mt-36'>
        {children}
        </div>

      </body>
    </html>
  )
}
