import React from 'react';

interface FormCheckboxProps {
    id: string;
    name: string;
    label: React.ReactNode;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
}

export const FormCheckbox = ({
    id,
    name,
    label,
    checked,
    onChange,
    required = false,
    error
}: FormCheckboxProps) => {
    return (
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className={`h-4 w-4 text-primary-600 border ${error ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-primary-500`}
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={id} className={`font-medium ${error ? 'text-red-500' : 'text-gray-700'}`}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
        </div>
    );
}; 