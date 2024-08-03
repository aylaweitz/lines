import { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'
import { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'lines',
  description: 'Solar lines',
}

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="p-4">
      <PlausibleProvider domain="aylaweitz.github.io" trackOutboundLinks>
        {children}
      </PlausibleProvider>
    </body>
  </html>
)

export default Layout
