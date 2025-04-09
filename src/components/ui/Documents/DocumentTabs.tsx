'use client'

import React from 'react';
import { CertificateIcon, EmailIcon } from '@/icons';

type TabType = 'licenses' | 'letters';

interface DocumentTabsProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
}

export const DocumentTabs: React.FC<DocumentTabsProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-200 p-1 shadow-sm">
                <button
                    onClick={() => onTabChange('licenses')}
                    className={`${activeTab === 'licenses'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                        } px-6 py-3 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
                    aria-pressed={activeTab === 'licenses'}
                    aria-label="Показать лицензии и аккредитации"
                >
                    <span className="flex items-center">
                        <CertificateIcon className="w-5 h-5 mr-2 max-sm:hidden max-sm:p-0" />
                        Лицензии и аккредитации
                    </span>
                </button>
                <button
                    onClick={() => onTabChange('letters')}
                    className={`${activeTab === 'letters'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                        } px-6 py-3 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
                    aria-pressed={activeTab === 'letters'}
                    aria-label="Показать благодарственные письма"
                >
                    <span className="flex items-center">
                        <EmailIcon className="w-5 h-5 mr-2 max-sm:hidden max-sm:p-0" />
                        Благодарственные письма
                    </span>
                </button>
            </div>
        </div>
    );
}; 