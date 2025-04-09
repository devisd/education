import { useState } from 'react';
import { ContactFormData, FormErrors } from '../types/form';
import { validateContactForm } from '../utils/formValidation';

const initialFormData: ContactFormData = {
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    agreement: false
};

export const useContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const resetForm = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    const submitForm = async () => {
        const formErrors = validateContactForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return false;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            // Здесь будет API-запрос для отправки формы
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitSuccess(true);
            resetForm();

            // Через 5 секунд убираем сообщение об успешной отправке
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);

            return true;
        } catch (error) {
            setErrors({
                submit: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'
            });
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        errors,
        isSubmitting,
        submitSuccess,
        handleChange,
        submitForm,
        resetForm
    };
}; 