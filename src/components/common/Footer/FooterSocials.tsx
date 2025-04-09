import React, { memo } from 'react';
import { VkIcon, TelegramIcon, WhatsAppIcon } from '@/icons';

const FooterSocials = memo(() => (
    <div className="flex flex-wrap gap-3">
        <a
            href="https://vk.com/termedu38"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-primary-600 text-gray-700 hover:text-white p-2 rounded-full transition-colors"
            aria-label="ВКонтакте"
        >
            <VkIcon className="h-5 w-5" />
        </a>
        <a
            href="https://t.me/termedu38"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-primary-600 text-gray-700 hover:text-white p-2 rounded-full transition-colors"
            aria-label="Telegram"
        >
            <TelegramIcon className="h-5 w-5" />
        </a>
        <a
            href="https://wa.me/79149148185"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-primary-600 text-gray-700 hover:text-white p-2 rounded-full transition-colors"
            aria-label="WhatsApp"
        >
            <WhatsAppIcon className="h-5 w-5" />
        </a>
    </div>
));

FooterSocials.displayName = 'FooterSocials';

export default FooterSocials; 