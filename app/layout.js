import '../src/styles/globals.css'
import { Navigation } from './components/Navigation'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Ecommerce</title>
      </head>
      <body className='bg-gray-900'>

        <Navigation />
        <div className='mt-36'>
        {children}
        </div>

      </body>
    </html>
  )
}
