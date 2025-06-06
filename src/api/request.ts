export interface RequestParams<T> {
    path: string;
    method?: string;
    data?: any;
    params?: Record<string, any>;
}

export async function request<T>({ path, method = 'GET', data, params }: RequestParams<T>) {
    // Формируем query string если есть params
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api${path}`;
    if (params && Object.keys(params).length > 0) {
        const searchParams = new URLSearchParams(params).toString();
        url += `?${searchParams}`;
    }

    try {
        const isFormData = typeof data !== 'undefined' && typeof FormData !== 'undefined' && data instanceof FormData;
        const res = await fetch(url, {
            method,
            headers: {
                ...(isFormData
                    ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI}` }
                    : {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI}`,
                    }),
            },
            body: method !== 'GET' && data ? (isFormData ? data : JSON.stringify(data)) : undefined,
            next: { revalidate: 30 },
        } as RequestInit & { next?: { revalidate: number } });

        const json = await res.json();
        if (!res.ok) {
            return { data: null, error: json };
        }
        return { data: json.data as T, error: null };
    } catch (error) {
        return { data: null, error };
    }
} 