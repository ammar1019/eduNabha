import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ArchiveBoxIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  MoonIcon,
  Squares2X2Icon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

interface SidebarProps {
  children: React.ReactNode;
  userType: 'student' | 'teacher';
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

type MenuItem = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
};

const DashboardLayout: React.FC<SidebarProps> = ({
  children,
  userType,
  activeTab = 'overview',
  onTabChange,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const studentMenuItems: MenuItem[] = useMemo(
    () => [
      {
        id: 'overview',
        label: t('dashboard'),
        hint: 'Your daily briefing',
        icon: <Squares2X2Icon className="h-5 w-5" />,
      },
      {
        id: 'subjects',
        label: t('my_courses'),
        hint: 'Subjects & mentors',
        icon: <BookOpenIcon className="h-5 w-5" />,
      },
      {
        id: 'assignments',
        label: t('assignments'),
        hint: 'Due work & status',
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
      },
      {
        id: 'attendance',
        label: t('attendance'),
        hint: 'Calendar view',
        icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
      },
      {
        id: 'performance',
        label: t('performance'),
        hint: 'Analytics & trends',
        icon: <ChartBarIcon className="h-5 w-5" />,
      },
      {
        id: 'resources',
        label: t('resources'),
        hint: 'Curated materials',
        icon: <ArchiveBoxIcon className="h-5 w-5" />,
      },
    ],
    [t]
  );

  const teacherMenuItems: MenuItem[] = useMemo(
    () => [
      {
        id: 'overview',
        label: t('dashboard'),
        hint: 'Class insights',
        icon: <Squares2X2Icon className="h-5 w-5" />,
      },
      {
        id: 'students',
        label: t('students'),
        hint: 'Rosters & attendance',
        icon: <AcademicCapIcon className="h-5 w-5" />,
      },
      {
        id: 'modules',
        label: t('course_materials'),
        hint: 'Lessons & units',
        icon: <BookOpenIcon className="h-5 w-5" />,
      },
      {
        id: 'assignments',
        label: t('assignments'),
        hint: 'Submissions & grading',
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
      },
    ],
    [t]
  );

  const menuItems = userType === 'student' ? studentMenuItems : teacherMenuItems;

  const handleTabChange = (tabId: string) => {
    onTabChange?.(tabId);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : ''}`}>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200/60 bg-white/95 px-5 pb-6 pt-6 shadow-xl backdrop-blur transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900/95 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-soft">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12.5a.5.5 0 01-.78.41L12 15.5l-7.22 4.41A.5.5 0 014 19.5V7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">EduNabha</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('gateway_to_learning')}</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close navigation"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 space-y-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-soft'
                    : 'text-slate-500 hover:bg-primary-50 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500 dark:bg-slate-800/80 dark:text-slate-300'
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.label}</span>
                    {item.hint && <span className="block text-xs text-slate-400 dark:text-slate-500">{item.hint}</span>}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4 pt-10">
          <div className="rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Language</p>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'english' | 'hindi' | 'punjabi')}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
              <option value="punjabi">ਪੰਜਾਬੀ</option>
            </select>
          </div>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-primary-200 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            <span>{isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex w-full items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
          >
            <span>{t('logout')}</span>
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </button>
        </div>
      </aside>

      <div className="flex min-h-screen flex-col lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/95 backdrop-blur transition dark:border-slate-800 dark:bg-slate-950/80">
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
                aria-label="Open navigation"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              <div className="hidden lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Today</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-4">
              <div className="relative w-full max-w-xl">
                <input
                  type="search"
                  placeholder="Quick search (classes, assignments, resources...)"
                  className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 hidden items-center text-xs font-semibold text-slate-400 sm:flex">
                  ⌘K
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-primary-200 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <BellIcon className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white">3</span>
              </button>
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 transition dark:border-slate-700 dark:bg-slate-900">
                <img
                  className="h-10 w-10 rounded-full border border-slate-200 object-cover dark:border-slate-700"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userType === 'student' ? t('student_name') : t('teacher_name'))}&background=0D8ABC&color=fff`}
                  alt="Profile"
                />
                <div className="hidden text-left text-sm font-medium text-slate-700 dark:text-slate-200 sm:block">
                  <p>{userType === 'student' ? t('student_name') : t('teacher_name')}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{userType === 'student' ? 'Student' : 'Teacher'} workspace</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto w-full max-w-7xl px-6 py-8">
            {children}
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;