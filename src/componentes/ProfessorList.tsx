import React from 'react';
import { Professor } from '../Professor';

interface ProfessorListProps {
  professors: Professor[];
}

const ProfessorList: React.FC<ProfessorListProps> = ({ professors }) => {
  return (
    <div>
      <h2>Professores</h2>
      <ul>
        {professors.map(professor => (
          <li key={professor.id}>{professor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessorList;
