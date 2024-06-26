import React from 'react';

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onChange }) => (
  <select value={selectedOption} onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Dropdown;
