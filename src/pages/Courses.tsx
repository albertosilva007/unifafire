import React from 'react';
import CourseList from '../components/CourseList';
import { Course } from '../Course';

const Courses: React.FC = () => {
  const courses: Course[] = [
    { id: 1, name: 'Engenharia de Software', departmentId: 1 },
    { id: 2, name: 'Banco de Dados', departmentId: 2 },
  ];

  return (
    <div>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;
