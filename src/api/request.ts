import type { ICont, IData, IImageResponse } from '@/types';
import axios, { Method } from 'axios';

interface RequestParams<T> {
    path: string;
    method?: Method;
    data?: ICont | IData[] | IImageResponse[];
    params?: Record<string, any>;
}

export async function request<T>({ path, method = 'GET', data, params }: RequestParams<T>) {
    try {
        const response = await axios({
            url: path,
            method,
            data,
            params,
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI}`,
            },
        });
        return { data: response.data.data as T, error: null };
    } catch (error) {
        return { data: null, error };
    }
} 