import React, { useState } from 'react';
import AttendanceCalendar from '../components/AttendanceCalendar';
import DashboardLayout from '../components/DashboardLayout';
import { StatCard, Button, Card, ProgressBar, Badge } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import PerformanceCharts from '../components/PerformanceCharts';
import ResourcesSection from '../components/ResourcesSection';

// Keep the existing data objects
const subjects = [
  { 
    id: 1, 
    name: 'Mathematics', 
    progress: 75,
    teacher: 'Dr. Smith',
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
    teacher: 'Mrs. Johnson',
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
    teacher: 'Mr. Williams',
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
    teacher: 'Ms. Davis',
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
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  const renderStatCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Attendance Rate"
        value={`${attendance.percentage}%`}
        icon={
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        trend={{ value: 5, label: t('vs_last_month'), isPositive: true }}
      />
      <StatCard
        title="Assignments"
        value={`${assignments.filter(a => a.status === 'Submitted').length}/${assignments.length}`}
        icon={
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        }
        color="success"
      />
      <StatCard
        title="Active Courses"
        value={subjects.length}
        icon={
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        }
        color="purple"
      />
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{t('welcome_back')}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{t('learning_progress')}.</p>
                </div>
              </div>
              {renderStatCards()}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">{t('recent_activity')}</h3>
                  <div className="space-y-3">
                    {assignments.slice(0, 3).map(assignment => (
                      <div key={assignment.id} className="flex items-center space-x-3 text-sm">
                        <div className={`w-2 h-2 rounded-full ${
                          assignment.status === 'Submitted' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <p className="text-gray-700 dark:text-gray-200">{assignment.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">{t('quick_stats')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary-50 dark:bg-primary-700 rounded-lg">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-200">{attendance.percentage}%</div>
                      <p className="text-primary-700 dark:text-primary-300">{t('attendance')}</p>
                    </div>
                    <div className="text-center p-4 bg-primary-50 dark:bg-primary-700 rounded-lg">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-200">
                        {assignments.filter(a => a.status === 'Submitted').length}/{assignments.length}
                      </div>
                      <p className="text-primary-700 dark:text-primary-300">Assignments</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">{t('upcoming_events')}</h3>
                  <div className="space-y-4">
                    {upcomingEvents.map(event => (
                      <div key={event.id} className="flex items-center justify-between border-b pb-3">
                        <div>
                          <h4 className="font-medium text-primary-700 dark:text-primary-200">{event.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{event.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-primary-600 dark:text-primary-300">{event.date}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="xl:col-span-1">
                <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">{t('announcements')}</h3>
                  <div className="space-y-4">
                    {announcements.map(announcement => (
                      <div key={announcement.id} className="border-l-4 pl-4 py-2" style={{
                        borderColor: announcement.priority === 'high' ? '#ef4444' : 
                                   announcement.priority === 'medium' ? '#f59e0b' : '#10b981'
                      }}>
                        <h4 className="font-medium text-primary-700 dark:text-primary-200">{announcement.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{announcement.content}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                Attendance Calendar
              </h2>
              <AttendanceCalendar month={new Date()} />
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