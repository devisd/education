export interface Course {
    id: string
    title: string
    description: string
    duration: string
    price: string
    category: string
}

export interface CourseCategory {
    id: string
    name: string
}

export interface NavigationItem {
    name: string
    href: string
}

export interface FooterSection {
    title: string
    links: NavigationItem[]
}

export interface ContactFormData {
    name: string
    email: string
    phone: string
    message: string
}

export interface TestimonialData {
    id: string
    author: string
    role: string
    content: string
    rating: number
}

export interface MenuItem {
    title: string;
    href?: string;
    children?: MenuItem[];
}

export interface DropdownMenuProps {
    children: React.ReactNode;
    className?: string;
    isSubmenu?: boolean;
}

export interface DropdownItemProps {
    href: string;
    children: React.ReactNode;
} 