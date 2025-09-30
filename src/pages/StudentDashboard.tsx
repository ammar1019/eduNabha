import React, { useMemo, useState } from 'react';
import AttendanceCalendar from '../components/AttendanceCalendar';
import DashboardLayout from '../components/DashboardLayout';
import { StatCard, Button, Card, ProgressBar, Badge } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import PerformanceCharts from '../components/PerformanceCharts';
import ResourcesSection from '../components/ResourcesSection';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';

// Keep the existing data objects
interface Subject {
  id: number;
  name: string;
  progress: number;
  teacher: string;
  nextClass: string;
  resources: Array<{ name: string; type: string; }>;
}

const getSubjects = (t: (key: string) => string): Subject[] => [
  { 
    id: 1, 
    name: t('subject_math'),
    progress: 75,
    teacher: 'ਡਾ. ਜਸਪ੍ਰੀਤ ਸਿੰਘ',
    nextClass: '2023-10-01 09:00 AM',
    resources: [
      { name: 'Algebra Notes', type: 'pdf' },
      { name: 'Practice Problems', type: 'doc' },
      { name: 'Video Lecture', type: 'video' }
    ]
  },
  { 
    id: 2, 
    name: 'Science', 
    progress: 60,
    teacher: 'Dr. Gagandeep Kaur',
    nextClass: '2023-10-02 11:00 AM',
    resources: [
      { name: 'Lab Manual', type: 'pdf' },
      { name: 'Experiment Results', type: 'xlsx' }
    ]
  },
  { 
    id: 3, 
    name: 'English', 
    progress: 90,
    teacher: 'Prof. Manpreet Singh',
    nextClass: '2023-10-01 02:00 PM',
    resources: [
      { name: 'Literature Review', type: 'pdf' },
      { name: 'Grammar Guide', type: 'pdf' }
    ]
  },
  { 
    id: 4, 
    name: 'History', 
    progress: 85,
    teacher: 'Dr. Harpreet Kaur',
    nextClass: '2023-10-03 10:00 AM',
    resources: [
      { name: 'Timeline Document', type: 'pdf' },
      { name: 'Historical Maps', type: 'image' }
    ]
  }
];

const assignments = [
  { 
    id: 1, 
    subject: 'Mathematics', 
    title: 'Algebra Assignment 1', 
    dueDate: '2023-10-05', 
    status: 'Pending',
    description: 'Complete exercises 1-10 from Chapter 3',
    maxMarks: 100,
    submissionType: 'pdf'
  },
  { 
    id: 2, 
    subject: 'Science', 
    title: 'Physics Lab Report', 
    dueDate: '2023-10-07', 
    status: 'Submitted',
    description: 'Write a detailed report on the pendulum experiment',
    maxMarks: 50,
    submissionType: 'doc',
    submittedOn: '2023-10-06'
  },
  { 
    id: 3, 
    subject: 'English', 
    title: 'Essay Writing', 
    dueDate: '2023-10-10', 
    status: 'Pending',
    description: 'Write a 1000-word essay on climate change',
    maxMarks: 75,
    submissionType: 'doc'
  }
];

const attendance = {
  total: 100,
  present: 85,
  percentage: 85,
  details: [
    { date: '2023-09-01', status: 'present' as const },
    { date: '2023-09-02', status: 'present' as const },
    { date: '2023-09-03', status: 'absent' as const },
    { date: '2023-09-04', status: 'present' as const },
    { date: '2023-09-05', status: 'late' as const },
    { date: '2023-09-06', status: 'present' as const },
    { date: '2023-09-07', status: 'present' as const }
  ]
};

const announcements = [
  {
    id: 1,
    title: 'Mid-Term Exam Schedule',
    date: '2023-09-28',
    content: 'Mid-term examinations will begin from October 15th. Schedule has been posted on the notice board.',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Science Fair Registration',
    date: '2023-09-27',
    content: 'Register for the annual science fair by October 5th. Great opportunity to showcase your projects!',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Library Notice',
    date: '2023-09-26',
    content: 'New reference books have arrived in the library. Check them out!',
    priority: 'low'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Meeting',
    date: '2023-10-10',
    time: '14:00',
    location: 'School Auditorium'
  },
  {
    id: 2,
    title: 'Science Fair',
    date: '2023-10-15',
    time: '09:00',
    location: 'School Ground'
  },
  {
    id: 3,
    title: 'Sports Day',
    date: '2023-10-20',
    time: '08:00',
    location: 'Sports Complex'
  }
];

