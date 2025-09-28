import React, { createContext, useContext, useState } from 'react';

export type Language = 'english' | 'hindi' | 'punjabi';

export type TranslationKey = 
  | 'welcome' | 'login' | 'register' | 'logout' | 'email' | 'password'
  | 'confirm_password' | 'submit' | 'name' | 'back' | 'select_role' 
  | 'student' | 'teacher' | 'select_language' | 'choose_language' 
  | 'dashboard' | 'overview' | 'my_courses' | 'assignments' | 'attendance'
  | 'performance' | 'resources' | 'welcome_back' | 'attendance_rate'
  | 'active_courses' | 'upcoming_events' | 'recent_activity' | 'students'
  | 'manage_classes' | 'class_performance' | 'teaching_schedule'
  | 'my_assignments' | 'course_materials' | 'learning_progress'
  | 'gateway_to_learning'
  // Student Dashboard
  | 'next_class' | 'teacher_label' | 'progress_label' | 'download' | 'upcoming_classes'
  | 'all_assignments' | 'subject' | 'title' | 'due_date' | 'status' | 'actions'
  | 'not_submitted' | 'submitted_on' | 'view' | 'details' | 'assignment_stats'
  | 'total_assignments' | 'submitted_assignments' | 'pending_assignments'
  | 'upcoming_deadlines' | 'due_on' | 'vs_last_month' | 'quick_stats'
  | 'announcements'
  // Layout
  | 'dark_mode' | 'light_mode' | 'notifications' | 'student_name' | 'teacher_name';

