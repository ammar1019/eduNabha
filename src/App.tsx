import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

// Dummy auth data (replace with real auth later)
const dummyUsers = {
  student: { username: 'student@nabha.edu', password: 'student@123' },
  teacher: { username: 'teacher@nabha.edu', password: 'teacher@123' }
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login dummyUsers={dummyUsers} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student/*" element={<StudentDashboard />} />
          <Route path="/teacher/*" element={<TeacherDashboard />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;