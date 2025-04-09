'use client'

import React from 'react';
import { SpinnerIcon } from '@/icons';
import { EDUCATION_PROGRAMS } from '@/constants/education';
import { useContactForm } from '@/hooks/useContactForm';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import { Alert } from '@/components/ui';
import { ContactInfo } from './ContactInfo';

export const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    submitForm
  } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      !!formData.name.trim() &&
      (!!formData.email.trim() || !!formData.phone.trim()) &&
      !!formData.program &&
      formData.agreement
    );
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="contacts">
      {/* Декоративные круги */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border-8 border-primary-100 opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-8 border-primary-100 opacity-5 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border-4 border-primary-300 opacity-5 blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full border-4 border-primary-300 opacity-5 blur-2xl"></div>
      <div className="absolute top-2/3 right-1/4 w-16 h-16 rounded-full border-2 border-primary-400 opacity-5 blur-lg"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку на обучение или задайте вопрос — наши специалисты ответят вам в ближайшее время
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <ContactInfo />

          <div className="lg:w-1/2 p-8 lg:p-12 bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Заполните форму</h3>

            {submitSuccess && (
              <Alert
                type="success"
                message="Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время."
              />
            )}

            {errors.submit && (
              <Alert
                type="error"
                message={errors.submit}
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <FormInput
                id="name"
                name="name"
                label="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                placeholder="Иван Иванов"
                required
                error={errors.name}
              />

              <FormInput
                id="company"
                name="company"
                label="Название организации"
                value={formData.company}
                onChange={handleChange}
                placeholder="ООО «Компания»"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required={!formData.phone}
                  error={errors.email || errors.contact}
                />

                <FormInput
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  required={!formData.email}
                  error={errors.phone}
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
                error={errors.program}
              />

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Комментарий к заявке
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Укажите дополнительную информацию или вопросы"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                ></textarea>
              </div>

              <FormCheckbox
                id="agreement"
                name="agreement"
                label="Я согласен на обработку персональных данных"
                checked={formData.agreement}
                onChange={handleChange}
                required
                error={errors.agreement}
              />

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className={`w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors ${(isSubmitting || !isFormValid()) ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <SpinnerIcon className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                      Отправка...
                    </span>
                  ) : (
                    'Отправить заявку'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