type TranslationSet = Record<TranslationKey, string>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations: Record<Language, TranslationSet> = {
  english: {
    // Common
    'welcome': 'Welcome to EduNabha',
    'login': 'Already have an account? Login here',
    'register': 'Register',
    'logout': 'Logout',
    'email': 'Email',
    'password': 'Password',
    'confirm_password': 'Confirm Password',
    'submit': 'Submit',
    'name': 'Full Name',
    'back': 'Back to Home',
    'select_role': 'Select Your Role',
    'student': 'Student',
    'teacher': 'Teacher',
    'select_language': 'Select Your Language',
    'choose_language': 'Choose your preferred language',

    // Dashboard
    'dashboard': 'Dashboard',
    'overview': 'Overview',
    'my_courses': 'My Courses',
    'assignments': 'Assignments',
    'attendance': 'Attendance',
    'performance': 'Performance',
    'resources': 'Resources',
    'welcome_back': 'Welcome back',
    'attendance_rate': 'Attendance Rate',
    'active_courses': 'Active Courses',
    'upcoming_events': 'Upcoming Events',
    'recent_activity': 'Recent Activity',

    // Teacher specific
    'students': 'Students',
    'manage_classes': 'Manage Classes',
    'class_performance': 'Class Performance',
    'teaching_schedule': 'Teaching Schedule',

    // Student specific
    'my_assignments': 'My Assignments',
    'course_materials': 'Course Materials',
    'learning_progress': 'Learning Progress',
    // Student Dashboard
    'next_class': 'Next Class',
    'teacher_label': 'Teacher',
    'progress_label': 'Progress',
    'download': 'Download',
    'upcoming_classes': 'Upcoming Classes',
    'all_assignments': 'All Assignments',
    'subject': 'Subject',
    'title': 'Title',
    'due_date': 'Due Date',
    'status': 'Status',
    'actions': 'Actions',
    'not_submitted': 'Not submitted',
    'submitted_on': 'Submitted on',
    'view': 'View',
    'details': 'Details',
    'assignment_stats': 'Assignment Statistics',
    'total_assignments': 'Total Assignments',
    'submitted_assignments': 'Submitted',
    'pending_assignments': 'Pending',
    'upcoming_deadlines': 'Upcoming Deadlines',
    'due_on': 'Due on',
    'vs_last_month': 'vs last month',
    'quick_stats': 'Quick Stats',
    'announcements': 'Announcements',
    'dark_mode': 'Dark Mode',
    'light_mode': 'Light Mode',
    'notifications': 'Notifications',
    'student_name': 'Student Name',
    'teacher_name': 'Teacher Name',
    'gateway_to_learning': 'Gateway to Digital Learning',
  },
  hindi: {
    // Common
    'welcome': 'एडूनाभा में आपका स्वागत है',
    'login': 'पहले से खाता है? यहाँ लॉगिन करें',
    'register': 'पंजीकरण करें',
    'logout': 'लॉग आउट',
    'email': 'ईमेल',
    'password': 'पासवर्ड',
    'confirm_password': 'पासवर्ड की पुष्टि करें',
    'submit': 'जमा करें',
    'name': 'पूरा नाम',
    'back': 'होम पर वापस जाएं',
    'select_role': 'अपनी भूमिका चुनें',
    'student': 'छात्र',
    'teacher': 'शिक्षक',
    'select_language': 'अपनी भाषा चुनें',
    'choose_language': 'अपनी पसंदीदा भाषा चुनें',

    // Dashboard
    'dashboard': 'डैशबोर्ड',
    'overview': 'अवलोकन',
    'my_courses': 'मेरे कोर्स',
    'assignments': 'असाइनमेंट',
    'attendance': 'उपस्थिति',
    'performance': 'प्रदर्शन',
    'resources': 'संसाधन',
    'welcome_back': 'वापसी पर स्वागत है',
    'attendance_rate': 'उपस्थिति दर',
    'active_courses': 'सक्रिय कोर्स',
    'upcoming_events': 'आगामी कार्यक्रम',
    'recent_activity': 'हाल की गतिविधि',

    // Teacher specific
    'students': 'छात्र',
    'manage_classes': 'कक्षाएं प्रबंधित करें',
    'class_performance': 'कक्षा का प्रदर्शन',
    'teaching_schedule': 'शिक्षण कार्यक्रम',

    // Student specific
    'my_assignments': 'मेरे असाइनमेंट',
    'course_materials': 'कोर्स सामग्री',
    'learning_progress': 'सीखने की प्रगति',
    // Student Dashboard
    'next_class': 'अगली कक्षा',
    'teacher_label': 'शिक्षक',
    'progress_label': 'प्रगति',
    'download': 'डाउनलोड',
    'upcoming_classes': 'आगामी कक्षाएं',
    'all_assignments': 'सभी असाइनमेंट',
    'subject': 'विषय',
    'title': 'शीर्षक',
    'due_date': 'नियत तिथि',
    'status': 'स्थिति',
    'actions': 'कार्रवाई',
    'not_submitted': 'जमा नहीं किया',
    'submitted_on': 'जमा किया गया',
    'view': 'देखें',
    'details': 'विवरण',
    'assignment_stats': 'असाइनमेंट आंकड़े',
    'total_assignments': 'कुल असाइनमेंट',
    'submitted_assignments': 'जमा किए गए',
    'pending_assignments': 'लंबित',
    'upcoming_deadlines': 'आगामी समय सीमाएं',
    'due_on': 'नियत तिथि',
    'vs_last_month': 'पिछले महीने की तुलना में',
    'quick_stats': 'त्वरित आंकड़े',
    'announcements': 'सूचनाएं',
    'dark_mode': 'डार्क मोड',
    'light_mode': 'लाइट मोड',
    'notifications': 'सूचनाएं',
    'student_name': 'छात्र का नाम',
    'teacher_name': 'शिक्षक का नाम',
    'gateway_to_learning': 'डिजिटल शिक्षा का द्वार',
  },
  punjabi: {
    // Common
    'welcome': 'ਏਡੂਨਾਭਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
    'login': 'ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ? ਇੱਥੇ ਲੌਗਇਨ ਕਰੋ',
    'register': 'ਰਜਿਸਟਰ ਕਰੋ',
    'logout': 'ਲੌਗ ਆਊਟ',
    'email': 'ਈਮੇਲ',
    'password': 'ਪਾਸਵਰਡ',
    'confirm_password': 'ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    'submit': 'ਜਮ੍ਹਾਂ ਕਰੋ',
    'name': 'ਪੂਰਾ ਨਾਮ',
    'back': 'ਮੁੱਖ ਪੰਨੇ \'ਤੇ ਵਾਪਸ ਜਾਓ',
    'select_role': 'ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ',
    'student': 'ਵਿਦਿਆਰਥੀ',
    'teacher': 'ਅਧਿਆਪਕ',
    'select_language': 'ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ',
    'choose_language': 'ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਚੁਣੋ',

    // Dashboard
    'dashboard': 'ਡੈਸ਼ਬੋਰਡ',
    'overview': 'ਸੰਖੇਪ ਜਾਣਕਾਰੀ',
    'my_courses': 'ਮੇਰੇ ਕੋਰਸ',
    'assignments': 'ਅਸਾਈਨਮੈਂਟ',
    'attendance': 'ਹਾਜ਼ਰੀ',
    'performance': 'ਪ੍ਰਦਰਸ਼ਨ',
    'resources': 'ਸਰੋਤ',
    'welcome_back': 'ਵਾਪਸ ਆਉਣ ਤੇ ਜੀ ਆਇਆਂ ਨੂੰ',
    'attendance_rate': 'ਹਾਜ਼ਰੀ ਦਰ',
    'active_courses': 'ਸਰਗਰਮ ਕੋਰਸ',
    'upcoming_events': 'ਆਉਣ ਵਾਲੇ ਪ੍ਰੋਗਰਾਮ',
    'recent_activity': 'ਤਾਜ਼ਾ ਗਤੀਵਿਧੀ',

    // Teacher specific
    'students': 'ਵਿਦਿਆਰਥੀ',
    'manage_classes': 'ਕਲਾਸਾਂ ਦਾ ਪ੍ਰਬੰਧਨ',
    'class_performance': 'ਕਲਾਸ ਪ੍ਰਦਰਸ਼ਨ',
    'teaching_schedule': 'ਪੜ੍ਹਾਈ ਦਾ ਸ਼ਡਿਊਲ',

    // Student specific
    'my_assignments': 'ਮੇਰੇ ਅਸਾਈਨਮੈਂਟ',
    'course_materials': 'ਕੋਰਸ ਸਮੱਗਰੀ',
    'learning_progress': 'ਸਿੱਖਣ ਦੀ ਪ੍ਰਗਤੀ',
    // Student Dashboard
    'next_class': 'ਅਗਲੀ ਕਲਾਸ',
    'teacher_label': 'ਅਧਿਆਪਕ',
    'progress_label': 'ਪ੍ਰਗਤੀ',
    'download': 'ਡਾਊਨਲੋਡ',
    'upcoming_classes': 'ਆਉਣ ਵਾਲੀਆਂ ਕਲਾਸਾਂ',
    'all_assignments': 'ਸਾਰੇ ਅਸਾਈਨਮੈਂਟ',
    'subject': 'ਵਿਸ਼ਾ',
    'title': 'ਸਿਰਲੇਖ',
    'due_date': 'ਨਿਯਤ ਤਾਰੀਖ',
    'status': 'ਸਥਿਤੀ',
    'actions': 'ਕਾਰਵਾਈਆਂ',
    'not_submitted': 'ਜਮ੍ਹਾਂ ਨਹੀਂ ਕੀਤਾ',
    'submitted_on': 'ਜਮ੍ਹਾਂ ਕੀਤਾ',
    'view': 'ਦੇਖੋ',
    'details': 'ਵੇਰਵੇ',
    'assignment_stats': 'ਅਸਾਈਨਮੈਂਟ ਅੰਕੜੇ',
    'total_assignments': 'ਕੁੱਲ ਅਸਾਈਨਮੈਂਟ',
    'submitted_assignments': 'ਜਮ੍ਹਾਂ ਕੀਤੇ',
    'pending_assignments': 'ਬਕਾਇਆ',
    'upcoming_deadlines': 'ਆਉਣ ਵਾਲੀਆਂ ਡੈੱਡਲਾਈਨਾਂ',
    'due_on': 'ਨਿਯਤ ਤਾਰੀਖ',
    'vs_last_month': 'ਪਿਛਲੇ ਮਹੀਨੇ ਦੇ ਮੁਕਾਬਲੇ',
    'quick_stats': 'ਫ਼ੌਰੀ ਅੰਕੜੇ',
    'announcements': 'ਸੂਚਨਾਵਾਂ',
    'dark_mode': 'ਡਾਰਕ ਮੋਡ',
    'light_mode': 'ਲਾਈਟ ਮੋਡ',
    'notifications': 'ਸੂਚਨਾਵਾਂ',
    'student_name': 'ਵਿਦਿਆਰਥੀ ਦਾ ਨਾਮ',
    'teacher_name': 'ਅਧਿਆਪਕ ਦਾ ਨਾਮ',
    'gateway_to_learning': 'ਡਿਜੀਟਲ ਸਿੱਖਿਆ ਦਾ ਦੁਆਰ'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};