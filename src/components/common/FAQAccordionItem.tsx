'use client'

import { renderBlock } from '@/api/parse';
import type { IData } from '@/types';
import React, { useState } from 'react';

interface FAQAccordionItemProps {
    items: IData[];
}

export const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({ items }) => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <>
            {items?.map((el, index) => (
                <div key={index} className="border mb-5 border-gray-200 rounded-lg overflow-hidden">
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
        </>
    );
}; 