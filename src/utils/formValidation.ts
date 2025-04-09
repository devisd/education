import { ContactFormData, FormErrors } from '../types/form';

export const validateContactForm = (formData: ContactFormData): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
        errors.name = 'Пожалуйста, укажите ваше имя';
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
        errors.contact = 'Пожалуйста, укажите email или телефон для связи';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Пожалуйста, укажите корректный email';
    }

    if (!formData.program) {
        errors.program = 'Пожалуйста, выберите программу обучения';
    }

    if (!formData.agreement) {
        errors.agreement = 'Необходимо согласиться с политикой конфиденциальности';
    }

    return errors;
}; 