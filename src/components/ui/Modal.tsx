"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { CloseIcon } from "@/icons";

export interface ModalProps {
    trigger: ReactNode;
    title?: string;
    children: ReactNode;
    maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({ trigger, title, children, maxWidth = "max-w-xl" }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [isOpen]);

    return (
        <>
            <span onClick={() => setIsOpen(true)} style={{ display: 'inline-block' }}>
                {trigger}
            </span>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className={`w-full ${maxWidth} bg-white rounded-lg overflow-hidden relative shadow-2xl animate-fadeIn`}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
                            onClick={() => setIsOpen(false)}
                            aria-label="Закрыть"
                            type="button"
                        >
                            <CloseIcon className="h-6 w-6 text-gray-700" />
                        </button>
                        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
}; 