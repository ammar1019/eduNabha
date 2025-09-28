import React from 'react';

const resources = [
  {
    title: 'Mathematics - Class 6',
    subject: 'Mathematics',
    description: 'NCERT Mathematics textbook covering all basic concepts',
    chapters: [
      'Knowing Our Numbers',
      'Whole Numbers',
      'Playing with Numbers',
      'Basic Geometrical Ideas'
    ],
    link: 'https://ncert.nic.in/textbook.php?femh1=0-13',
    color: 'bg-blue-500'
  },
  {
    title: 'Science - Class 6',
    subject: 'Science',
    description: 'Complete science curriculum with practical experiments',
    chapters: [
      'Food: Where Does it Come From?',
      'Components of Food',
      'Fibre to Fabric',
      'Living Things'
    ],
    link: 'https://ncert.nic.in/textbook.php?fesc1=0-13',
    color: 'bg-green-500'
  },
  {
    title: 'English - Class 6',
    subject: 'English',
    description: 'Comprehensive English language and literature book',
    chapters: [
      "Who Did Patrick's Homework?",
      "How the Dog Found Himself",
      "Taro's Reward",
      "Beauty"
    ],
    link: 'https://ncert.nic.in/textbook.php?fehl1=0-11',
    color: 'bg-purple-500'
  },
  {
    title: 'Hindi - Class 6',
    subject: 'Hindi',
    description: 'हिंदी भाषा और साहित्य की पाठ्यपुस्तक',
    chapters: [
      'वह चिड़िया जो',
      'बचपन',
      'नादान दोस्त',
      'चाँद से थोड़ी सी गप्पें'
    ],
    link: 'https://ncert.nic.in/textbook.php?fhvs1=0-15',
    color: 'bg-red-500'
  }
];

const ResourcesSection = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Class 6 Learning Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
          >
            <div className={`${resource.color} h-2`} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {resource.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                  Key Chapters:
                </h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
                  {resource.chapters.map((chapter, index) => (
                    <li key={index}>{chapter}</li>
                  ))}
                </ul>
              </div>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Access Resource →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;