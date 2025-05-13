'use client'

import { useState, useEffect } from 'react';

export const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            // Show the popup after a short delay
            const timer = setTimeout(() => {
                setVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <p className="text-sm">
                        На сайте используются cookies для сбора и хранения данных, необходимых для корректной работы сайта и удобства посетителей. Продолжая использовать наш сайт,  <a href="/pdf/privacy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 font-bold"> Вы соглашаетесь с политикой по обработке персональных данных.</a>
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <button
                        onClick={handleAccept}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </div>
    );
}; 