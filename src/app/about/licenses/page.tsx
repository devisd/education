import { getLicenses } from '@/api/services';
import { ErrorMessage } from '@/components/ErrorMessage';
import { GratitudeLetters } from '@/components/ui';

export default async function LicensesPage() {
  const { data, error } = await getLicenses()

  if (error) return <ErrorMessage />

  return (
    <>
      <section
        className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
        id="documents"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
              Официальные документы
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ЛИЦЕНЗИИ И <span className="font-extrabold text-primary-600">АККРЕДИТАЦИИ</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>

          <div className="text-center mb-12 transition-opacity duration-300">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Наш учебный центр имеет государственную лицензию на право оказывать образовательные услуги. После окончания программы вы получаете документы государственного образца.
            </p>
          </div>

          <GratitudeLetters lettersData={data} />
        </div>
      </section>
    </>
  );
};

