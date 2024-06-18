import React from 'react';
import { Department } from '../Department';

interface DepartmentListProps {
  departments: Department[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  return (
    <div>
      <h2>Departamentos</h2>
      <ul>
        {departments.map(department => (
          <li key={department.id}>{department.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
