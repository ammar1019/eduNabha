import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BoltIcon,
  GlobeAltIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { useLanguage, Language } from '../context/LanguageContext';

const LandingPage: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [step, setStep] = useState<'language' | 'role'>('language');

  const languages: { id: Language; label: string; nativeLabel: string; description: string }[] = [
    { id: 'english', label: 'English', nativeLabel: 'English', description: 'Best for global collaboration and assessments.' },
    { id: 'hindi', label: 'Hindi', nativeLabel: 'हिंदी', description: 'राष्ट्रीय पाठ्यक्रम के अनुरूप सामग्री।' },
    { id: 'punjabi', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ', description: 'ਸਥਾਨਕ ਕਲਾਸਰੂਮ ਲਈ ਦੋਭਾਸ਼ੀ ਸਹਾਇਤਾ।' },
  ];

  const stats = useMemo(
    () => [
      { label: 'Active Learners', value: '12k+' },
      { label: 'Curated Resources', value: '400+' },
      { label: 'Avg. Adoption Time', value: '10 mins' },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        title: 'Bilingual Experiences',
        description: 'Switch languages on demand while keeping your data and dashboards in sync.',
        icon: <GlobeAltIcon className="h-6 w-6 text-primary-500" />,
      },
      {
        title: 'Intuitive Dashboards',
        description: 'Student and teacher workspaces tailored for attendance, assignments, and insights.',
        icon: <AcademicCapIcon className="h-6 w-6 text-primary-500" />,
      },
      {
        title: 'Guided Workflows',
        description: 'Each task is broken into simple steps so nothing gets in the way of learning.',
        icon: <BoltIcon className="h-6 w-6 text-primary-500" />,
      },
      {
        title: 'Smart Reminders',
        description: 'Surface what matters—upcoming classes, new resources, and quick actions.',
        icon: <SparklesIcon className="h-6 w-6 text-primary-500" />,
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#eef4ff] to-[#e0f2fe]" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-36 -right-36 h-96 w-96 rounded-full bg-primary-100 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-200 blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-primary-100">
              <svg className="h-7 w-7 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12.5a.5.5 0 01-.78.41L12 15.5l-7.22 4.41A.5.5 0 014 19.5V7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">EduNabha</p>
              <p className="text-xs font-medium text-slate-500">{t('gateway_to_learning')}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition-colors hover:text-primary-600">Features</a>
            <a href="#workflows" className="transition-colors hover:text-primary-600">Workflows</a>
            <a href="#languages" className="transition-colors hover:text-primary-600">Languages</a>
          </nav>

          <div className="flex items-center gap-3 text-sm font-medium">
            <Link
              to="/login"
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-slate-600 transition hover:border-primary-200 hover:text-primary-600 md:inline-flex"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-white shadow-glow transition hover:bg-primary-700"
            >
              Get started
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-16 pt-4 lg:grid-cols-[1.4fr_1fr]">
          <section className="space-y-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-primary-600 shadow-sm ring-1 ring-primary-100">
                <SparklesIcon className="h-4 w-4" />
                Future-ready learning platform
              </span>
              <h1 className="font-display text-4xl font-semibold text-slate-950 sm:text-5xl">
                Build momentum in every classroom with guided, multilingual dashboards.
              </h1>
              <p className="max-w-2xl text-lg text-slate-600">
                Empower administrators, teachers, and students with one intuitive space to track progress, deliver lessons, and keep families informed—no training days required.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/login?role=student"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-soft transition hover:translate-y-0.5 hover:bg-slate-800"
                >
                  Explore student view
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  to="/login?role=teacher"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:ring-primary-200"
                >
                  Preview teacher tools
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/80 p-4 text-center shadow-sm ring-1 ring-white/60 backdrop-blur">
                  <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div id="features" className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="group rounded-2xl bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside id="languages" className="space-y-6">
            <div className="relative rounded-[32px] bg-white p-1 shadow-glow ring-1 ring-primary-100">
              <div className="rounded-[28px] bg-gradient-to-b from-white via-white to-primary-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Quick setup</p>
                    <h2 className="font-display text-2xl font-semibold text-slate-900">Get started in two steps</h2>
                  </div>
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                    Step {step === 'language' ? '1' : '2'} of 2
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {step === 'language' && (
                    <>
                      <p className="text-sm text-slate-500">
                        Choose the language you want to use across dashboards. You can switch anytime without losing context.
                      </p>
                      <div className="space-y-3">
                        {languages.map((lang) => {
                          const isActive = language === lang.id;
                          return (
                            <button
                              key={lang.id}
                              onClick={() => {
                                setLanguage(lang.id);
                                setStep('role');
                              }}
                              className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                                isActive
                                  ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-soft'
                                  : 'border-slate-200 bg-white text-slate-600 hover:border-primary-200 hover:bg-primary-50'
                              }`}
                            >
                              <div>
                                <p className="text-base font-semibold">{lang.label}</p>
                                <p className="text-sm text-slate-500">{lang.nativeLabel}</p>
                                <p className="mt-2 text-xs text-slate-400">{lang.description}</p>
                              </div>
                              <span className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                                isActive ? 'border-primary-400 bg-white text-primary-600' : 'border-slate-200 text-slate-400'
                              }`}>
                                <ArrowRightIcon className="h-4 w-4" />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {step === 'role' && (
                    <div className="space-y-4" id="workflows">
                      <p className="text-sm text-slate-500">
                        Tailor controls for your journey. Choose a workspace to preview streamlined workflows.
                      </p>
                      <div className="space-y-3">
                        <Link
                          to="/login?role=student"
                          className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left transition hover:border-primary-200 hover:bg-primary-50"
                        >
                          <div>
                            <p className="text-base font-semibold text-slate-900">{t('student')} workspace</p>
                            <p className="mt-2 text-sm text-slate-500">Track attendance, assignments, and personalised goals.</p>
                          </div>
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-primary-600">
                            <ArrowRightIcon className="h-4 w-4" />
                          </span>
                        </Link>
                        <Link
                          to="/login?role=teacher"
                          className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left transition hover:border-primary-200 hover:bg-primary-50"
                        >
                          <div>
                            <p className="text-base font-semibold text-slate-900">{t('teacher')} workspace</p>
                            <p className="mt-2 text-sm text-slate-500">Plan modules, review submissions, and launch classes.</p>
                          </div>
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-primary-600">
                            <ArrowRightIcon className="h-4 w-4" />
                          </span>
                        </Link>
                      </div>
                      <button
                        onClick={() => setStep('language')}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-primary-600"
                      >
                        Change language
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Why schools choose EduNabha</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>• Launch live dashboards for staff and students in minutes.</li>
                <li>• Automate attendance and grade visuals with built-in analytics.</li>
                <li>• Share curated NCERT-aligned resources in one click.</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;