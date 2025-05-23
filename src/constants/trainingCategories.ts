import { BookIcon, CertificateIcon, LightningIcon, ShieldIcon } from '@/icons';
import type { TrainingCategory } from '@/types';



export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    icon: BookIcon,
    title: 'Обучение взрослых',
    description:
      '',
    href: '/training/adults',
  },
  {
    icon: CertificateIcon,
    title: 'Профессиональная переподготовка',
    description:
      '',
    href: '/training/professional-retraining',
  },
  {
    icon: LightningIcon,
    title: 'Курсы повышения квалификации',
    description:
      '',
    href: '/training/skill-upgrading',
  },
  {
    icon: ShieldIcon,
    title: 'Профессиональное обучение',
    description:
      '',
    href: '/training/professional-education',
  },
];
