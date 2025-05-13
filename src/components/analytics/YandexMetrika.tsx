'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { YandexMetrikaScript, YandexMetrikaNoscript, YANDEX_METRIKA_ID } from '@/config/yandexMetrika';

// Declare global ym function
declare global {
    interface Window {
        ym: (counterId: string, action: string, params?: any) => void;
    }
}

export const YandexMetrika = () => {
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (window.ym) {
                window.ym(YANDEX_METRIKA_ID, 'hit', url);
            }
        };

        // Track initial page view
        if (window.ym) {
            window.ym(YANDEX_METRIKA_ID, 'hit', window.location.pathname + window.location.search);
        }

        // Add event listener for client-side navigation
        document.addEventListener('routeChangeComplete', handleRouteChange as any);

        return () => {
            document.removeEventListener('routeChangeComplete', handleRouteChange as any);
        };
    }, []);

    return (
        <>
            <Script id="yandex-metrika" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: YandexMetrikaScript }} />
            <noscript dangerouslySetInnerHTML={{ __html: YandexMetrikaNoscript }} />
        </>
    );
}; 