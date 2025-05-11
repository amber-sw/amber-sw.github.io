import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import '@/styles/custom.css'

export const metadata = {
  title: {
    template: '%s - Amber Swevers',
    default:
      'Amber Swevers - Frontend developer and UI/UX designer',
  },
  description:
    'Hi! I’m Amber, a frontend developer and UI/UX designer based in Vlaams-Brabant, Belgium. I have a background as a consultant and been part of varying projects, each with their own approach and technologies. ',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
