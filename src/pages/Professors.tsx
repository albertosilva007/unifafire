import React from 'react';
import ProfessorList from '../components/ProfessorList';
import { Professor } from '../Professor';

const Professors: React.FC = () => {
  const professors: Professor[] = [
    { id: 1, name: 'Prof. João', departmentId: 1 },
    { id: 2, name: 'Prof. Maria', departmentId: 2 },
  ];

  return (
    <div>
      <ProfessorList professors={professors} />
    </div>
  );
};

export default Professors;
