'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Глобальный менеджер активных дропдаунов
const DropdownManager = {
    activeDropdown: null as string | null,
    setActive: (id: string) => {
        if (DropdownManager.activeDropdown && DropdownManager.activeDropdown !== id) {
            document.dispatchEvent(new CustomEvent('dropdown:close', { detail: { except: id } }));
        }
        DropdownManager.activeDropdown = id;
    },
    reset: () => {
        DropdownManager.activeDropdown = null;
    }
};

interface DropdownProps {
    id: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    placement?: 'bottom' | 'right' | 'left' | 'top';
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

interface DropdownItemProps {
    children: React.ReactNode;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
}

interface DropdownSubmenuProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export function Dropdown({ id, trigger, children, className = '', placement = 'bottom', isOpen: controlledIsOpen, onOpen, onClose }: DropdownProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : uncontrolledOpen;
    const dropdownRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const open = () => {
        DropdownManager.setActive(id);
        if (isControlled) {
            onOpen && onOpen();
        } else {
            setUncontrolledOpen(true);
        }
    };

    const close = () => {
        if (isOpen) {
            if (isControlled) {
                onClose && onClose();
            } else {
                setUncontrolledOpen(false);
            }
            if (DropdownManager.activeDropdown === id) {
                DropdownManager.reset();
            }
        }
    };

    const toggle = () => isOpen ? close() : open();

    // Позиционирование дропдауна
    useEffect(() => {
        if (isOpen && contentRef.current && dropdownRef.current) {
            const triggerEl = dropdownRef.current.querySelector('[data-dropdown-trigger]');
            const contentEl = contentRef.current;

            if (!triggerEl) return;

            const triggerRect = triggerEl.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            // Позиционирование в зависимости от placement
            switch (placement) {
                case 'bottom':
                    contentEl.style.top = `${triggerRect.bottom}px`;
                    contentEl.style.left = `${triggerRect.left}px`;
                    break;
                case 'right':
                    contentEl.style.top = `${triggerRect.top}px`;
                    contentEl.style.left = `${triggerRect.right + 5}px`;
                    break;
                case 'left':
                    contentEl.style.top = `${triggerRect.top}px`;
                    contentEl.style.right = `${viewportWidth - triggerRect.left + 5}px`;
                    contentEl.style.left = 'auto';
                    break;
                case 'top':
                    contentEl.style.bottom = `${viewportHeight - triggerRect.top}px`;
                    contentEl.style.left = `${triggerRect.left}px`;
                    contentEl.style.top = 'auto';
                    break;
            }

            // Корректировка, если выходит за границы экрана
            const contentRect = contentEl.getBoundingClientRect();

            if (contentRect.right > viewportWidth) {
                contentEl.style.left = 'auto';
                contentEl.style.right = '10px';
            }

            if (contentRect.bottom > viewportHeight) {
                const availableHeight = viewportHeight - contentRect.top - 20;
                if (availableHeight > 100) {
                    contentEl.style.maxHeight = `${availableHeight}px`;
                    contentEl.style.overflowY = 'auto';
                } else {
                    contentEl.style.top = 'auto';
                    contentEl.style.bottom = '10px';
                }
            }
        }
    }, [isOpen, placement]);

    // Закрывать при клике вне дропдауна
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                close();
            }
        };

        // Подписка на глобальное событие закрытия дропдаунов
        const handleGlobalClose = (e: CustomEvent<{ except: string }>) => {
            if (e.detail.except !== id) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('dropdown:close', handleGlobalClose as EventListener);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('dropdown:close', handleGlobalClose as EventListener);
        };
    }, [id, isOpen]);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <div onClick={toggle} data-dropdown-trigger>
                {trigger}
            </div>

            {isOpen && (
                <div
                    ref={contentRef}
                    className="fixed z-[1050] bg-white shadow-lg rounded-md py-2 w-56 origin-top-left"
                >
                    {children}
                </div>
            )}
        </div>
    );
}

export function DropdownItem({ children, href, onClick, className = '', ...rest }: DropdownItemProps & { onClose?: () => void }) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            onClick(e);
        }
        if (rest.onClose) {
            rest.onClose();
        }
    };

    if (href) {
        return (
            <Link
                href={href}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 ${className}`}
                onClick={handleClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export function DropdownSubmenu({ trigger, children, className = '' }: DropdownSubmenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);
    const submenuRef = useRef<HTMLDivElement>(null);

    // Позиционирование подменю
    useEffect(() => {
        if (isOpen && submenuRef.current && itemRef.current) {
            const itemRect = itemRef.current.getBoundingClientRect();
            const submenuEl = submenuRef.current;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Размещаем подменю справа от элемента
            submenuEl.style.top = `${itemRect.top}px`;
            submenuEl.style.left = `${itemRect.right + 5}px`;

            // Корректировка, если выходит за границы экрана
            const submenuRect = submenuEl.getBoundingClientRect();

            if (submenuRect.right > viewportWidth) {
                submenuEl.style.left = 'auto';
                submenuEl.style.right = `${viewportWidth - itemRect.left + 5}px`;
            }

            if (submenuRect.bottom > viewportHeight) {
                const availableHeight = viewportHeight - submenuRect.top - 20;
                if (availableHeight > 100) {
                    submenuEl.style.maxHeight = `${availableHeight}px`;
                    submenuEl.style.overflowY = 'auto';
                } else {
                    submenuEl.style.top = 'auto';
                    submenuEl.style.bottom = '10px';
                }
            }
        }
    }, [isOpen]);

    return (
        <div
            ref={itemRef}
            className={`relative ${className}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer">
                {trigger}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>

            {isOpen && (
                <div
                    ref={submenuRef}
                    className="fixed z-[1051] bg-white shadow-lg rounded-md py-2 w-56"
                >
                    {children}
                </div>
            )}
        </div>
    );
} 