'use client';

import { useRouter, usePathname } from "next/navigation";

const tabTypes = [
    { label: "Обучение взрослых", value: "adults" },
    { label: "Профессиональная переподготовка", value: "professional-retraining" },
    { label: "Курсы повышения квалификации", value: "skill-upgrading" },
    { label: "Профессиональное обучение", value: "professional-education" },
];

export function TabsNav() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="mt-10 flex flex-wrap justify-center gap-2">
            {tabTypes.map(tab => (
                <button
                    key={tab.value}
                    onClick={() => router.push(`/training/${tab.value}`)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${pathname.endsWith(tab.value)
                        ? "bg-primary-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
} 