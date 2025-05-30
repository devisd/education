import React, { useState } from 'react';
import { FormCheckbox } from './FormCheckbox';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isConsent, setIsConsent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isConsent) return;
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };
            const response = await fetch('https://formsubmit.co/ajax/terminal.38@mail.ru', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                setIsConsent(false);
            } else {
                setSubmitStatus({
                    success: false,
                    message: 'При отправке сообщения произошла ошибка. Пожалуйста, попробуйте позже.'
                });
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'При отправке сообщения произошла ошибка. Пожалуйста, попробуйте позже.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Введите ваше имя"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Электронная почта <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Введите ваш email"
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Тема сообщения <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Введите тему сообщения"
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Введите ваше сообщение"
                    required
                ></textarea>
            </div>
            <FormCheckbox
                id="consent"
                name="consent"
                label={
                    <div>
                        <p className="text-xs ">
                            Даю согласие на обработку моих персональных данных, в соответствии с Федеральным
                            законом РФ от 27.07.2006 №152-ФЗ {" "}
                            <a
                                href="/pdf/fz152.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='hover:text-primary-600 text-blue-150'
                            >
                                «О персональных данных».{" "}
                            </a>
                        </p>
                        <p className='text-xs'>
                            Ознакомлен с {" "}
                            <a
                                href="/pdf/privacy.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-blue-150 hover:text-primary-600"
                            >
                                Политикой конфиденциальности обработки персональных данных
                            </a>
                            {" "} посетителей сайта в информационно-телекоммуникационной сети «Интернет».
                            <span className="text-red-500">*</span>
                        </p>
                    </div>
                }
                checked={isConsent}
                onChange={(e) => setIsConsent(e.target.checked)}
            />
            {submitStatus && (
                <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus.message}
                </div>
            )}

            <input type="hidden" name="_template" value="table"></input>

            <div>
                <button
                    type="submit"
                    disabled={!isConsent || isSubmitting}
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${!isConsent || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>
            </div>
        </form>
    );
}; 