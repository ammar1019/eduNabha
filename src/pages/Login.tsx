import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          {t('login')} - {role === 'student' ? t('student') : t('teacher')}
        </h2>

        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-100 rounded-lg text-sm">
          <p className="font-medium mb-1">Demo Credentials:</p>
          <p>Email: {role}@nabha.edu</p>
          <p>Password: {role}@123</p>
        </div>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              {t('email')}
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              {t('password')}
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition duration-200"
          >
            {t('login')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link 
            to="/register" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline"
          >
            {t('register')}
          </Link>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition duration-200"
          >
            {t('back')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;