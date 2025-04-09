export interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    contact?: string;
    program?: string;
    message?: string;
    agreement?: string;
    submit?: string;
    [key: string]: string | undefined;
}

export interface ContactFormData {
    name: string;
    company: string;
    position: string;
    email: string;
    phone: string;
    program: string;
    message: string;
    agreement: boolean;
} 