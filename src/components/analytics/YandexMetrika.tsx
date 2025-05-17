'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';
import { YandexMetrikaScript, YandexMetrikaNoscript, YANDEX_METRIKA_ID } from '@/config/yandexMetrika';

// Объявление глобальной функции ym
declare global {
    interface Window {
        ym: (counterId: string, action: string, params?: any) => void;
    }
}

export const YandexMetrika = () => {
    const [consentGiven, setConsentGiven] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Проверяем, дал ли пользователь согласие на использование Яндекс Метрики
        const hasConsented = localStorage.getItem('yandexMetrikaConsent');
        if (hasConsented === 'true') {
            setConsentGiven(true);
        } else {
            setShowPopup(true);
        }
    }, []);

    useEffect(() => {
        if (!consentGiven) return;

        const handleRouteChange = (url: string) => {
            if (window.ym) {
                window.ym(YANDEX_METRIKA_ID, 'hit', url);
            }
        };

        // Отслеживание первоначального просмотра страницы
        if (window.ym) {
            window.ym(YANDEX_METRIKA_ID, 'hit', window.location.pathname + window.location.search);
        }

        // Добавление слушателя события для клиентской навигации
        document.addEventListener('routeChangeComplete', handleRouteChange as any);

        return () => {
            document.removeEventListener('routeChangeComplete', handleRouteChange as any);
        };
    }, [consentGiven]);

    const handleAccept = () => {
        localStorage.setItem('yandexMetrikaConsent', 'true');
        setConsentGiven(true);
        setShowPopup(false);
    };

    return (
        <>
            {consentGiven && (
                <>
                    <Script id="yandex-metrika" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: YandexMetrikaScript }} />
                    <noscript dangerouslySetInnerHTML={{ __html: YandexMetrikaNoscript }} />
                </>
            )}

            {showPopup && (
                <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
                    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-sm">
                                Для улучшения качества предоставляемых услуг мы используем технологии сервиса Яндекс Метрика.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <button
                                onClick={handleAccept}
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
                            >
                                Ок
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}; 