'use client';

import React, { useState } from "react";
import { StarRating } from "@/components/ui/StarRating";
import { postReview } from "@/api/services";

export function ReviewForm() {
    const [form, setForm] = useState({
        name: '',
        course: '',
        review: '',
        rating: 0,
        consent: false,
    });
    const [errors, setErrors] = useState<{ [k: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [photo, setPhoto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const validate = () => {
        const newErrors: { [k: string]: string } = {};
        if (!form.name.trim()) newErrors.name = 'Укажите вашу фамилию и имя';
        if (!form.course.trim()) newErrors.course = 'Укажите курс';
        if (!form.review.trim()) newErrors.review = 'Напишите отзыв';
        if (!form.rating) newErrors.rating = 'Поставьте оценку';
        if (!form.consent) newErrors.consent = 'Необходимо согласие';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setForm(prev => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file));
        } else {
            setPhoto(null);
            setPhotoPreview(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        if (validate()) {
            try {
                const formData = new FormData();
                formData.append('Name', form.name);
                formData.append('Service', form.course);
                formData.append('Content', form.review);
                formData.append('Rating', String(form.rating));
                formData.append('Date', new Date().toISOString());
                formData.append('Publish', 'false');
                if (photo) {
                    formData.append('image', photo);
                }

                const res = await postReview({ data: formData });

                if (res.data) {
                    setSubmitted(true);
                } else {
                    setSubmitError('Ошибка отправки. Попробуйте позже.');
                }

                setForm({
                    name: '',
                    course: '',
                    review: '',
                    rating: 0,
                    consent: false,
                });
                setPhoto(null);
                setPhotoPreview(null);
            } catch (err) {
                setSubmitError('Ошибка отправки. Попробуйте позже.');
            }
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше фамилия и имя <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="Введите ваше имя"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                        Курс/программа <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.course ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="Укажите название курса"
                    />
                    {errors.course && <p className="text-xs text-red-500 mt-1">{errors.course}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Оценка курса <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-6 flex-wrap">
                    <StarRating value={form.rating} onChange={v => setForm(f => ({ ...f, rating: v }))} />
                    <div className="flex mx-auto md:ml-auto md:mr-0 items-center gap-4 ">
                        <label
                            htmlFor="photo-upload"
                            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md shadow-sm cursor-pointer hover:bg-primary-700 transition-colors text-sm font-medium"
                        >
                            {photo ? "Изменить фото" : "Загрузить фото"}
                            <input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
                {errors.rating && <p className="text-xs text-red-500 mt-1">{errors.rating}</p>}
            </div>

            <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваш отзыв <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="review"
                    name="review"
                    value={form.review}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.review ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="Поделитесь своими впечатлениями о курсе"
                ></textarea>
                {errors.review && <p className="text-xs text-red-500 mt-1">{errors.review}</p>}
            </div>

            <div>
                <label className="flex items-start gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={handleChange}
                        className="mt-1"
                    />
                    <span className="text-xs text-gray-700">
                        <p>
                            Даю согласие на обработку моих персональных данных, в соответствии с Федеральным законом РФ от 27.07.2006 №152-ФЗ
                            <a href="/pdf/fz152.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 text-blue-150"> «О персональных данных»</a>.
                        </p>
                        <p>
                            Ознакомлен с <a href="/pdf/privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-150 hover:text-primary-600">Политикой конфиденциальности обработки персональных данных</a> посетителей сайта в информационно-телекоммуникационной сети «Интернет». <span className="text-red-500">*</span>
                        </p>
                    </span>
                </label>
                {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
            </div>

            <div className="flex md:flex-row flex-col items-center justify-between">
                <button
                    type="submit"
                    disabled={Object.keys(errors).length > 0 || !form.consent}
                    className={`max-md:w-full max-md:justify-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${Object.keys(errors).length > 0 || !form.consent ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Отправить отзыв
                </button>
                <div>
                    {submitted && <p className="text-green-600 font-bold max-md:mt-3">Спасибо за ваш отзыв!</p>}
                    {submitError && <p className="text-red-500 font-bold max-md:mt-3">{submitError}</p>}
                </div>
            </div>
        </form>
    );
} 