import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Departments from './pages/Departments';
import Professors from './pages/Professors';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/professors" element={<Professors />} />
      </Routes>
    </Router>
  );
};

export default App;
