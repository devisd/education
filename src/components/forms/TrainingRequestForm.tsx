'use client'

import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import { EDUCATION_PROGRAMS } from '@/constants/education';

export const TrainingRequestForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        program: '',
        privacyAgreed: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Логика отправки формы
        console.log('Form submitted:', formData);
        // Здесь будет отправка данных на сервер
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
                <span className="inline-block mb-2 text-primary-600 text-sm font-medium uppercase tracking-wider">Начните обучение сейчас</span>
                <div className="text-2xl">Заявка на <span className="text-primary-600 font-extrabold">обучение</span></div>
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <FormInput
                    id="name"
                    name="name"
                    label="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Ваш телефон"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ваш телефон"
                        required
                    />
                    <FormInput
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>

                <FormSelect
                    id="program"
                    name="program"
                    label="Программа обучения"
                    value={formData.program}
                    onChange={handleChange}
                    options={EDUCATION_PROGRAMS}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium shadow-sm hover:shadow flex items-center justify-center"
                >
                    Отправить заявку
                </button>

                <FormCheckbox
                    id="privacyAgreed"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleCheckboxChange}
                    required
                    label={
                        <span className="text-xs text-gray-500">
                            Нажимая кнопку «Отправить заявку», я даю согласие на обработку моих персональных данных, в соответствии с Федеральным законом №152-ФЗ «О персональных данных»
                        </span>
                    }
                />
            </form>
        </div>
    );
}; 