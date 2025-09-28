import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';

const LandingPage = () => {
  const { language, setLanguage, t } = useLanguage();
  const [step, setStep] = useState<'language' | 'role'>('language');
  const languages: { id: Language; label: string; nativeLabel: string }[] = [
    { id: 'english', label: 'English', nativeLabel: 'English' },
    { id: 'hindi', label: 'Hindi', nativeLabel: 'हिंदी' },
    { id: 'punjabi', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
        {step === 'language' ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Welcome • स्वागत है • ਜੀ ਆਇਆਂ ਨੂੰ
            </h1>
            <div className="space-y-6">
              <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8">
                Choose your preferred language
              </p>
              <div className="grid gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => {
                      setLanguage(lang.id);
                      setStep('role');
                    }}
                    className={`w-full py-4 px-6 text-center rounded-lg transition duration-200 flex items-center justify-center space-x-2
                      ${language === lang.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-primary-50 dark:hover:bg-gray-600'
                      }`}
                  >
                    <span className="text-lg">{lang.label}</span>
                    <span className="text-lg">({lang.nativeLabel})</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              {t('welcome')}
            </h1>
            <div className="space-y-6">
              <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8">
                {t('select_role')}
              </p>
              <div className="grid gap-4">
                <Link
                  to="/login?role=student"
                  className="block w-full py-4 px-6 text-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition duration-200"
                >
                  {t('student')}
                </Link>
                <Link
                  to="/login?role=teacher"
                  className="block w-full py-4 px-6 text-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition duration-200"
                >
                  {t('teacher')}
                </Link>
              </div>
              <button
                onClick={() => setStep('language')}
                className="mt-4 w-full py-2 px-4 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition duration-200"
              >
                {t('back')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LandingPage