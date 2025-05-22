import { BookIcon, CertificateIcon, LightningIcon, ShieldIcon } from '@/icons';
import type { TrainingCategory } from '@/types';



export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    icon: BookIcon,
    title: 'Обучение взрослых',
    description:
      'Обучение с учетом последних изменений в области охраны труда и проверка знаний требований охраны труда',
    href: '/training/adults',
  },
  {
    icon: CertificateIcon,
    title: 'Профессиональная переподготовка',
    description:
      'Обучение мерам пожарной безопасности работников организаций по программам противопожарного инструктажа',
    href: '/training/professional-retraining',
  },
  {
    icon: LightningIcon,
    title: 'Курсы повышения квалификации',
    description:
      'Обучение по электробезопасности для электротехнического и электротехнологического персонала',
    href: '/training/skill-upgrading',
  },
  {
    icon: ShieldIcon,
    title: 'Профессиональное обучение',
    description:
      'Подготовка и аттестация руководителей и специалистов в области промышленной безопасности',
    href: '/training/professional-education',
  },
];
