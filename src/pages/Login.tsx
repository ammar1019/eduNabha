import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

interface LoginProps {
  dummyUsers: {
    student: { username: string; password: string };
    teacher: { username: string; password: string };
  }
}

const Login = ({ dummyUsers }: LoginProps) => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'student';
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userType = role as 'student' | 'teacher';
    
    if (
      credentials.username === dummyUsers[userType].username &&
      credentials.password === dummyUsers[userType].password
    ) {
      navigate(`/${userType}`);
    } else {
      setError('Invalid credentials');
    }
  };

  const highlights = useMemo(
    () => [
      'Unified dashboards designed for low bandwidth environments.',
      'Real-time attendance syncing with automated nudges.',
      'NCERT-aligned resources ready for instant sharing.',
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b]" />
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10">
        <div className="flex items-center justify-between text-sm font-medium text-slate-300">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 px-4 py-2 text-slate-300 transition hover:border-primary-400/60 hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {t('back')}
          </button>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-slate-200 backdrop-blur transition hover:bg-white/20"
          >
            {t('register')}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid flex-1 grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative hidden overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/20 p-10 text-white shadow-2xl backdrop-blur md:flex md:flex-col">
            <div className="mb-auto space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-100">
                EduNabha
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white">
                Welcome back! Your personalised {role} workspace is ready.
              </h1>
              <p className="text-base text-slate-200/90">
                Stay focused with guided workflows across attendance, assignments, and live announcements—all optimised for quick actions and clear insight.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300/80">What’s improved</p>
              <ul className="space-y-3 text-sm text-slate-200/80">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-2 w-2 rounded-full bg-primary-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
              <div className="mb-8 space-y-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">Secure access</p>
                <h2 className="text-3xl font-semibold text-slate-900">
                  {t('login')} • {role === 'student' ? t('student') : t('teacher')}
                </h2>
                <p className="text-sm text-slate-500">Use the preview credentials or sign in with your school account.</p>
              </div>

              <div className="mb-6 rounded-2xl border border-primary-100 bg-primary-50/60 p-4 text-left text-sm text-primary-700">
                <p className="font-semibold">Demo credentials</p>
                <div className="mt-2 grid gap-1">
                  <span className="font-mono text-xs">Email: {role}@nabha.edu</span>
                  <span className="font-mono text-xs">Password: {role}@123</span>
                </div>
              </div>

              {error && (
                <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t('email')}</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={credentials.username}
                      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t('password')}</label>
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 text-white shadow-soft transition hover:bg-primary-700"
                >
                  {t('login')}
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-slate-500">
                Need a school admin account?{' '}
                <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-700">
                  {t('register')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;