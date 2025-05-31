'use client'

import React, { useState } from 'react'

// TODO Заменить интерфейс с any на нужный. Также заменить названия табов и распарсить контент.
export const CourseTab = ({ courses }: { courses: any }) => {
    const [activeTab, setActiveTab] = useState<string>('adult');

    return (
        <>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
                <button
                    onClick={() => setActiveTab('adult')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'adult'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                >
                    Обучение взрослых
                </button>
                <button
                    onClick={() => setActiveTab('professional-retraining')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'professional-retraining'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                >
                    Профессиональная переподготовка
                </button>
                <button
                    onClick={() => setActiveTab('skill-upgrading')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'skill-upgrading'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                >
                    Курсы повышения квалификации
                </button>
                <button
                    onClick={() => setActiveTab('professional-education')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'professional-education'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                >
                    Профессиональное обучение
                </button>
            </div>

            {/* Контент табов */}
            <div className='bg-white rounded-lg shadow-md p-6 md:p-8 mb-10'>
                {activeTab === 'adult' && (
                    <div>
                        {/* Контент для "Обучение взрослых" */}
                        <p>Программа обучения взрослых.</p>
                    </div>
                )}
                {activeTab === 'professional-retraining' && (
                    <div>
                        {/* Контент для "Профессиональная переподготовка" */}
                        <p>Программа профессиональной переподготовки.</p>
                    </div>
                )}
                {activeTab === 'skill-upgrading' && (
                    <div>
                        {/* Контент для "Курсы повышения квалификации" */}
                        <p>Программа курсов повышения квалификации.</p>
                    </div>
                )}
                {activeTab === 'professional-education' && (
                    <div>
                        {/* Контент для "Профессиональное обучение" */}
                        <p>Программа профессионального обучения.</p>
                    </div>
                )}
            </div>
        </>
    )
}
