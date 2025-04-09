'use client'

import React, { memo, useState, useEffect } from 'react';
import { MapIcon, PhoneIcon, RouteIcon } from '@/icons';

const FooterMap = memo(() => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        // Ленивая загрузка карты после монтирования компонента
        setIsMapLoaded(true);
    }, []);

    return (
        <div className="bg-white rounded-lg p-4 mb-12 shadow-lg overflow-hidden">
            <div className="relative min-h-[400px] w-full">
                {isMapLoaded && (
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1%2Fdd2f9e1c4b39da9a73da94cb05bfa3ca3b6e75b1f5ef1aa5dbdb07b37aa9c69&amp;source=constructor&amp;scroll=false&amp;lang=ru_RU"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        title="Карта с расположением офиса"
                        className="absolute inset-0"
                        loading="lazy"
                    ></iframe>
                )}
                <div className="absolute top-4 left-4 max-w-sm bg-white rounded-lg shadow-lg p-5 z-10">
                    <h3 className="text-gray-900 text-lg font-semibold mb-2">Образовательный терминал</h3>
                    <div className="text-gray-700 space-y-2 mb-3">
                        <p className="flex items-start">
                            <MapIcon className="w-5 h-5 text-primary-600 mr-2 mt-1" />
                            Россия, Иркутск, 664043, ул. Сергеева 3/1, офис 325
                        </p>
                        <p className="flex items-start">
                            <PhoneIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                            <span>
                                <a href="tel:+73952434312" className="hover:text-primary-600 transition-colors" aria-label="Позвонить по телефону +7 (3952) 43-43-12">+7 (3952) 43-43-12</a><br />
                                <a href="tel:+79149148185" className="hover:text-primary-600 transition-colors" aria-label="Позвонить по телефону +7 (914) 91-48-185">+7 (914) 91-48-185</a>
                            </span>
                        </p>
                    </div>
                    <a
                        href="https://yandex.ru/maps/?text=Россия, Иркутск, 664043, ул. Сергеева 3/1, офис 325"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm font-medium"
                        aria-label="Построить маршрут в Яндекс.Картах"
                    >
                        <RouteIcon className="w-4 h-4 mr-2" />
                        Построить маршрут
                    </a>
                </div>
            </div>
        </div>
    );
});

FooterMap.displayName = 'FooterMap';

export default FooterMap; 