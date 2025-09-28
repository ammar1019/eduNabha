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
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="relative">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 5v2m6-2v2M9 16h6" 
                      className="text-primary-400"
                    />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center">
                  <span>Edu</span>
                  <span className="text-primary-600">Nabha</span>
                </h1>
              </div>
              <div className="w-24 h-1 bg-primary-600 rounded mb-4"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium italic">
                {t('gateway_to_learning')}
              </p>
              <p className="text-xl text-center mt-6 text-gray-700 dark:text-gray-300">
                Welcome • स्वागत है • ਜੀ ਆਇਆਂ ਨੂੰ
              </p>
            </div>
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