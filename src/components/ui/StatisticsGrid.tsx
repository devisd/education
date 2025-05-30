import React from "react";

type Stat = {
    value?: string | number;
    title?: string;
};

interface StatisticsGridProps {
    statistics?: Record<string, any>;
}

function statisticsToArray(statistics?: Record<string, any>): Stat[] {
    if (!statistics) return [];
    const result: Stat[] = [];
    let i = 1;
    while (statistics[`Value_${i}`] || statistics[`Title_${i}`]) {
        result.push({
            value: statistics[`Value_${i}`],
            title: statistics[`Title_${i}`],
        });
        i++;
    }
    return result;
}

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({ statistics }) => {
    const stats = statisticsToArray(statistics);
    if (!stats.length) return null;
    return (
        <div className="w-full flex justify-center mt-12">
            <div className="flex overflow-x-auto gap-6 flex-nowrap px-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white min-w-[300px] max-w-[300px] w-[300px] rounded-lg shadow-md p-6 text-center">
                        <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                        <div className="text-gray-700">{stat.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { statisticsToArray }; 