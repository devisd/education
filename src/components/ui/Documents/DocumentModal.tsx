'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { CloseIcon } from '@/icons';
import { Document } from '@/constants/documents';

interface DocumentModalProps {
    activeDocument: Document | null;
    onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ activeDocument, onClose }) => {
    useEffect(() => {
        if (activeDocument) {
            // Disable scrolling when modal opens
            document.body.style.overflow = 'hidden';

            // Re-enable scrolling when modal closes
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [activeDocument]);

    if (!activeDocument) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="document-modal-title"
        >
            <div
                className="max-w-4xl w-full bg-white rounded-lg overflow-hidden relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                    <h4
                        id="document-modal-title"
                        className="font-semibold text-gray-800"
                    >
                        {activeDocument.alt}
                    </h4>
                    <button
                        className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                        onClick={onClose}
                        aria-label="Закрыть"
                    >
                        <CloseIcon className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
                <div className="w-full h-[85vh] overflow-y-auto">
                    <img
                        src={activeDocument.src}
                        alt={activeDocument.alt}
                        className="w-full h-auto object-contain block"
                    />
                </div>
            </div>
        </div>
    );
}; 