const StudentDashboard = () => {
  const { t, language } = useLanguage();
  
  const subjects = [
    { 
      id: 1, 
      name: language === 'punjabi' ? 'ਗਣਿਤ' : 'Mathematics',
      progress: 75,
      teacher: language === 'punjabi' ? 'ਡਾ. ਜਸਪ੍ਰੀਤ ਸਿੰਘ' : 'Dr. Jaspreet Singh',
      nextClass: '2023-10-01 09:00 AM',
      resources: [
        { name: language === 'punjabi' ? 'ਬੀਜ ਗਣਿਤ ਨੋਟਸ' : 'Algebra Notes', type: 'pdf' },
        { name: language === 'punjabi' ? 'ਅਭਿਆਸ ਸਮੱਸਿਆਵਾਂ' : 'Practice Problems', type: 'doc' },
        { name: language === 'punjabi' ? 'ਵੀਡੀਓ ਲੈਕਚਰ' : 'Video Lecture', type: 'video' }
      ]
    },
    { 
      id: 2, 
      name: language === 'punjabi' ? 'ਵਿਗਿਆਨ' : 'Science',
      progress: 60,
      teacher: language === 'punjabi' ? 'ਡਾ. ਗਗਨਦੀਪ ਕੌਰ' : 'Dr. Gagandeep Kaur',
      nextClass: '2023-10-02 11:00 AM',
      resources: [
        { name: language === 'punjabi' ? 'ਲੈਬ ਮੈਨੂਅਲ' : 'Lab Manual', type: 'pdf' },
        { name: language === 'punjabi' ? 'ਪ੍ਰਯੋਗ ਨਤੀਜੇ' : 'Experiment Results', type: 'xlsx' }
      ]
    },
    { 
      id: 3, 
      name: language === 'punjabi' ? 'ਅੰਗਰੇਜ਼ੀ' : 'English',
      progress: 90,
      teacher: language === 'punjabi' ? 'ਪ੍ਰੋ. ਮਨਪ੍ਰੀਤ ਸਿੰਘ' : 'Prof. Manpreet Singh',
      nextClass: '2023-10-01 02:00 PM',
      resources: [
        { name: language === 'punjabi' ? 'ਸਾਹਿਤ ਸਮੀਖਿਆ' : 'Literature Review', type: 'pdf' },
        { name: language === 'punjabi' ? 'ਵਿਆਕਰਨ ਗਾਈਡ' : 'Grammar Guide', type: 'pdf' }
      ]
    },
    { 
      id: 4, 
      name: language === 'punjabi' ? 'ਇਤਿਹਾਸ' : 'History',
      progress: 85,
      teacher: language === 'punjabi' ? 'ਡਾ. ਹਰਪ੍ਰੀਤ ਕੌਰ' : 'Dr. Harpreet Kaur',
      nextClass: '2023-10-03 10:00 AM',
      resources: [
        { name: language === 'punjabi' ? 'ਸਮਾਂ ਰੇਖਾ ਦਸਤਾਵੇਜ਼' : 'Timeline Document', type: 'pdf' },
        { name: language === 'punjabi' ? 'ਇਤਿਹਾਸਕ ਨਕਸ਼ੇ' : 'Historical Maps', type: 'image' }
      ]
    }
  ];
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  const upcomingClass = subjects[0];
  const nextAssignment = assignments.find((assignment) => assignment.status === 'Pending');

  const quickActions = useMemo(() => {
    const totalResources = subjects.reduce((acc, subject) => acc + subject.resources.length, 0);
    return [
      {
        id: 'class',
        title: 'Join your next class',
        description: upcomingClass ? `${upcomingClass.name} • ${upcomingClass.nextClass}` : 'No sessions scheduled',
        icon: <PlayCircleIcon className="h-5 w-5" />,
      },
      {
        id: 'assignment',
        title: 'Complete pending assignment',
        description: nextAssignment ? `${nextAssignment.title} · Due ${nextAssignment.dueDate}` : 'All assignments submitted',
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
      },
      {
        id: 'resources',
        title: 'Review learning resources',
        description: `${totalResources} materials curated for you`,
        icon: <AcademicCapIcon className="h-5 w-5" />,
      },
    ];
  }, [subjects, upcomingClass, nextAssignment]);

  const renderStatCards = () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatCard
        title="Attendance Rate"
        value={`${attendance.percentage}%`}
        icon={<CalendarDaysIcon className="h-6 w-6" />}
        trend={{ value: 5, label: t('vs_last_month'), isPositive: true }}
      />
      <StatCard
        title="Assignments Submitted"
        value={`${assignments.filter((a) => a.status === 'Submitted').length}/${assignments.length}`}
        icon={<ClipboardDocumentCheckIcon className="h-6 w-6" />}
        color="success"
      />
      <StatCard
        title="Active Courses"
        value={subjects.length}
        icon={<AcademicCapIcon className="h-6 w-6" />}
        color="purple"
      />
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <section className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 p-8 text-white shadow-glow">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                      {t('welcome_back')}
                    </span>
                    <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Keep your learning streak alive today.</h2>
                    <p className="text-white/80 max-w-xl">{t('learning_progress')}.</p>
                  </div>
                  <div className="rounded-3xl bg-white/15 p-6 text-sm backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Next class</p>
                    <p className="mt-3 text-lg font-semibold">
                      {subjects[0]?.name}
                    </p>
                    <p className="text-white/70">{subjects[0]?.nextClass}</p>
                    <p className="mt-4 text-sm text-white/80">With {subjects[0]?.teacher}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      className="group flex w-full items-center justify-between rounded-2xl bg-white/90 px-4 py-4 text-left text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-white"
                      type="button"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{action.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{action.description}</p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition group-hover:bg-primary-200">
                        {action.icon}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">Today</p>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Attendance streak</p>
                      <p className="text-xs text-slate-400">{attendance.present} / {attendance.total} days</p>
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">{attendance.percentage}%</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Assignments due</p>
                      <p className="text-xs text-slate-400">{assignments.filter((a) => a.status === 'Pending').length} remaining</p>
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                      {assignments.length}
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Upcoming event</p>
                      <p className="text-xs text-slate-400">{upcomingEvents[0]?.title}</p>
                    </div>
                    <span className="rounded-full bg-primary-100/70 px-3 py-1 text-xs font-semibold text-primary-600">
                      {upcomingEvents[0]?.date}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section>{renderStatCards()}</section>

            <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Assignments timeline</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{assignments.length} total</span>
                </div>
                <div className="mt-5 space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 px-4 py-4 text-sm shadow-sm transition hover:border-primary-200 dark:border-slate-700 dark:hover:border-primary-400">
                      <div>
                        <p className="text-base font-semibold text-slate-800 dark:text-white">{assignment.title}</p>
                        <p className="text-xs text-slate-500">{assignment.subject}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Due</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{assignment.dueDate}</p>
                        <span className={`mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          assignment.status === 'Submitted'
                            ? 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300'
                            : 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300'
                        }`}>
                          {assignment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('announcements')}</h3>
                  <div className="mt-4 space-y-4">
                    {announcements.map((announcement) => (
                      <div
                        key={announcement.id}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/60"
                      >
                        <p className="text-sm font-semibold text-slate-800 dark:text-white">{announcement.title}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{announcement.content}</p>
                        <p className="mt-2 text-xs text-slate-400">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('upcoming_events')}</h3>
                <div className="mt-4 space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-sm dark:border-slate-700">
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-white">{event.title}</p>
                        <p className="text-xs text-slate-500">{event.location}</p>
                      </div>
                      <div className="text-right text-xs text-slate-500">
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Weekly attendance snapshot</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {attendance.details.slice(0, 5).map((entry) => (
                    <div key={entry.date} className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3 dark:border-slate-700">
                      <span>{entry.date}</span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        entry.status === 'present'
                          ? 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300'
                          : entry.status === 'late'
                          ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300'
                          : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300'
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'subjects':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map(subject => (
                <div 
                  key={subject.id} 
                  className={`bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-105 ${
                    selectedSubject.id === subject.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setSelectedSubject(subject)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">{subject.name}</h3>
                    <span className="text-sm text-primary-600 dark:text-primary-300">Next: {subject.nextClass}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Teacher: {subject.teacher}</p>
                  <div className="relative pt-1 mb-4">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-100 dark:text-primary-200 dark:bg-primary-700">
                        Progress
                      </span>
                      <span className="text-xs font-semibold inline-block text-primary-600 dark:text-primary-300">
                        {subject.progress}%
                      </span>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200 dark:bg-primary-700">
                      <div
                        style={{ width: `${subject.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="xl:col-span-1">
              <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">
                  {selectedSubject.name} Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary-700 dark:text-primary-200">Resources</h4>
                    <div className="mt-2 space-y-2">
                      {selectedSubject.resources.map((resource, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-700 rounded-lg"
                        >
                          <span className="text-primary-800 dark:text-primary-200">{resource.name}</span>
                          <button className="text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100">
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'attendance':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                {t('attendance')}
              </h2>
              <div className="w-full overflow-auto">
                <AttendanceCalendar month={new Date()} />
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {attendance.percentage}%
                    </div>
                    <div className="text-sm text-green-800 dark:text-green-200">
                      {t('attendance_rate')}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {attendance.present}
                    </div>
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      Days Present
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {attendance.total - attendance.present}
                    </div>
                    <div className="text-sm text-purple-800 dark:text-purple-200">
                      Days Absent
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Performance Overview
              </h2>
              <PerformanceCharts />
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Learning Resources
              </h2>
              <ResourcesSection />
            </div>
          </div>
        );

      case 'assignments':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <div className="bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-primary-700">
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
                    {t('all_assignments')}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {assignments.map(assignment => (
                      <div key={assignment.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-primary-700 rounded-lg">
                        <div>
                          <h4 className="font-medium text-primary-900 dark:text-primary-100">{assignment.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{assignment.subject}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Due: {assignment.dueDate}</p>
                        </div>
                        <div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            assignment.status === 'Submitted' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {assignment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1 space-y-6">
              <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">Assignment Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-primary-50 dark:bg-primary-700 rounded-lg">
                    <span className="text-primary-800 dark:text-primary-200">Total</span>
                    <span className="text-primary-600 dark:text-primary-300 font-semibold">{assignments.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                    <span className="text-green-800 dark:text-green-200">Submitted</span>
                    <span className="text-green-600 dark:text-green-300 font-semibold">
                      {assignments.filter(a => a.status === 'Submitted').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                    <span className="text-yellow-800 dark:text-yellow-200">Pending</span>
                    <span className="text-yellow-600 dark:text-yellow-300 font-semibold">
                      {assignments.filter(a => a.status === 'Pending').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <DashboardLayout 
      userType="student"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div className="space-y-6">
        {renderContent()}
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;