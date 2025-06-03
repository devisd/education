import React, { memo } from 'react';
import { TelegramIcon } from '@/icons';

const FooterSocials = memo(() => (
  <div className="flex flex-wrap">
    <a
      href="https://t.me/terninal_38"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 hover:bg-primary-600 text-gray-700 hover:text-white p-2 rounded-full transition-colors"
      aria-label="Telegram"
    >
      <TelegramIcon className="h-5 w-5" />
    </a>
  </div>
));

export default FooterSocials;
