import React from 'react';
import { CheckIcon, ExclamationIcon } from '@/icons';

export type AlertType = 'success' | 'error' | 'info' | 'warning';

interface AlertProps {
    message: string;
    type: AlertType;
    icon?: React.ReactNode;
    onClose?: () => void;
}

const alertStyles = {
    success: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        iconColor: 'text-green-500',
        icon: <CheckIcon className="h-5 w-5" />
    },
    error: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-700',
        iconColor: 'text-red-500',
        icon: <ExclamationIcon className="h-5 w-5" />
    },
    info: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        iconColor: 'text-blue-500',
        icon: <ExclamationIcon className="h-5 w-5" />
    },
    warning: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-700',
        iconColor: 'text-yellow-500',
        icon: <ExclamationIcon className="h-5 w-5" />
    }
};

export const Alert = ({ message, type, icon, onClose }: AlertProps) => {
    const style = alertStyles[type];

    return (
        <div className={`mb-6 ${style.bg} border ${style.border} ${style.text} px-4 py-3 rounded flex items-center justify-between`}>
            <div className="flex items-center">
                <span className={`mr-2 ${style.iconColor}`}>
                    {icon || style.icon}
                </span>
                <p>{message}</p>
            </div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}; 