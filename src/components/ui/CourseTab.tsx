'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import type { ITrainingResponse } from '@/types';

interface IProps {
    courses: ITrainingResponse[] | null
}

function formatPrice(price: number) {
    return price?.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
}

const tabTypes = [
    'Обучение взрослых',
    'Профессиональная переподготовка',
    'Курсы повышения квалификации',
    'Профессиональное обучение',
];

export const CourseTab = ({ courses }: IProps) => {
    const [activeTab, setActiveTab] = useState<string>('Обучение взрослых');

    const filteredCourses = courses?.filter(course => course.type === activeTab) || [];

    return (
        <>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
                {tabTypes.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Контент табов */}
            <div className='bg-white rounded-lg shadow-md p-6 md:p-8 mb-10'>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Наименование программы
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Объем часов
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Выдаваемый документ
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Форма обучения
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Стоимость
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredCourses.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">Нет программ для выбранного типа</td>
                                </tr>
                            ) : (
                                filteredCourses.map((course) => (
                                    <tr key={course.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                            <Link href={`/training/${course.documentId}`} className='hover:text-primary-600'>
                                                {course.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {course.term_of_study} ч.
                                        </td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                                            {course.document}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {course.form_of_study}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                                                {formatPrice(course.price)}
                                            </span>
                                        </td>
                                    </tr>
                                )
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
