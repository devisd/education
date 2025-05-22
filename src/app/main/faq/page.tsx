
'use client'

import { renderBlock } from '@/api/parse';
import { getFAQ } from '@/api/services';
import { ErrorMessage } from '@/components/ErrorMessage';
import type { IData } from '@/types';
import { useLayoutEffect, useState } from 'react';

export default function FAQPage() {
    // Состояние для отслеживания открытых аккордеонов
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const [data, setData] = useState<IData[] | null>([])

    // Переключение состояния аккордеона
    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useLayoutEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getFAQ()
                setData(data)
            } catch (error) {
                return <ErrorMessage />
            }
        }

        fetchData()
    }, [])



    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Часто задаваемые вопросы
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ВОПРОС - <span className="font-extrabold text-primary-600">ОТВЕТ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Основное содержимое из API */}
                {data?.map((el, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="text-lg font-medium text-gray-900">{el.Title}</span>
                            <svg
                                className={`w-5 h-5 text-primary-600 transform transition-transform ${openAccordion === index ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="p-6 bg-white">
                                <div className="prose prose-lg max-w-none" >
                                    {el.Description?.map((block, idx) => renderBlock(block, idx))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
