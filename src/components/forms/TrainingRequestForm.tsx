'use client';

import React, { useState, useEffect } from 'react';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import { EDUCATION_PROGRAMS } from '@/constants/education';
import { Alert } from '@/components/ui';

export const TrainingRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    privacyPolicyAgreed: false,
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Проверка валидности формы при изменении данных
  useEffect(() => {
    const { name, phone, email, program, privacyPolicyAgreed } = formData;
    const isValid =
      name.trim() !== '' &&
      phone.trim() !== '' &&
      email.trim() !== '' &&
      program.trim() !== '' &&
      privacyPolicyAgreed;

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    try {
      // Формируем данные для отправки
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        program: formData.program,
        _template: 'table',
      };
      const response = await fetch('https://formsubmit.co/ajax/682eaee78211c05262608e9a42ee0b99', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          program: '',
          privacyPolicyAgreed: false,
        });
      } else {
        console.error('Ошибка отправки:', await response.text());
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        <span className="inline-block mb-2 text-primary-600 text-sm font-medium uppercase tracking-wider">
          Начните обучение сейчас
        </span>
        <div className="text-2xl">
          Заявка на <span className="text-primary-600 font-extrabold">обучение</span>
        </div>
      </h3>

      {submitSuccess && (
        <Alert
          type="success"
          message="Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время."
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="_template" value="table" />

        <FormInput
          id="name"
          name="name"
          type='text'
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

        <FormCheckbox
          id="privacyPolicyAgreed"
          name="privacyPolicyAgreed"
          checked={formData.privacyPolicyAgreed}
          onChange={handleCheckboxChange}
          label={
            <div>
              <p
                className="text-xs "
              >Даю согласие на обработку моих персональных данных, в соответствии с Федеральным
                законом РФ от 27.07.2006 №152-ФЗ {" "}
                <a
                  href="/pdf/fz152.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:text-primary-600 text-blue-150'
                >
                  «О персональных данных».{" "}
                </a></p>
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
        />

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium shadow-sm hover:shadow flex items-center justify-center ${!isFormValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  );
};
