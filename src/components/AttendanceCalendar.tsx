import React from 'react';

interface AttendanceCalendarProps {
  month: Date;
}

const AttendanceCalendar: React.FC<AttendanceCalendarProps> = ({ month }) => {
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  // Generate random attendance status
  const getRandomStatus = (day: number) => {
    const date = new Date(month.getFullYear(), month.getMonth(), day);
    const isWeekend = date.getDay() % 6 === 0;
    const isCurrentMonth = date.getMonth() === new Date().getMonth();
    const isPastDay = isCurrentMonth && day <= new Date().getDate();
    
    if (isWeekend || !isPastDay) return 'none';
    
    const rand = Math.random();
    if (rand < 0.8) return 'present';
    if (rand < 0.9) return 'late';
    return 'absent';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-500';
      case 'absent':
        return 'bg-red-500';
      case 'late':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {month.toLocaleString('default', { month: 'long' })} {month.getFullYear()}
        </h3>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
        {blanks.map(blank => (
          <div key={`blank-${blank}`} className="h-12"></div>
        ))}
        {days.map(day => {
          const status = getRandomStatus(day);
          return (
            <div
              key={day}
              className={`h-12 border rounded-lg flex items-center justify-center relative group ${
                status !== 'none' ? getStatusColor(status) : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              <span className={`text-sm font-medium ${status !== 'none' ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                {day}
              </span>
              {status !== 'none' && (
                <>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-75"></div>
                  </div>
                  <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">80%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Attendance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {days.filter(d => {
                const date = new Date(month.getFullYear(), month.getMonth(), d);
                const isCurrentMonth = date.getMonth() === new Date().getMonth();
                return isCurrentMonth && d <= new Date().getDate();
              }).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Days This Month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalendar;