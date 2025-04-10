import React from 'react';
import Image from 'next/image';
import { Partner } from '@/constants/partners';

type PartnerCardProps = {
    partner: Partner;
};

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-5 flex items-center justify-center transform hover:scale-105 hover:rotate-1 group"
        >
            <div className="relative h-24 w-full">
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="object-contain transition-all duration-300 group-hover:brightness-110"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-primary-600 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
}; 