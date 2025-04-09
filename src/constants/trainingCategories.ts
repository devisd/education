import {
    ShieldIcon,
    FireIcon,
    LightningIcon,
    HourglassIcon,
    FlagIcon,
    LockIcon,
    BookIcon,
    BuildingIcon
} from '@/icons';

export type TrainingCategory = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    link: string;
};

export const TRAINING_CATEGORIES: TrainingCategory[] = [
    {
        icon: ShieldIcon,
        title: 'Охрана труда',
        description: 'Обучение с учетом последних изменений в области охраны труда и проверка знаний требований охраны труда',
        link: '/training/labor-protection',
    },
    {
        icon: FireIcon,
        title: 'Пожарная безопасность',
        description: 'Обучение мерам пожарной безопасности работников организаций по программам противопожарного инструктажа',
        link: '/training/fire-safety',
    },
    {
        icon: LightningIcon,
        title: 'Электробезопасность',
        description: 'Обучение по электробезопасности для электротехнического и электротехнологического персонала',
        link: '/training/electrical-safety',
    },
    {
        icon: HourglassIcon,
        title: 'Промышленная безопасность',
        description: 'Подготовка и аттестация руководителей и специалистов в области промышленной безопасности',
        link: '/training/industrial-safety',
    },
    {
        icon: FlagIcon,
        title: 'Гражданская оборона',
        description: 'Обучение по гражданской обороне и защите от чрезвычайных ситуаций природного и техногенного характера',
        link: '/training/civil-defense',
    },
    {
        icon: LockIcon,
        title: 'Антитеррористическая защищенность',
        description: 'Обучение работников организаций мерам по профилактике и предупреждению терроризма',
        link: '/training/anti-terrorism',
    },
    {
        icon: BookIcon,
        title: 'Профессиональная переподготовка',
        description: 'Программы профессиональной переподготовки по различным направлениям',
        link: '/training/professional-retraining',
    },
    {
        icon: BuildingIcon,
        title: 'Рабочие профессии',
        description: 'Обучение, повышение квалификации и профессиональная переподготовка по различным рабочим профессиям',
        link: '/training/worker-professions',
    },
]; 