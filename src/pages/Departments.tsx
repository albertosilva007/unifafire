import React from 'react';
import DepartmentList from '../components/DepartmentList';
import { Department } from '../Department';

const Departments: React.FC = () => {
  const departments: Department[] = [
    { id: 1, name: 'Ciência da Computação' },
    { id: 2, name: 'Matemática' },
  ];

  return (
    <div>
      <DepartmentList departments={departments} />
    </div>
  );
};

export default Departments;
