import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Account', label: 'Account' },
  { value: 'Logout', label: 'logout' }
];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // if()
  };

  return (
    <Select styles={"placeholder: 'Account'"}
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

export default Dropdown;