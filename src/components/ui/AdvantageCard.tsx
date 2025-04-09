import React from 'react';
import { Advantage } from '@/constants/advantages';

interface AdvantageCardProps {
    advantage: Advantage;
}

export const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage }) => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary-600 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-gray-800 text-lg mb-2">{advantage.title}</h3>
            <p className="text-gray-600 text-sm">{advantage.description}</p>
        </div>
    );
}; 