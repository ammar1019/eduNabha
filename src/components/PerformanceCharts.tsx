import React from 'react';

const performanceData = {
  subjects: [
    { name: 'Mathematics', score: 85, average: 75, trend: [82, 85, 80, 85] },
    { name: 'Science', score: 78, average: 72, trend: [75, 78, 76, 78] },
    { name: 'English', score: 92, average: 80, trend: [88, 90, 92, 92] },
    { name: 'Hindi', score: 88, average: 82, trend: [85, 86, 88, 88] },
    { name: 'Social Studies', score: 76, average: 70, trend: [72, 74, 75, 76] },
  ],
  recentTests: [
    { name: 'Unit Test 1', score: 85, total: 100, date: '2023-07-15', rank: 5 },
    { name: 'Mid Term', score: 92, total: 100, date: '2023-08-30', rank: 2 },
    { name: 'Unit Test 2', score: 88, total: 100, date: '2023-09-20', rank: 3 },
    { name: 'Quarter Final', score: 90, total: 100, date: '2023-10-15', rank: 4 },
  ],
  skills: [
    { name: 'Problem Solving', level: 85 },
    { name: 'Critical Thinking', level: 80 },
    { name: 'Communication', level: 90 },
    { name: 'Team Work', level: 95 },
  ]
};

const PerformanceCharts: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Subject Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {performanceData.subjects.map((subject, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{subject.name}</h3>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{subject.score}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
              <div
                className="absolute h-full bg-blue-600 rounded-full"
                style={{ width: `${subject.score}%` }}
              />
              <div
                className="absolute h-full bg-green-400 opacity-30 rounded-full"
                style={{ width: `${subject.average}%` }}
              />
            </div>
            
            {/* Performance Trend */}
            <div className="flex items-end justify-between h-16 mb-2">
              {subject.trend.map((score, i) => (
                <div
                  key={i}
                  className="w-4 bg-blue-500 rounded-t"
                  style={{ height: `${score}%` }}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">Class Average: {subject.average}%</p>
          </div>
        ))}
      </div>

      {/* Recent Tests Table */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Recent Assessments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Test
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {performanceData.recentTests.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {test.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {test.score}/{test.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {test.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    #{test.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 rounded-full h-2"
                        style={{ width: `${(test.score / test.total) * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Skills Assessment */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Skills Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performanceData.skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="absolute h-full bg-blue-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;