import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { baseMetadata } from '@/config/metadata'
import '../styles/globals.css'
import { CookieConsent, VisuallyImpairedModeProvider } from '@/components/ui'
import { YandexMetrika } from '@/components/analytics'
import ErrorBoundary from '@/components/ErrorBoundary'
import { SearchDataProvider } from '@/utils/SearchDataContext'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export const metadata: Metadata = {
    ...baseMetadata,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={roboto.className}>
                <SearchDataProvider>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                    <CookieConsent />
                    <YandexMetrika />
                    <VisuallyImpairedModeProvider />
                </SearchDataProvider>
            </body>
        </html>
    )
} 