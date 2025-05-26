import type { ICont, IData, IImageResponse } from '@/types';
import axios, { Method } from 'axios';

interface RequestParams<T> {
    path: string;
    method?: Method;
    data?: ICont | IData[] | IImageResponse[];
    params?: Record<string, any>;
}

const cache = new Map<string, { data: any; timestamp: number }>();
const FIVE_MINUTES = 5 * 60 * 1000;

export async function request<T>({ path, method = 'GET', data, params }: RequestParams<T>) {
    const cacheKey = JSON.stringify({ path, method, data, params });
    if (method === 'GET') {
        const cached = cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < FIVE_MINUTES) {
            return { data: cached.data as T, error: null };
        }
    }
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
        if (method === 'GET') {
            cache.set(cacheKey, { data: response.data.data, timestamp: Date.now() });
        }
        return { data: response.data.data as T, error: null };
    } catch (error) {
        return { data: null, error };
    }
} 