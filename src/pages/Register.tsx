import React, { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const Register = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    fullName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // In a real app, you would send this to a backend
    alert('Registration successful! Please login.');
    navigate('/login?role=' + formData.role);
  };

  const onboardingSteps = useMemo(
    () => [
      'Set up language preferences for your institute once.',
      'Invite staff and learners with frictionless onboarding links.',
      'Monitor progress and share resources from a unified console.',
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#e0f2fe]">
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10">
        <div className="flex items-center justify-between text-sm font-medium text-slate-500">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-slate-500 shadow-sm transition hover:border-primary-200 hover:text-primary-700"
          >
            {t('back')}
          </button>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white shadow-soft transition hover:-translate-y-0.5"
          >
            {t('login')}
          </Link>
        </div>

        <div className="mt-12 grid flex-1 grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-10 shadow-glow backdrop-blur">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                EduNabha
              </span>
              <h1 className="font-display text-4xl font-semibold text-slate-900">
                Create your institution hub in minutes.
              </h1>
              <p className="text-base text-slate-600">
                Register to unlock collaborative dashboards for teachers, students, and caregivers. Configure language support, roles, and resources without technical overhead.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">What you can do</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {onboardingSteps.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 text-primary-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
              <div className="mb-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">Admin onboarding</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900">{t('register')}</h2>
                <p className="mt-1 text-sm text-slate-500">Create your account to invite teachers and students instantly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t('name')}</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t('email')}</label>
                  <input
                    type="email"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t('password')}</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t('confirm_password')}</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t('select_role')}</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="student">{t('student')}</option>
                    <option value="teacher">{t('teacher')}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 text-white shadow-soft transition hover:bg-primary-700"
                >
                  {t('register')}
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-slate-500">
                {t('login')}?
                <Link to="/login" className="ml-1 font-semibold text-primary-600 hover:text-primary-700">
                  {t('login')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;